import { render, screen } from "@testing-library/react";
import { ProjectDetailSections } from "@/components/project/ProjectDetailSections";
import { getProjects } from "@/lib/content/projects";

describe("US2 project detail structure", () => {
  it("renders editorial case-study sections", () => {
    render(<ProjectDetailSections project={getProjects()[0]} />);
    expect(screen.getByText(/case study/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /problem/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contribution/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /outcomes/i })).toBeInTheDocument();
  });
});