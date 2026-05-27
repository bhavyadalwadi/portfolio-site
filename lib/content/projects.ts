import projectsData from "@/lib/content/projects.json";
import { validateProject, type Project } from "@/lib/content/schema";

function parsedProjects(): Project[] {
  const valid = (projectsData as unknown[]).filter((item): item is Project => validateProject(item));
  return valid;
}

export function getProjects(): Project[] {
  return parsedProjects().filter((project) => project.status === "published");
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  return getProjects().find((project) => project.slug === slug) ?? null;
}
