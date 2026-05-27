import type { SiteBlueprint } from "@/lib/content/schema";

type AboutContent = SiteBlueprint["about"];

export function AboutSection({ content }: { content: AboutContent }) {
  const introParagraphs = (content.intro.body ?? "").split("\n\n");
  const workParagraphs = (content.howIWork.body ?? "").split("\n\n");
  const fitParagraphs = (content.whatILookFor.body ?? "").split("\n\n");

  return (
    <section className="page-section section-shell reveal-soft">
      <div className="section-heading measure">
        <div className="eyebrow">About</div>
        <h1>{content.intro.title}</h1>
        {introParagraphs.map((paragraph) => (
          <p key={paragraph} className="route-lead">{paragraph}</p>
        ))}
      </div>
      <div className="about-grid about-grid-wide">
        <div className="about-panel about-panel-wide interaction-soft">
          <div className="meta-label">{content.howIWork.title}</div>
          {workParagraphs.map((paragraph) => (
            <p key={paragraph} className="body-copy">{paragraph}</p>
          ))}
        </div>
        <div className="about-panel interaction-soft">
          <div className="meta-label">{content.whatILookFor.title}</div>
          {fitParagraphs.map((paragraph) => (
            <p key={paragraph} className="body-copy">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="about-grid">
        <div className="about-panel interaction-soft">
          <div className="meta-label">{content.technicalFocus.title}</div>
          <p className="body-copy">{content.technicalFocus.intro}</p>
          <div className="focus-stack">
            {content.technicalFocus.areas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p className="body-copy">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="about-panel interaction-soft">
          <div className="meta-label">{content.personalNote.title}</div>
          <p className="body-copy">
            {content.personalNote.body}
          </p>
        </div>
      </div>
    </section>
  );
}
