import Link from "next/link";
import type { Project } from "@/lib/content/schema";
import { siteContent } from "@/lib/content/site-content";
import { ProjectTagList } from "@/components/project/ProjectTagList";

export function ProjectListItem({ project }: { project: Project }) {
  const ui = siteContent.ui.projectCards;
  return (
    <article className="card interaction-soft">
      <div className="card-head">
        <div className="meta-label">{ui.projectNoteLabel}</div>
        <h3>{project.title}</h3>
        <p>{project.shortSummary}</p>
      </div>
      <ProjectTagList tags={project.tags} />
      <Link href={`/projects/${project.slug}`} className="link-btn card-link">
        {ui.openDetailsLabel}
      </Link>
    </article>
  );
}
