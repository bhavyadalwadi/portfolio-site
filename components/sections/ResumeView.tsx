import Link from "next/link";
import { siteContent } from "@/lib/content/site-content";
import type { StructuredResume } from "@/lib/content/resume-data";
import type { SiteBlueprint } from "@/lib/content/schema";

type ResumeContent = SiteBlueprint["resume"];

function formatDate(d: string): string {
  if (d === "Present") return "Present";
  const [year, month] = d.split("-");
  if (!month) return year;
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ResumeView({ resume, structuredResume }: { resume: ResumeContent; structuredResume: StructuredResume }) {
  const ui = siteContent.ui.resumePage;

  return (
    <div className="resume-layout">

      {/* ── Row 1: Identity + Skills ── */}
      <div className="resume-col">
        <section className="resume-section">
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
        </section>
      </div>

      <div className="resume-col">
        <section className="resume-section">
          <div className="meta-label">{ui.skillsLabel}</div>
          <div className="resume-skill-groups">
            <div>
              <strong>{ui.primarySkillsLabel}</strong>
              <div className="tags">
                {structuredResume.skills.primary.map((skill) => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </div>
            <div>
              <strong>{ui.aiSkillsLabel}</strong>
              <div className="tags">
                {structuredResume.skills.ai.map((skill) => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </div>
            <div>
              <strong>{ui.platformSkillsLabel}</strong>
              <div className="tags">
                {[...structuredResume.skills.secondary, ...structuredResume.skills.cloud].map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Experience (full-width, prime position) ── */}
      <div className="resume-full">
        <section className="resume-section">
          <div className="meta-label">{ui.experienceLabel}</div>
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
                        {[role.startDate, role.endDate ?? "Present"].filter(Boolean).map(formatDate).join(" – ")}
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
        </section>
      </div>

      {/* ── Row 3: Supporting context ── */}
      <div className="resume-col">
        <section className="resume-section">
          <div className="meta-label">{resume.highlights.title}</div>
          <div className="focus-stack focus-stack-chips">
            {structuredResume.strengths.map((item) => (
              <p key={item} className="body-copy">{item}</p>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="meta-label">{ui.leadershipSignalsLabel}</div>
          <ul>
            {structuredResume.leadershipSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="resume-col">
        <section className="resume-section">
          <div className="meta-label">{ui.targetDirectionLabel}</div>
          <div className="focus-stack focus-stack-chips">
            {structuredResume.targetDirection.map((item) => (
              <p key={item} className="body-copy">{item}</p>
            ))}
          </div>
          <div className="meta-label" style={{ marginTop: "0.85rem" }}>{structuredResume.fit.title}</div>
          <p className="body-copy">{structuredResume.fit.body}</p>
        </section>

        <section className="resume-section">
          <div className="meta-label">{ui.educationLabel}</div>
          <div className="resume-education-list">
            {structuredResume.education.map((entry) => (
              <div key={`${entry.institution}-${entry.degree}`} className="resume-education-item">
                <div className="resume-education-degree">{entry.degree} in {entry.field}</div>
                <div className="resume-education-meta">
                  <span>{entry.institution}</span>
                  <span className="resume-education-date">{entry.graduationDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="resume-cta resume-full">
        <Link href={resume.secondaryCta.href} className="link-btn">{resume.secondaryCta.label}</Link>
      </div>
    </div>
  );
}
