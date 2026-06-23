import { siteContent } from "@/lib/content/site-content";
import { getStructuredResume } from "@/lib/content/resume-data";
import type { ActionLink } from "@/lib/content/schema";
import type { TerminalResponse } from "@/lib/terminal/types";

type RuleMatch = TerminalResponse & { confidence: number };

const terminalUi = siteContent.ui.terminal;
const structuredResume = getStructuredResume();
const canonicalSuggestions = [
  terminalUi.commands.showAiProjects,
  terminalUi.commands.howDoYouWork,
  terminalUi.commands.resume,
  terminalUi.commands.contact,
];
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

function getExperienceResponse() {
  const summary = structuredResume.basics.summary;
  const currentRole = structuredResume.experience[0];
  const roleLine = currentRole
    ? ` Most recently, I am a ${currentRole.title} at ${currentRole.company}.`
    : "";

  return `${summary}${roleLine}`;
}

function getCurrentRoleResponse() {
  const currentRole = structuredResume.experience[0];
  if (!currentRole) return structuredResume.basics.summary;

  return `I am currently a ${currentRole.title} at ${currentRole.company}. My recent work centers on large-scale web platforms, product systems, and increasingly AI-enabled workflows.`;
}

function getEducationResponse() {
  const education = structuredResume.education
    .map((entry) => `${entry.degree} in ${entry.field} from ${entry.institution}`)
    .join(" ");

  return education || "My education details are available on the resume page.";
}

function projectResponse(projectName: string, suggestions: string[]): RuleMatch {
  const project = featuredProjects.find((entry) => entry.name === projectName);
  const caseStudy = siteContent.caseStudies.entries.find((entry) => entry.project === projectName);
  const message = [project?.oneLiner, project?.whyItMatters, caseStudy?.technicalApproach].filter(Boolean).join(" ");

  return withMeta(
    message,
    navLinks(
      { href: "/#projects", label: terminalUi.links.openProjects },
      { href: "/#projects", label: terminalUi.links.viewProjectList },
    ),
    suggestions,
  );
}

export function resolveRuleBasedQuery(rawQuery: string): RuleMatch | null {
  const query = normalize(rawQuery);
  if (!query) {
    return withMeta(terminalUi.messages.empty);
  }

  if (hasAny(query, ["help", "menu", "commands"])) {
    return withMeta(
      terminalUi.messages.help,
      [],
      [terminalUi.commands.showAiProjects, terminalUi.commands.showFinanceWork, terminalUi.commands.whatRoles, terminalUi.commands.whereBased],
    );
  }

  if (hasAny(query, ["resume", "cv", "download resume"])) {
    return withMeta(
      siteContent.resume.intro.body ?? "",
      navLinks({ href: "/resume", label: terminalUi.links.openResume }),
      [terminalUi.commands.contact, terminalUi.commands.whatRoles, terminalUi.commands.showAiProjects],
    );
  }

  if (hasAny(query, ["years of experience", "how many years", "how much experience", "experience do you have"])) {
    return withMeta(
      getExperienceResponse(),
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#contact", label: terminalUi.links.openContact }),
      [terminalUi.commands.whatRoles, terminalUi.commands.showAiProjects, terminalUi.commands.howDoYouWork],
    );
  }

  if (hasAny(query, ["current role", "what is your current role", "where do you work", "current job", "current position"])) {
    return withMeta(
      getCurrentRoleResponse(),
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/resume", label: terminalUi.links.openResume }),
      [terminalUi.commands.whatRoles, terminalUi.commands.howDoYouWork, terminalUi.commands.resume],
    );
  }

  if (hasAny(query, ["education", "degree", "university", "college", "school"])) {
    return withMeta(
      getEducationResponse(),
      navLinks({ href: "/resume", label: terminalUi.links.openResume }),
      [terminalUi.commands.resume, terminalUi.commands.whatRoles, terminalUi.commands.contact],
    );
  }

  if (hasAny(query, ["contact", "reach", "email", "hire", "talk"])) {
    return withMeta(
      siteContent.contact.intro.body ?? "",
      navLinks({ href: "/#contact", label: terminalUi.links.openContact }),
      [terminalUi.commands.resume, terminalUi.commands.howDoYouWork, terminalUi.commands.showAiProjects],
    );
  }

  if (hasAny(query, ["about", "who are you", "background", "introduce yourself"])) {
    return withMeta(
      siteContent.about.intro.body ?? "",
      navLinks({ href: "/resume", label: terminalUi.links.openResume }),
      [terminalUi.commands.howDoYouWork, terminalUi.commands.showAiProjects, terminalUi.commands.whatRoles],
    );
  }

  if (hasAny(query, ["case study", "case studies", "tradeoff", "tradeoffs"])) {
    const explicitCaseStudy = findCaseStudyByName(query);
    if (explicitCaseStudy) {
      return withMeta(
        `${explicitCaseStudy.problem} ${explicitCaseStudy.technicalApproach} ${explicitCaseStudy.outcome}`,
        navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
        [terminalUi.commands.localLlmCaseStudy, terminalUi.commands.debtCrusherCaseStudy, terminalUi.commands.showAiProjects],
      );
    }

    return withMeta(
      siteContent.caseStudies.intro.body ?? "",
      navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.localLlmCaseStudy, terminalUi.commands.debtCrusherCaseStudy, terminalUi.commands.showAiProjects],
    );
  }

  if (hasAny(query, ["how do you work", "work style", "how you work", "approach", "how do you build"])) {
    return withMeta(
      siteContent.about.howIWork.body ?? "",
      navLinks({ href: "/resume", label: terminalUi.links.openResume }),
      [terminalUi.commands.showAiProjects, terminalUi.commands.showFinanceWork, terminalUi.commands.resume],
    );
  }

  if (hasAny(query, ["where are you based", "location", "where are you located", "san jose"])) {
    return withMeta(
      terminalUi.messages.location,
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#contact", label: terminalUi.links.openContact }),
      [terminalUi.commands.whatRoles, terminalUi.commands.resume, terminalUi.commands.showAiProjects],
    );
  }

  if (hasAny(query, ["what roles are you looking for", "looking for", "what kind of role", "job search", "open to"])) {
    return withMeta(
      siteContent.about.whatILookFor.body ?? siteContent.contact.intro.body ?? "",
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#contact", label: terminalUi.links.openContact }),
      [terminalUi.commands.resume, terminalUi.commands.howDoYouWork, terminalUi.commands.showAiProjects],
    );
  }

  if (hasAny(query, ["skills", "strengths", "technical focus"])) {
    const focus = siteContent.about.technicalFocus.areas.map((area) => area.title).join(", ");
    return withMeta(
      terminalUi.messages.skillsTemplate.replace("{focus}", focus),
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.howDoYouWork, terminalUi.commands.showAiProjects, terminalUi.commands.showFinanceWork],
    );
  }

  if (hasAny(query, ["local first", "self hosted", "home automation"])) {
    return withMeta(
      terminalUi.messages.localFirst,
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.localLlmQuestion, terminalUi.commands.showAiProjects, terminalUi.commands.howDoYouWork],
    );
  }

  const namedProject = findProjectByName(query);
  if (namedProject) {
    return projectResponse(namedProject.name, [terminalUi.commands.showAiProjects, terminalUi.commands.showFinanceWork, terminalUi.commands.caseStudies]);
  }

  if (hasAny(query, ["projects", "project", "work"])) {
    if (hasAny(query, ["ai", "llm", "local llm", "ollama", "open webui"])) {
      const matches = projectMatchSummary(["localLLM", "WealthPilot"]);
      return withMeta(
        `AI-related work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.oneLiner).join(" ")}`,
        navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
        [terminalUi.commands.localLlmQuestion, terminalUi.commands.showFinanceWork, terminalUi.commands.resume],
      );
    }

    if (hasAny(query, ["finance", "portfolio", "debt", "investment"])) {
      const matches = projectMatchSummary(["Debt Crusher", "WealthPilot"]);
      return withMeta(
        `Finance-oriented work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.oneLiner).join(" ")}`,
        navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
        [terminalUi.commands.showAiProjects, terminalUi.commands.howDoYouWork, terminalUi.commands.contact],
      );
    }

    return withMeta(
      siteContent.projects.intro.body ?? "",
      navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.showAiProjects, terminalUi.commands.showFinanceWork, terminalUi.commands.caseStudies],
    );
  }

  if (hasAny(query, ["ai", "llm", "local llm", "ollama", "open webui"])) {
    const localLlmCaseStudy = caseStudyDetails.get("localllm");
    return withMeta(
      `AI-related work includes localLLM and WealthPilot. ${localLlmCaseStudy?.technicalApproach ?? ""}`.trim(),
      navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.localLlmQuestion, terminalUi.commands.showFinanceWork, terminalUi.commands.resume],
    );
  }

  if (hasAny(query, ["finance", "portfolio", "debt", "investment"])) {
    const matches = projectMatchSummary(["Debt Crusher", "WealthPilot"]);
    return withMeta(
      `Finance-oriented work includes ${matches.map((project) => project.name).join(" and ")}. ${matches.map((project) => project.whyItMatters).join(" ")}`,
      navLinks({ href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.showAiProjects, terminalUi.commands.howDoYouWork, terminalUi.commands.contact],
    );
  }

  if (hasAny(query, ["full stack", "frontend", "backend", "system design", "product engineer"])) {
    return withMeta(
      siteContent.about.technicalFocus.intro ?? "",
      navLinks({ href: "/resume", label: terminalUi.links.openResume }, { href: "/#projects", label: terminalUi.links.openProjects }),
      [terminalUi.commands.howDoYouWork, terminalUi.commands.showAiProjects, terminalUi.commands.resume],
      0.9,
    );
  }

  return null;
}

export function fallbackTerminalResponse(): TerminalResponse {
  return {
    message: terminalUi.messages.fallback,
    suggestions: canonicalSuggestions,
    source: "fallback",
  };
}
