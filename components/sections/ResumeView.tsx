"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { StructuredResume } from "@/lib/content/resume-data";
import type { SiteBlueprint } from "@/lib/content/schema";

type ResumeContent = SiteBlueprint["resume"];

export function ResumeView({ resume, structuredResume }: { resume: ResumeContent; structuredResume: StructuredResume }) {
  const [mode, setMode] = useState<"resume" | "json">("resume");
  const [copied, setCopied] = useState(false);

  const jsonValue = useMemo(() => JSON.stringify(structuredResume, null, 2), [structuredResume]);
  const highlightedJson = useMemo(() => highlightJson(jsonValue), [jsonValue]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMode(params.get("view") === "json" ? "json" : "resume");
  }, []);

  function updateMode(nextMode: "resume" | "json") {
    setMode(nextMode);
    const params = new URLSearchParams(window.location.search);
    if (nextMode === "json") {
      params.set("view", "json");
    } else {
      params.delete("view");
    }
    const query = params.toString();
    window.history.replaceState({}, "", query ? `${window.location.pathname}?${query}` : window.location.pathname);
  }

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(jsonValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  function downloadJson() {
    const blob = new Blob([jsonValue], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "bhavya-dalwadi-resume.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="resume-mode-switch" role="tablist" aria-label="Resume view mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "resume"}
          className={`resume-mode-tab${mode === "resume" ? " is-active" : ""}`}
          onClick={() => updateMode("resume")}
        >
          Resume
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "json"}
          className={`resume-mode-tab${mode === "json" ? " is-active" : ""}`}
          onClick={() => updateMode("json")}
        >
          JSON
        </button>
      </div>

      {mode === "resume" ? (
        <div className="section-shell">
          <div className="about-grid about-grid-wide">
            <article className="about-panel about-panel-wide interaction-soft">
              <div className="meta-label">{resume.snapshot.title}</div>
              <ul>
                {(resume.snapshot.items ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="resume-highlight-stack">
                {structuredResume.selectedWins.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p className="body-copy">{item.summary}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="about-panel interaction-soft">
              <div className="meta-label">{resume.highlights.title}</div>
              <p className="body-copy">{resume.highlights.body}</p>
              <div className="focus-stack">
                {structuredResume.strengths.map((item) => (
                  <p key={item} className="body-copy">{item}</p>
                ))}
              </div>
            </article>
          </div>

          <div className="about-grid">
            <article className="about-panel interaction-soft">
              <div className="meta-label">Skills</div>
              <div className="resume-skill-groups">
                <div>
                  <strong>Primary</strong>
                  <div className="tags">
                    {structuredResume.skills.primary.map((skill) => <span key={skill} className="tag">{skill}</span>)}
                  </div>
                </div>
                <div>
                  <strong>AI</strong>
                  <div className="tags">
                    {structuredResume.skills.ai.map((skill) => <span key={skill} className="tag">{skill}</span>)}
                  </div>
                </div>
                <div>
                  <strong>Platform</strong>
                  <div className="tags">
                    {[...structuredResume.skills.secondary, ...structuredResume.skills.cloud].map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="about-panel interaction-soft">
              <div className="meta-label">Target Direction</div>
              <div className="focus-stack">
                {structuredResume.targetDirection.map((item) => (
                  <p key={item} className="body-copy">{item}</p>
                ))}
              </div>
              <div className="meta-label" style={{ marginTop: "0.85rem" }}>{structuredResume.fit.title}</div>
              <p className="body-copy">{structuredResume.fit.body}</p>
            </article>
          </div>

          <article className="about-panel interaction-soft">
            <div className="meta-label">Experience</div>
            <div className="resume-experience-timeline">
              {structuredResume.experience.map((role) => (
                <article key={`${role.company}-${role.title}`} className="resume-timeline-item">
                  <div className="resume-timeline-rail" aria-hidden="true">
                    <span className="resume-timeline-dot" />
                  </div>
                  <div className="resume-timeline-card">
                    <div className="resume-role-head">
                      <div>
                        <h3>{role.title}</h3>
                        <p className="body-copy">{role.company}</p>
                      </div>
                      {(role.startDate || role.endDate) ? (
                        <span className="resume-role-date">
                          {[role.startDate, role.endDate ?? "Present"].filter(Boolean).join(" - ")}
                        </span>
                      ) : null}
                    </div>
                    <ul>
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <div className="about-grid">
            <article className="about-panel interaction-soft">
              <div className="meta-label">Leadership Signals</div>
              <ul>
                {structuredResume.leadershipSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-panel interaction-soft">
              <div className="meta-label">Education</div>
              <div className="focus-stack">
                {structuredResume.education.map((entry) => (
                  <article key={`${entry.institution}-${entry.degree}`}>
                    <h3>{entry.degree} in {entry.field}</h3>
                    <p className="body-copy">{entry.institution}</p>
                    <p className="body-copy">{entry.graduationDate}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>

          <div className="hero-actions" style={{ marginTop: "1rem" }}>
            <Link href={resume.primaryCta.href} className="link-btn">{resume.primaryCta.label}</Link>
            <Link href={resume.secondaryCta.href} className="link-btn">{resume.secondaryCta.label}</Link>
          </div>

          <p className="route-lead" style={{ marginTop: "0.85rem" }}>
            The page is driven from a structured resume data model. If the PDF is unavailable, use Contact and I will share the latest copy directly.
          </p>
        </div>
      ) : (
        <div className="about-panel interaction-soft resume-json-panel">
          <div className="resume-json-toolbar">
            <div>
              <div className="meta-label">Structured Resume Data</div>
              <p className="resume-json-note">Same resume content, exposed in a machine-friendly form for LLM and tooling workflows.</p>
            </div>
            <div className="resume-json-actions">
              <button type="button" className="secondary resume-copy-btn" onClick={() => void copyJson()}>
                {copied ? "Copied" : "Copy JSON"}
              </button>
              <button type="button" className="secondary resume-copy-btn" onClick={downloadJson}>
                Download JSON
              </button>
            </div>
          </div>
          <pre className="resume-json-block"><code dangerouslySetInnerHTML={{ __html: highlightedJson }} /></pre>
          <div className="hero-actions">
            <Link href={resume.primaryCta.href} className="link-btn">{resume.primaryCta.label}</Link>
            <Link href={resume.secondaryCta.href} className="link-btn">{resume.secondaryCta.label}</Link>
          </div>
        </div>
      )}
    </>
  );
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightJson(jsonValue: string) {
  const escaped = escapeHtml(jsonValue);
  return escaped.replace(
    /("(?:\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (match, stringToken: string, colon: string, booleanOrNull: string, numberToken: string) => {
      if (stringToken && colon) {
        return `<span class="json-key">${stringToken}</span>${colon}`;
      }
      if (stringToken) {
        return `<span class="json-string">${stringToken}</span>`;
      }
      if (booleanOrNull) {
        return `<span class="json-boolean">${booleanOrNull}</span>`;
      }
      if (numberToken) {
        return `<span class="json-number">${numberToken}</span>`;
      }
      return match;
    },
  );
}
