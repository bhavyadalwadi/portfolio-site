import { getCaseStudiesContent } from "@/lib/content/site-content-loader";
import { siteContent } from "@/lib/content/site-content";

export default function CaseStudiesPage() {
  const content = getCaseStudiesContent();
  const ui = siteContent.ui.caseStudiesPage;

  return (
    <section className="page-section section-shell reveal-soft" aria-labelledby="case-studies-title">
      <div className="section-heading measure">
        <div className="eyebrow">{ui.eyebrow}</div>
        <h1 id="case-studies-title">{content.intro.title}</h1>
        <p className="route-lead">{content.intro.body}</p>
      </div>

      <div className="detail-grid">
        {content.entries.map((entry) => (
          <article className="detail-card interaction-soft" key={entry.project}>
            <div className="meta-label">{entry.optional ? ui.optionalCaseStudyLabel : ui.caseStudyLabel}</div>
            <h3>{entry.project}</h3>
            <p><strong>{ui.problemLabel}:</strong> {entry.problem}</p>
            <p><strong>{ui.roleLabel}:</strong> {entry.role}</p>
            <p><strong>{ui.technicalApproachLabel}:</strong> {entry.technicalApproach}</p>
            {entry.challenges ? <p><strong>{ui.challengesLabel}:</strong> {entry.challenges}</p> : null}
            <p><strong>{ui.outcomeLabel}:</strong> {entry.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
