import { siteContent } from "@/lib/content/site-content";
import { getStructuredResume } from "@/lib/content/resume-data";

export function buildTerminalContext() {
  const structuredResume = getStructuredResume();

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
      summary: structuredResume.basics.summary,
      headline: structuredResume.basics.headline,
      experience: structuredResume.experience.map((role) => ({
        company: role.company,
        title: role.title,
        startDate: role.startDate,
        endDate: role.endDate,
      })),
    },
    contact: siteContent.contact.intro.body,
  };
}
