import { siteContent } from "@/lib/content/site-content";
import { buildResumePageContent, getStructuredResume } from "@/lib/content/resume-data";

function inferTags(project: { name: string; oneLiner: string; whyItMatters: string }) {
  const text = `${project.name} ${project.oneLiner} ${project.whyItMatters}`.toLowerCase();
  const tags = [
    text.includes("ai") || text.includes("llm") ? "AI Systems" : null,
    text.includes("finance") || text.includes("portfolio") || text.includes("debt") ? "Finance" : null,
    text.includes("local") || text.includes("self-hosted") ? "Local-First" : null,
    text.includes("map") || text.includes("geo") ? "Location Systems" : null,
    text.includes("game") || text.includes("multiplayer") ? "Interactive Systems" : null,
    text.includes("dashboard") || text.includes("home assistant") ? "Automation" : null,
    "Full-Stack",
  ].filter(Boolean);

  return Array.from(new Set(tags)).slice(0, 3) as string[];
}

export function getSiteContent() {
  return siteContent;
}

export function getHomeContent() {
  return {
    ...siteContent.home,
    selectedWork: {
      ...siteContent.home.selectedWork,
      projects: siteContent.projects.featured.map((project) => ({
        name: project.name,
        summary: project.oneLiner,
        tags: inferTags(project),
      })),
    },
  };
}

export function getAboutContent() {
  return siteContent.about;
}

export function getProjectsContent() {
  return siteContent.projects;
}

export function getCaseStudiesContent() {
  return siteContent.caseStudies;
}

export function getResumeContent() {
  return buildResumePageContent();
}

export function getStructuredResumeContent() {
  return getStructuredResume();
}

export function getContactContent() {
  return siteContent.contact;
}
