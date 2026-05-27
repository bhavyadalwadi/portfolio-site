import type { Project } from "@/lib/content/schema";
import { siteContent } from "@/lib/content/site-content";
import { ProjectTagList } from "@/components/project/ProjectTagList";

export function ProjectDetailSections({ project }: { project: Project }) {
  const ui = siteContent.ui.projectDetailPage;
  return (
    <section className="page-section section-shell reveal-soft" aria-labelledby="project-title">
      <div className="detail-hero">
        <div className="eyebrow">{ui.eyebrow}</div>
        <h1 id="project-title">{project.title}</h1>
        <p className="detail-summary measure">{project.shortSummary}</p>
        <ProjectTagList tags={project.tags} />
      </div>

      <div className="detail-grid">
      <div className="detail-card interaction-soft">
        <h3>{ui.problemLabel}</h3>
        <p>{project.problem}</p>
      </div>
      <div className="detail-card interaction-soft">
        <h3>{ui.contributionLabel}</h3>
        <p>{project.contribution}</p>
      </div>
      <div className="detail-card interaction-soft">
        <h3>{ui.outcomesLabel}</h3>
        <ul>
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
