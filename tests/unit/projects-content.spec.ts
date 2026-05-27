import { describe, expect, it } from "vitest";
import { getProjectBySlug, getProjects } from "@/lib/content/projects";

describe("project content rules", () => {
  it("filters to published projects", () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects.every((project) => project.status === "published")).toBe(true);
  });

  it("resolves project by slug", () => {
    const candidate = getProjects()[0];
    const project = getProjectBySlug(candidate.slug);
    expect(project?.id).toEqual(candidate.id);
  });
});
