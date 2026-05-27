import type { TerminalResponse } from "@/lib/terminal/types";

const REQUEST_TIMEOUT_MS = 3500;
type Provider = "auto" | "ollama" | "openai" | "none";

type ProviderPayload = {
  query: string;
  context: unknown;
};

function getProvider() {
  return (process.env.PORTFOLIO_TERMINAL_PROVIDER?.trim().toLowerCase() || "auto") as Provider;
}

async function fetchWithTimeout(url: string, init: RequestInit) {
  return fetch(url, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
}

export async function resolveAiFallback({ query, context }: ProviderPayload): Promise<TerminalResponse | null> {
  const provider = getProvider();

  if (provider === "none") {
    return null;
  }

  const order = resolveProviderOrder(provider);

  for (const candidate of order) {
    const response = candidate === "ollama"
      ? await resolveWithOllama(query, context)
      : await resolveWithOpenAI(query, context);

    if (response) return response;
  }

  return null;
}

function resolveProviderOrder(provider: Provider) {
  if (provider === "ollama") return ["ollama"] as const;
  if (provider === "openai") return ["openai"] as const;
  if (process.env.NODE_ENV === "development") return ["ollama", "openai"] as const;
  return ["openai", "ollama"] as const;
}

async function resolveWithOllama(query: string, context: unknown): Promise<TerminalResponse | null> {
  const baseUrl = process.env.OLLAMA_BASE_URL?.trim() || "http://127.0.0.1:11434";
  const model = process.env.OLLAMA_MODEL?.trim() || "llama3.2";

  try {
    const response = await fetchWithTimeout(`${baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        stream: false,
        messages: buildMessages(query, context),
        options: { temperature: 0.2 },
      }),
    });

    if (!response.ok) return null;
    const payload = (await response.json()) as { message?: { content?: string } };
    const message = payload.message?.content?.trim();
    if (!message) return null;
    return { message, suggestions: ["projects", "resume", "contact"], source: "ai" };
  } catch {
    return null;
  }
}

async function resolveWithOpenAI(query: string, context: unknown): Promise<TerminalResponse | null> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) return null;

  try {
    const response = await fetchWithTimeout("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini",
        temperature: 0.2,
        messages: buildMessages(query, context),
      }),
    });

    if (!response.ok) return null;
    const payload = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const message = payload.choices?.[0]?.message?.content?.trim();
    if (!message) return null;
    return { message, suggestions: ["projects", "resume", "contact"], source: "ai" };
  } catch {
    return null;
  }
}

function buildMessages(query: string, context: unknown) {
  return [
    {
      role: "system",
      content:
        "You are a homepage terminal for a personal engineering portfolio. Answer only from the provided site context. Be concise, recruiter-safe, and do not invent projects, roles, metrics, employers, or background not present in the context. Prefer 2-4 sentences.",
    },
    {
      role: "user",
      content: `Site context: ${JSON.stringify(context)}\n\nQuestion: ${query}`,
    },
  ];
}
