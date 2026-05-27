export type Profile = {
  id: string;
  fullName: string;
  headline: string;
  summary: string;
  focusAreas: string[];
  location?: string;
  availability?: string;
  links?: Array<{ label: string; url: string }>;
};

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  problem: string;
  contribution: string;
  outcomes: string[];
  impactMetrics?: string[];
  tags?: string[];
  featured: boolean;
  status: "draft" | "published" | "archived";
  heroImage?: MediaAsset;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type SectionBlock = {
  title: string;
  body?: string;
  items?: string[];
};

export type ArchiveEntry = {
  title: string;
  body: string;
  stack?: string[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  note?: string;
};

export type HomePreviewProject = {
  name: string;
  summary: string;
  tags: string[];
};

export type HeroTerminalResponseSeed = {
  message: string;
  suggestions: string[];
};

export type ProjectCatalogEntry = {
  name: string;
  oneLiner: string;
  whyItMatters: string;
  links: ActionLink[];
};

export type CaseStudyEntry = {
  project: string;
  problem: string;
  role: string;
  technicalApproach: string;
  challenges?: string;
  outcome: string;
  optional?: boolean;
};

export type SiteBlueprint = {
  positioning: {
    primary: string;
    secondary: string;
    tone: string;
    audience: string[];
  };
  home: {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      supportingLine: string;
      primaryCta: ActionLink;
      secondaryCta: ActionLink;
      terminal: {
        label: string;
        introLine: string;
        promptPlaceholder: string;
        helpText?: string;
        exampleCommands: string[];
        initialResponse: HeroTerminalResponseSeed;
      };
    };
    credibilityStrip: SectionBlock;
    selectedWork: {
      title: string;
      intro: string;
      projects: HomePreviewProject[];
      cta: ActionLink;
    };
    strengths: {
      title: string;
      intro: string;
      items: SectionBlock[];
    };
    caseStudyPreview: {
      title: string;
      intro: string;
      items: SectionBlock[];
      cta: ActionLink;
    };
    aboutPreview: {
      title: string;
      copy: string;
      cta: ActionLink;
    };
    contactCta: {
      title: string;
      copy: string;
      cta: ActionLink;
    };
  };
  about: {
    intro: SectionBlock;
    howIWork: SectionBlock;
    technicalFocus: {
      title: string;
      intro: string;
      areas: SectionBlock[];
    };
    whatILookFor: SectionBlock;
    personalNote: SectionBlock;
  };
  projects: {
    intro: SectionBlock;
    featured: ProjectCatalogEntry[];
    archive: {
      title: string;
      body?: string;
      items: ArchiveEntry[];
    };
  };
  caseStudies: {
    intro: SectionBlock;
    entries: CaseStudyEntry[];
  };
  resume: {
    intro: SectionBlock;
    snapshot: SectionBlock;
    highlights: SectionBlock;
    primaryCta: ActionLink;
    secondaryCta: ActionLink;
  };
  contact: {
    intro: SectionBlock;
    methods: {
      title: string;
      entries: ContactMethod[];
    };
    closing: SectionBlock;
  };
  writing: {
    intro: SectionBlock;
    topics: SectionBlock;
  };
};

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateProfile(payload: unknown): payload is Profile {
  if (!payload || typeof payload !== "object") return false;
  const p = payload as Partial<Profile>;
  return (
    isString(p.id) &&
    isString(p.fullName) &&
    isString(p.headline) &&
    isString(p.summary) &&
    Array.isArray(p.focusAreas) &&
    p.focusAreas.length > 0 &&
    p.focusAreas.every(isString)
  );
}

export function validateProject(payload: unknown): payload is Project {
  if (!payload || typeof payload !== "object") return false;
  const p = payload as Partial<Project>;
  const validStatus = p.status === "draft" || p.status === "published" || p.status === "archived";
  const validHero =
    p.heroImage === undefined ||
    (typeof p.heroImage === "object" && p.heroImage !== null && isString(p.heroImage.src) && isString(p.heroImage.alt));

  return (
    isString(p.id) &&
    isString(p.slug) &&
    isString(p.title) &&
    isString(p.shortSummary) &&
    isString(p.problem) &&
    isString(p.contribution) &&
    Array.isArray(p.outcomes) &&
    p.outcomes.length > 0 &&
    p.outcomes.every(isString) &&
    typeof p.featured === "boolean" &&
    validStatus &&
    validHero
  );
}
