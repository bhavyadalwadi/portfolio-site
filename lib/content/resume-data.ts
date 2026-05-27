import structuredResume from "@/lib/content/resume-structured.json";

export type StructuredResume = typeof structuredResume;

export function getStructuredResume() {
  return structuredResume;
}

export function buildResumePageContent() {
  const resume = getStructuredResume();

  return {
    intro: {
      title: "Resume",
      body: resume.basics.summary,
    },
    snapshot: {
      title: "Snapshot",
      items: [resume.basics.headline, resume.basics.location, ...resume.focusAreas.slice(0, 2)],
    },
    highlights: {
      title: "Core strengths",
      body: resume.strengths.join(" "),
    },
    primaryCta: { label: "Download PDF Resume", href: resume.documents.pdfHref },
    secondaryCta: resume.cta,
  };
}
