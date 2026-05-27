import { describe, expect, it } from "vitest";
import { getFeaturedProjects } from "@/lib/content/projects";
import { getProfile } from "@/lib/content/profile";

describe("home content selectors", () => {
  it("returns a valid profile", () => {
    const profile = getProfile();
    expect(profile.fullName.length).toBeGreaterThan(0);
    expect(profile.focusAreas.length).toBeGreaterThan(0);
  });

  it("returns only featured projects", () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((project) => project.featured)).toBe(true);
  });
});
