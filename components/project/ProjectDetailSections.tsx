import type { Project } from "@/lib/content/schema";
import { ProjectTagList } from "@/components/project/ProjectTagList";

export function ProjectDetailSections({ project }: { project: Project }) {
  return (
    <section className="page-section section-shell reveal-soft" aria-labelledby="project-title">
      <div className="detail-hero">
        <div className="eyebrow">Case Study Detail</div>
        <h1 id="project-title">{project.title}</h1>
        <p className="detail-summary measure">{project.shortSummary}</p>
        <ProjectTagList tags={project.tags} />
      </div>

      <div className="detail-grid">
      <div className="detail-card interaction-soft">
        <h3>Problem</h3>
        <p>{project.problem}</p>
      </div>
      <div className="detail-card interaction-soft">
        <h3>Contribution</h3>
        <p>{project.contribution}</p>
      </div>
      <div className="detail-card interaction-soft">
        <h3>Outcomes</h3>
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
