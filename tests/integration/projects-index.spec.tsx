import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";

describe("projects index", () => {
  it("renders projects intro and featured entries", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { name: /^Projects$/i })).toBeInTheDocument();
    expect(screen.getByText(/localLLM/i)).toBeInTheDocument();
    expect(screen.getByText(/Earlier Work/i)).toBeInTheDocument();
  });
});
