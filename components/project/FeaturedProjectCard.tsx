import Link from "next/link";
import type { Project } from "@/lib/content/schema";
import { siteContent } from "@/lib/content/site-content";
import { ProjectTagList } from "@/components/project/ProjectTagList";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const ui = siteContent.ui.projectCards;
  return (
    <article className="card interaction-soft">
      {project.heroImage ? (
        <div className="project-media-fallback">{project.heroImage.alt}</div>
      ) : (
        <div className="project-media-fallback">{ui.mediaUnavailableLabel}</div>
      )}
      <div className="card-head">
        <div className="meta-label">{ui.featuredCaseStudyLabel}</div>
        <h3>{project.title}</h3>
        <p>{project.shortSummary}</p>
      </div>
      <ProjectTagList tags={project.tags} />
      <p className="project-outcome">
        <strong>{ui.outcomeLabel}:</strong> {project.outcomes[0]}
      </p>
      <Link href={`/projects/${project.slug}`} className="link-btn card-link">
        {ui.readCaseStudyLabel}
      </Link>
    </article>
  );
}
