import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import { getHomeContent } from "@/lib/content/site-content-loader";
import { getFeaturedProjects } from "@/lib/content/projects";
import { siteContent } from "@/lib/content/site-content";

export default function HomePage() {
  const content = getHomeContent();
  const flagshipProject = getFeaturedProjects()[0];
  const ui = siteContent.ui.homePage;

  return (
    <>
      <HeroSection hero={content.hero} />
      {flagshipProject ? (
        <section className="page-section page-section-home section-shell flagship-section reveal-soft" aria-labelledby="flagship-title">
          <div className="flagship-intro">
            <div className="eyebrow">{ui.flagshipEyebrow}</div>
            <h2 id="flagship-title">{flagshipProject.title}</h2>
            <p className="flagship-summary">{flagshipProject.shortSummary}</p>
          </div>

          <div className="flagship-layout">
            <article className="flagship-panel flagship-panel-primary">
              <div className="flagship-kicker">
                <span className="meta-label">{ui.flagshipStandoutLabel}</span>
                <span className="flagship-status">{ui.flagshipStatus}</span>
              </div>
              <p className="flagship-problem">{flagshipProject.problem}</p>
              <div className="flagship-columns">
                <div>
                  <div className="meta-label">{ui.flagshipOwnershipLabel}</div>
                  <p>{flagshipProject.contribution}</p>
                </div>
                <div>
                  <div className="meta-label">{ui.flagshipOutcomeLabel}</div>
                  <ul className="flagship-list">
                    {flagshipProject.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hero-actions">
                <Link href={`/projects/${flagshipProject.slug}`} className="link-btn">{ui.flagshipPrimaryLinkLabel}</Link>
                <Link href="/projects" className="text-link">{ui.flagshipSecondaryLinkLabel}</Link>
              </div>
            </article>

            <aside className="flagship-panel flagship-panel-proof">
              <div className="meta-label">{ui.flagshipProofPointsLabel}</div>
              <div className="flagship-proof-stack">
                {flagshipProject.impactMetrics?.map((metric) => (
                  <article key={metric} className="flagship-proof-item">
                    <strong>{metric}</strong>
                  </article>
                ))}
                {(flagshipProject.tags ?? []).map((tag) => (
                  <article key={tag} className="flagship-proof-item flagship-proof-item-muted">
                    <strong>{tag}</strong>
                  </article>
                ))}
              </div>
              <p className="flagship-note">{ui.flagshipNote}</p>
            </aside>
          </div>
        </section>
      ) : null}
      <section className="page-section page-section-home section-shell selected-work-section" aria-labelledby="featured-title">
        <div className="section-heading measure selected-work-head">
          <div className="eyebrow">{ui.selectedWorkEyebrow}</div>
          <h2 id="featured-title">{content.selectedWork.title}</h2>
          <p>{content.selectedWork.intro}</p>
        </div>
        <div className="selected-work-list">
          {content.selectedWork.projects.map((project, index) => (
            <article className="selected-work-item" key={project.name}>
              <div className="selected-work-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="selected-work-body">
                <div className="meta-label">{ui.featuredProjectLabel}</div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="tags selected-work-tags" aria-label={`${project.name} ${ui.selectedWorkTagsAriaSuffix}`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: "1rem" }}>
          <Link href={content.selectedWork.cta.href} className="link-btn">{content.selectedWork.cta.label}</Link>
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft" aria-labelledby="how-work-title">
        <div className="section-heading measure">
          <div className="eyebrow">{ui.approachEyebrow}</div>
          <h2 id="how-work-title">{content.strengths.title}</h2>
          <p>{content.strengths.intro}</p>
        </div>
        <div className="how-work-list">
          {content.strengths.items.map((item) => (
            <article className="how-work-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft" aria-labelledby="case-study-preview-title">
        <div className="case-study-preview-head">
          <div className="section-heading measure">
            <div className="eyebrow">{ui.caseStudiesEyebrow}</div>
            <h2 id="case-study-preview-title">{content.caseStudyPreview.title}</h2>
            <p>{content.caseStudyPreview.intro}</p>
          </div>
          <div className="hero-actions">
            <Link href={content.caseStudyPreview.cta.href} className="link-btn">{content.caseStudyPreview.cta.label}</Link>
          </div>
        </div>
        <div className="case-study-preview-list">
          {content.caseStudyPreview.items.map((item, index) => (
            <article className="case-study-preview-item" key={item.title}>
              <div className="case-study-preview-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="case-study-preview-body">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft closing-band" aria-labelledby="about-preview-title">
        <article className="closing-band-main">
          <div className="eyebrow">{ui.aboutEyebrow}</div>
          <h2 id="about-preview-title">{content.aboutPreview.title}</h2>
          <p>{content.aboutPreview.copy}</p>
          <div className="hero-actions">
            <Link href={content.aboutPreview.cta.href} className="text-link">{content.aboutPreview.cta.label}</Link>
          </div>
        </article>

        <aside className="closing-band-side" aria-labelledby="contact-cta-title">
          <div className="eyebrow">{ui.contactEyebrow}</div>
          <h2 id="contact-cta-title">{content.contactCta.title}</h2>
          <p>{content.contactCta.copy}</p>
          <div className="hero-actions">
            <Link href={content.contactCta.cta.href} className="link-btn">{content.contactCta.cta.label}</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
