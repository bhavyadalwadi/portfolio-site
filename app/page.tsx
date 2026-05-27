import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import { getHomeContent } from "@/lib/content/site-content-loader";
import { getFeaturedProjects } from "@/lib/content/projects";

export default function HomePage() {
  const content = getHomeContent();
  const flagshipProject = getFeaturedProjects()[0];

  return (
    <>
      <HeroSection hero={content.hero} />
      {flagshipProject ? (
        <section className="page-section page-section-home section-shell flagship-section reveal-soft" aria-labelledby="flagship-title">
          <div className="flagship-intro">
            <div className="eyebrow">Flagship Case Study</div>
            <h2 id="flagship-title">{flagshipProject.title}</h2>
            <p className="flagship-summary">{flagshipProject.shortSummary}</p>
          </div>

          <div className="flagship-layout">
            <article className="flagship-panel flagship-panel-primary">
              <div className="flagship-kicker">
                <span className="meta-label">Why It Stands Out</span>
                <span className="flagship-status">Shipped thinking, not demo polish</span>
              </div>
              <p className="flagship-problem">{flagshipProject.problem}</p>
              <div className="flagship-columns">
                <div>
                  <div className="meta-label">What I Owned</div>
                  <p>{flagshipProject.contribution}</p>
                </div>
                <div>
                  <div className="meta-label">Outcome</div>
                  <ul className="flagship-list">
                    {flagshipProject.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hero-actions">
                <Link href={`/projects/${flagshipProject.slug}`} className="link-btn">Read the full case study</Link>
                <Link href="/projects" className="text-link">Browse all projects</Link>
              </div>
            </article>

            <aside className="flagship-panel flagship-panel-proof">
              <div className="meta-label">Proof Points</div>
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
              <p className="flagship-note">
                This project is the clearest example of how I shape AI into an operator-friendly product instead of a vague capability layer.
              </p>
            </aside>
          </div>
        </section>
      ) : null}
      <section className="page-section page-section-home section-shell" aria-labelledby="featured-title">
        <div className="section-heading measure">
          <div className="eyebrow">Selected Work</div>
          <h2 id="featured-title">{content.selectedWork.title}</h2>
          <p>{content.selectedWork.intro}</p>
        </div>
        <div className="grid projects">
          {content.selectedWork.projects.map((project) => (
            <article className="card interaction-soft" key={project.name}>
              <div className="card-head">
                <div className="meta-label">Featured Project</div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="tags" aria-label={`${project.name} tags`}>
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
          <div className="eyebrow">Approach</div>
          <h2 id="how-work-title">{content.strengths.title}</h2>
          <p>{content.strengths.intro}</p>
        </div>
        <div className="grid projects">
          {content.strengths.items.map((item) => (
            <article className="detail-card interaction-soft" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft" aria-labelledby="case-study-preview-title">
        <div className="section-heading measure">
          <div className="eyebrow">Case Studies</div>
          <h2 id="case-study-preview-title">{content.caseStudyPreview.title}</h2>
          <p>{content.caseStudyPreview.intro}</p>
        </div>
        <div className="grid projects">
          {content.caseStudyPreview.items.map((item) => (
            <article className="detail-card interaction-soft" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: "1rem" }}>
          <Link href={content.caseStudyPreview.cta.href} className="link-btn">{content.caseStudyPreview.cta.label}</Link>
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft" aria-labelledby="about-preview-title">
        <div className="section-heading measure">
          <div className="eyebrow">About</div>
          <h2 id="about-preview-title">{content.aboutPreview.title}</h2>
          <p>{content.aboutPreview.copy}</p>
        </div>
        <div className="hero-actions">
          <Link href={content.aboutPreview.cta.href} className="link-btn">{content.aboutPreview.cta.label}</Link>
        </div>
      </section>

      <section className="page-section page-section-home section-shell reveal-soft" aria-labelledby="contact-cta-title">
        <div className="section-heading measure">
          <div className="eyebrow">Open to Roles</div>
          <h2 id="contact-cta-title">{content.contactCta.title}</h2>
          <p>{content.contactCta.copy}</p>
        </div>
        <div className="hero-actions">
          <Link href={content.contactCta.cta.href} className="link-btn">{content.contactCta.cta.label}</Link>
        </div>
      </section>
    </>
  );
}
