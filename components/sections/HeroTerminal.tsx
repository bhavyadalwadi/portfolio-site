"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/lib/content/site-content";
import type { SiteBlueprint } from "@/lib/content/schema";
import type { TerminalResponse } from "@/lib/terminal/types";

type HeroTerminalData = SiteBlueprint["home"]["hero"]["terminal"];

type TranscriptEntry =
  | { id: string; role: "system"; response: TerminalResponse }
  | { id: string; role: "user"; content: string };

export function HeroTerminal({ terminal }: { terminal: HeroTerminalData }) {
  const ui = siteContent.ui.terminal;
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState<TranscriptEntry[]>([
    { id: "boot", role: "system", response: { ...terminal.initialResponse, source: "rule" } },
  ]);
  const isBootState = entries.length === 1 && entries[0]?.id === "boot";

  function formatSourceLabel(source: TerminalResponse["source"]) {
    if (source === "rule") return ui.sourceLabels.rule;
    if (source === "ai") return ui.sourceLabels.ai;
    return ui.sourceLabels.fallback;
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
            message: ui.fetchErrorMessage,
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
          <div className="terminal-topline-main">
            <div className="meta-label">{terminal.label}</div>
            <span className="terminal-shell-badge">zsh</span>
          </div>
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

        <div className={`terminal-transcript${isBootState ? " terminal-transcript-boot" : ""}`} aria-live="polite">
          {entries.map((entry) =>
            entry.role === "user" ? (
              <div key={entry.id} className="terminal-line terminal-line-user">
                <div className="terminal-user-prompt">
                  <span className="terminal-shell-path">{terminal.label}</span>
                  <span className="terminal-shell-symbol">%</span>
                </div>
                <span>{entry.content}</span>
              </div>
            ) : (
              <div key={entry.id} className={`terminal-line terminal-line-system${entry.id === "boot" ? " terminal-line-boot" : ""}`}>
                {entry.id === "boot" ? (
                  <>
                    <p className="terminal-boot-copy">{entry.response.message}</p>
                    {entry.response.suggestions?.length ? (
                      <div className="terminal-boot-mosaic">
                        {entry.response.suggestions.map((suggestion) => (
                          <button key={`${entry.id}-${suggestion}`} type="button" className="terminal-chip terminal-chip-boot" onClick={() => runQuery(suggestion)}>
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="terminal-response-head">
                      <span className="meta-label">{ui.responseLabel}</span>
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
                  </>
                )}
              </div>
            ),
          )}
          {isLoading ? <div className="terminal-line terminal-line-pending">{ui.pendingLabel}</div> : null}
        </div>

        <form
          className="terminal-form"
          onSubmit={(event) => {
            event.preventDefault();
            void runQuery(input);
          }}
        >
          <span className="terminal-form-label">command</span>
          <span className="terminal-shell-path">{terminal.label}</span>
          <span className="terminal-shell-symbol">%</span>
          <div className="terminal-input-wrap">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={terminal.promptPlaceholder}
              aria-label={ui.inputAriaLabel}
            />
          </div>
        </form>

        {!isBootState ? (
          <div className="terminal-examples">
            {terminal.exampleCommands.map((command) => (
              <button key={command} type="button" className="terminal-chip" onClick={() => runQuery(command)}>
                {command}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
