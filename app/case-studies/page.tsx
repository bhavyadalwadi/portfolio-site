import { getCaseStudiesContent } from "@/lib/content/site-content-loader";

export default function CaseStudiesPage() {
  const content = getCaseStudiesContent();

  return (
    <section className="page-section section-shell reveal-soft" aria-labelledby="case-studies-title">
      <div className="section-heading measure">
        <div className="eyebrow">Case Studies</div>
        <h1 id="case-studies-title">{content.intro.title}</h1>
        <p className="route-lead">{content.intro.body}</p>
      </div>

      <div className="detail-grid">
        {content.entries.map((entry) => (
          <article className="detail-card interaction-soft" key={entry.project}>
            <div className="meta-label">{entry.optional ? "Optional Case Study" : "Case Study"}</div>
            <h3>{entry.project}</h3>
            <p><strong>Problem:</strong> {entry.problem}</p>
            <p><strong>Role and ownership:</strong> {entry.role}</p>
            <p><strong>Technical approach:</strong> {entry.technicalApproach}</p>
            {entry.challenges ? <p><strong>Challenges:</strong> {entry.challenges}</p> : null}
            <p><strong>Outcome:</strong> {entry.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
