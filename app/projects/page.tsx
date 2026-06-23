import Link from "next/link";
import { getProjectsContent } from "@/lib/content/site-content-loader";
import { siteContent } from "@/lib/content/site-content";

export default function ProjectsPage() {
  const projects = getProjectsContent();
  const ui = siteContent.ui.projectsPage;

  return (
    <section className="page-section section-shell reveal-soft">
      <div className="section-heading">
        <div className="eyebrow">{ui.eyebrow}</div>
        <h1>{projects.intro.title}</h1>
        <p className="route-lead">{projects.intro.body}</p>
      </div>

      <div className="grid projects">
        {projects.featured.map((project) => (
          <article className="card interaction-soft" key={project.name}>
            <div className="card-head">
              <div className="meta-label">{ui.featuredProjectLabel}</div>
              <h3>{project.name}</h3>
              <p>{project.oneLiner}</p>
            </div>
            <p><strong>{ui.whyItMattersLabel}:</strong> {project.whyItMatters}</p>
            <div className="hero-actions">
              {project.links.map((link) => (
                <Link key={link.label} href={link.href} className="link-btn">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="page-section section-shell reveal-soft" aria-labelledby="earlier-work-title">
        <div className="section-heading measure">
          <div className="eyebrow">{ui.archiveEyebrow}</div>
          <h2 id="earlier-work-title">{projects.archive.title}</h2>
          <p>{projects.archive.body}</p>
        </div>
        <div className="grid projects">
          {projects.archive.items.map((item) => (
            <article className="detail-card interaction-soft" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.stack?.length ? (
                <div className="tags" aria-label={`${item.title} ${ui.stackAriaSuffix}`}>
                  {item.stack.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
