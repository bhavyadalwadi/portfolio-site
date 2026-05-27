import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";

describe("US2 project list rhythm", () => {
  it("renders case study framing and readable project modules", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { name: /^Projects$/i })).toBeInTheDocument();
    expect(screen.getAllByText(/featured project/i).length).toBeGreaterThan(0);
  });
});