import type { ActionLink } from "@/lib/content/schema";

export type TerminalResponseSource = "rule" | "ai" | "fallback";

export type TerminalResponse = {
  message: string;
  links?: ActionLink[];
  suggestions?: string[];
  source: TerminalResponseSource;
};
