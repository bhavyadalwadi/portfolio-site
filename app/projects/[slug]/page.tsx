import { notFound } from "next/navigation";
import { ProjectDetailSections } from "@/components/project/ProjectDetailSections";
import { ErrorState } from "@/components/sections/ErrorState";
import { getProjectBySlug } from "@/lib/content/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <ErrorState
        title="Project not found"
        description="This case study is unavailable or has been unpublished."
      />
    );
  }

  if (project.status !== "published") {
    notFound();
  }

  return <ProjectDetailSections project={project} />;
}
