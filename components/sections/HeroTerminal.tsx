"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteBlueprint } from "@/lib/content/schema";
import type { TerminalResponse } from "@/lib/terminal/types";

type HeroTerminalData = SiteBlueprint["home"]["hero"]["terminal"];

type TranscriptEntry =
  | { id: string; role: "system"; response: TerminalResponse }
  | { id: string; role: "user"; content: string };

export function HeroTerminal({ terminal }: { terminal: HeroTerminalData }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState<TranscriptEntry[]>([
    { id: "boot", role: "system", response: { ...terminal.initialResponse, source: "rule" } },
  ]);

  function formatSourceLabel(source: TerminalResponse["source"]) {
    if (source === "rule") return "router";
    if (source === "ai") return "ai fallback";
    return "fallback";
  }

  async function runQuery(rawQuery: string) {
    const query = rawQuery.trim();
    if (!query) return;

    setEntries((current) => [...current.slice(-4), { id: `u-${Date.now()}`, role: "user", content: query }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/terminal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const payload = (await response.json()) as TerminalResponse;
      setEntries((current) => [...current.slice(-5), { id: `s-${Date.now()}`, role: "system", response: payload }]);
    } catch {
      setEntries((current) => [
        ...current.slice(-5),
        {
          id: `s-${Date.now()}`,
          role: "system",
          response: {
            message: "The terminal could not resolve that right now. You can still ask about projects, resume, about, contact, or case studies.",
            suggestions: terminal.exampleCommands.slice(0, 3),
            source: "fallback",
          },
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="hero-terminal-shell">
      <div className="hero-panel terminal-panel">
        <div className="terminal-topline">
          <div className="meta-label">{terminal.label}</div>
          <div className="terminal-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="terminal-intro">
          <strong>{terminal.introLine}</strong>
          {terminal.helpText ? <p>{terminal.helpText}</p> : null}
        </div>

        <div className="terminal-transcript" aria-live="polite">
          {entries.map((entry) =>
            entry.role === "user" ? (
              <div key={entry.id} className="terminal-line terminal-line-user">
                <span className="terminal-prompt">$</span>
                <span>{entry.content}</span>
              </div>
            ) : (
              <div key={entry.id} className="terminal-line terminal-line-system">
                <div className="terminal-response-head">
                  <span className="meta-label">response</span>
                  <span className="terminal-source">{formatSourceLabel(entry.response.source)}</span>
                </div>
                <p>{entry.response.message}</p>
                {entry.response.links?.length ? (
                  <div className="terminal-links">
                    {entry.response.links.map((link) => (
                      <Link key={`${entry.id}-${link.href}`} href={link.href} className="terminal-link">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
                {entry.response.suggestions?.length ? (
                  <div className="terminal-suggestions">
                    {entry.response.suggestions.map((suggestion) => (
                      <button key={`${entry.id}-${suggestion}`} type="button" className="terminal-chip" onClick={() => runQuery(suggestion)}>
                        {suggestion}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ),
          )}
          {isLoading ? <div className="terminal-line terminal-line-pending">Resolving…</div> : null}
        </div>

        <form
          className="terminal-form"
          onSubmit={(event) => {
            event.preventDefault();
            void runQuery(input);
          }}
        >
          <span className="terminal-prompt">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={terminal.promptPlaceholder}
            aria-label="Ask the portfolio terminal"
          />
        </form>

        <div className="terminal-examples">
          {terminal.exampleCommands.map((command) => (
            <button key={command} type="button" className="terminal-chip" onClick={() => runQuery(command)}>
              {command}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
