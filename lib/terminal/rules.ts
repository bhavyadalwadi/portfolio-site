import { siteContent } from "@/lib/content/site-content";
import type { ActionLink } from "@/lib/content/schema";
import type { TerminalResponse } from "@/lib/terminal/types";

type RuleMatch = TerminalResponse & { confidence: number };

const canonicalSuggestions = ["show AI projects", "how do you work", "resume", "contact"];
const featuredProjects = siteContent.projects.featured;
const projectDetails = new Map(featuredProjects.map((project) => [normalize(project.name), project]));
const caseStudyDetails = new Map(siteContent.caseStudies.entries.map((entry) => [normalize(entry.project), entry]));

function normalize(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function hasAny(query: string, terms: string[]) {
  return terms.some((term) => query.includes(term));
}

function withMeta(message: string, links: ActionLink[] = [], suggestions: string[] = canonicalSuggestions, confidence = 1): RuleMatch {
  return { message, links, suggestions, source: "rule", confidence };
}

function navLinks(...items: Array<{ href: string; label: string }>): ActionLink[] {
  return items;
}

function projectMatchSummary(names: string[]) {
  return featuredProjects.filter((project) => names.includes(project.name));
}

function findProjectByName(query: string) {
  for (const [normalizedName, project] of projectDetails) {
    if (query.includes(normalizedName)) return project;
  }

  return null;
}

function findCaseStudyByName(query: string) {
  for (const [normalizedName, entry] of caseStudyDetails) {
    if (query.includes(normalizedName)) return entry;
  }

  return null;
}

function projectResponse(projectName: string, suggestions: string[]): RuleMatch {
  const project = featuredProjects.find((entry) => entry.name === projectName);
  const caseStudy = siteContent.caseStudies.entries.find((entry) => entry.project === projectName);
  const message = [project?.oneLiner, project?.whyItMatters, caseStudy?.technicalApproach].filter(Boolean).join(" ");

  return withMeta(
    message,
    navLinks(
      { href: "/projects", label: "Open Projects" },
      { href: caseStudy ? "/case-studies" : "/projects", label: caseStudy ? "Open Case Studies" : "View Project List" },
    ),
    suggestions,
  );
}

export function resolveRuleBasedQuery(rawQuery: string): RuleMatch | null {
  const query = normalize(rawQuery);
  if (!query) {
    return withMeta("Ask about projects, AI work, finance work, case studies, resume, contact, location, or how I work.");
  }

  if (hasAny(query, ["help", "menu", "commands"])) {
    return withMeta(
      "You can ask about projects, AI work, finance work, case studies, resume, contact, location, or how I work.",
      [],
      ["show AI projects", "show finance work", "what roles are you looking for", "where are you based"],
    );
  }

  if (hasAny(query, ["resume", "cv", "download resume"])) {
    return withMeta(
      siteContent.resume.intro.body ?? "",
      navLinks({ href: "/resume", label: "Open Resume" }),
      ["contact", "what roles are you looking for", "show AI projects"],
    );
  }

  if (hasAny(query, ["contact", "reach", "email", "hire", "talk"])) {
    return withMeta(
      siteContent.contact.intro.body ?? "",
      navLinks({ href: "/contact", label: "Open Contact" }),
      ["resume", "how do you work", "show AI projects"],
    );
  }

  if (hasAny(query, ["about", "who are you", "background", "introduce yourself"])) {
    return withMeta(
      siteContent.about.intro.body ?? "",
      navLinks({ href: "/about", label: "Open About" }),
      ["how do you work", "show AI projects", "what roles are you looking for"],
    );
  }

  if (hasAny(query, ["case study", "case studies", "tradeoff", "tradeoffs"])) {
    const explicitCaseStudy = findCaseStudyByName(query);
    if (explicitCaseStudy) {
      return withMeta(
        `${explicitCaseStudy.problem} ${explicitCaseStudy.technicalApproach} ${explicitCaseStudy.outcome}`,
        navLinks({ href: "/case-studies", label: "Open Case Studies" }),
        ["localLLM case study", "Debt Crusher case study", "show AI projects"],
      );
    }

    return withMeta(
      siteContent.caseStudies.intro.body ?? "",
      navLinks({ href: "/case-studies", label: "Open Case Studies" }),
      ["localLLM case study", "Debt Crusher case study", "show AI projects"],
    );
  }

  if (hasAny(query, ["how do you work", "work style", "how you work", "approach", "how do you build"])) {
    return withMeta(
      siteContent.about.howIWork.body ?? "",
      navLinks({ href: "/about", label: "Open About" }),
      ["show AI projects", "show finance work", "resume"],
    );
  }

  if (hasAny(query, ["where are you based", "location", "where are you located", "san jose"])) {
    return withMeta(
      "I am based in San Jose, California, and I build across full-stack product systems, AI workflows, and practical software.",
      navLinks({ href: "/about", label: "Open About" }, { href: "/contact", label: "Open Contact" }),
      ["what roles are you looking for", "resume", "show AI projects"],
    );
  }

  if (hasAny(query, ["what roles are you looking for", "looking for", "what kind of role", "job search", "open to"])) {
    return withMeta(
      siteContent.about.whatILookFor.body ?? siteContent.contact.intro.body ?? "",
      navLinks({ href: "/about", label: "Open About" }, { href: "/contact", label: "Open Contact" }),
      ["resume", "how do you work", "show AI projects"],
    );
  }

  if (hasAny(query, ["skills", "strengths", "technical focus"])) {
    const focus = siteContent.about.technicalFocus.areas.map((area) => area.title).join(", ");
    return withMeta(
      `My technical focus spans ${focus}. The throughline is practical product engineering with clear workflow and system ownership.`,
      navLinks({ href: "/about", label: "Open About" }, { href: "/projects", label: "Open Projects" }),
      ["how do you work", "show AI projects", "show finance work"],
    );
  }

  if (hasAny(query, ["local first", "self hosted", "home automation"])) {
    return withMeta(
      "I am especially drawn to local-first and self-hosted tools that preserve user control without sacrificing usability.",
      navLinks({ href: "/about", label: "Open About" }, { href: "/projects", label: "Open Projects" }),
      ["what have you built with local llms", "show AI projects", "how do you work"],
    );
  }

  const namedProject = findProjectByName(query);
  if (namedProject) {
    return projectResponse(namedProject.name, ["show AI projects", "show finance work", "case studies"]);
  }

  if (hasAny(query, ["projects", "project", "work"])) {
    if (hasAny(query, ["ai", "llm", "local llm", "ollama", "open webui"])) {
      const matches = projectMatchSummary(["localLLM", "WealthPilot"]);
      return withMeta(
        `AI-related work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.oneLiner).join(" ")}`,
        navLinks({ href: "/projects", label: "Open Projects" }, { href: "/case-studies", label: "Open Case Studies" }),
        ["what have you built with local llms", "show finance work", "resume"],
      );
    }

    if (hasAny(query, ["finance", "portfolio", "debt", "investment"])) {
      const matches = projectMatchSummary(["Debt Crusher", "WealthPilot"]);
      return withMeta(
        `Finance-oriented work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.oneLiner).join(" ")}`,
        navLinks({ href: "/projects", label: "Open Projects" }, { href: "/case-studies", label: "Open Case Studies" }),
        ["show AI projects", "how do you work", "contact"],
      );
    }

    return withMeta(
      siteContent.projects.intro.body ?? "",
      navLinks({ href: "/projects", label: "Open Projects" }),
      ["show AI projects", "show finance work", "case studies"],
    );
  }

  if (hasAny(query, ["ai", "llm", "local llm", "ollama", "open webui"])) {
    const localLlmCaseStudy = caseStudyDetails.get("localllm");
    return withMeta(
      `AI-related work includes localLLM and WealthPilot. ${localLlmCaseStudy?.technicalApproach ?? ""}`.trim(),
      navLinks({ href: "/projects", label: "Open Projects" }, { href: "/case-studies", label: "Open Case Studies" }),
      ["what have you built with local llms", "show finance work", "resume"],
    );
  }

  if (hasAny(query, ["finance", "portfolio", "debt", "investment"])) {
    const matches = projectMatchSummary(["Debt Crusher", "WealthPilot"]);
    return withMeta(
      `Finance-oriented work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.whyItMatters).join(" ")}`,
      navLinks({ href: "/projects", label: "Open Projects" }, { href: "/case-studies", label: "Open Case Studies" }),
      ["show AI projects", "how do you work", "contact"],
    );
  }

  if (hasAny(query, ["full stack", "frontend", "backend", "system design", "product engineer"])) {
    return withMeta(
      siteContent.about.technicalFocus.intro ?? "",
      navLinks({ href: "/about", label: "Open About" }, { href: "/projects", label: "Open Projects" }),
      ["how do you work", "show AI projects", "resume"],
      0.9,
    );
  }

  return null;
}

export function fallbackTerminalResponse(): TerminalResponse {
  return {
    message: "I can help with projects, AI work, finance work, resume, case studies, contact, location, and how I work, all from the portfolio itself.",
    suggestions: canonicalSuggestions,
    source: "fallback",
  };
}
