import Link from "next/link";
import type { Project } from "@/lib/content/schema";
import { ProjectTagList } from "@/components/project/ProjectTagList";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="card interaction-soft">
      {project.heroImage ? (
        <div className="project-media-fallback">{project.heroImage.alt}</div>
      ) : (
        <div className="project-media-fallback">Media preview unavailable</div>
      )}
      <div className="card-head">
        <div className="meta-label">Featured Case Study</div>
        <h3>{project.title}</h3>
        <p>{project.shortSummary}</p>
      </div>
      <ProjectTagList tags={project.tags} />
      <p className="project-outcome">
        <strong>Outcome:</strong> {project.outcomes[0]}
      </p>
      <Link href={`/projects/${project.slug}`} className="link-btn card-link">
        Read case study
      </Link>
    </article>
  );
}
