import { NextResponse } from "next/server";
import { buildTerminalContext } from "@/lib/terminal/context";
import { resolveAiFallback } from "@/lib/terminal/provider";
import { fallbackTerminalResponse, resolveRuleBasedQuery } from "@/lib/terminal/rules";

type TerminalRequest = {
  query?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as TerminalRequest;
  const query = payload.query?.trim() ?? "";

  const ruleMatch = resolveRuleBasedQuery(query);
  if (ruleMatch) {
    return NextResponse.json({
      message: ruleMatch.message,
      links: ruleMatch.links,
      suggestions: ruleMatch.suggestions,
      source: ruleMatch.source,
    });
  }

  const aiResponse = await resolveAiFallback({
    query,
    context: buildTerminalContext(),
  });

  return NextResponse.json(aiResponse ?? fallbackTerminalResponse());
}
