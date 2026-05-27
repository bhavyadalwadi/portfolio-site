import { siteContent } from "@/lib/content/site-content";

export function buildTerminalContext() {
  return {
    positioning: siteContent.positioning,
    about: {
      intro: siteContent.about.intro.body,
      howIWork: siteContent.about.howIWork.body,
      technicalFocus: siteContent.about.technicalFocus.areas.map((area) => `${area.title}: ${area.body}`),
    },
    projects: siteContent.projects.featured.map((project) => ({
      name: project.name,
      summary: project.oneLiner,
      whyItMatters: project.whyItMatters,
    })),
    caseStudies: siteContent.caseStudies.entries.map((entry) => ({
      project: entry.project,
      problem: entry.problem,
      approach: entry.technicalApproach,
      outcome: entry.outcome,
    })),
    resume: {
      intro: siteContent.resume.intro.body,
      highlights: siteContent.resume.snapshot.items ?? [],
    },
    contact: siteContent.contact.intro.body,
  };
}
