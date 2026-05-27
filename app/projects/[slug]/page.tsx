import { notFound } from "next/navigation";
import { ProjectDetailSections } from "@/components/project/ProjectDetailSections";
import { ErrorState } from "@/components/sections/ErrorState";
import { getProjectBySlug } from "@/lib/content/projects";
import { siteContent } from "@/lib/content/site-content";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <ErrorState
        title={siteContent.ui.projectDetailPage.notFoundTitle}
        description={siteContent.ui.projectDetailPage.notFoundDescription}
      />
    );
  }

  if (project.status !== "published") {
    notFound();
  }

  return <ProjectDetailSections project={project} />;
}
