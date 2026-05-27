import type { ContactInput } from "@/lib/validation/contact";

const WEBHOOK_TIMEOUT_MS = 5000;

function getWebhookUrl() {
  return process.env.DISCORD_CONTACT_WEBHOOK_URL?.trim() ?? "";
}

function formatDiscordMessage(input: ContactInput) {
  const subject = input.subject?.trim() || "No subject";
  const sourcePage = input.sourcePage?.trim() || "/contact";

  return [
    "New portfolio inquiry",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Subject: ${subject}`,
    `Source: ${sourcePage}`,
    "",
    "Message:",
    input.message,
  ].join("\n");
}

export async function sendDiscordWebhook(input: ContactInput) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Discord contact webhook is not configured.");
    }

    console.warn("DISCORD_CONTACT_WEBHOOK_URL is not set; skipping Discord delivery.");
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: formatDiscordMessage(input),
    }),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook request failed with status ${response.status}.`);
  }
}
