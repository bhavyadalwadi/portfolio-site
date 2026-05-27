import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";

describe("US2 projects structure", () => {
  it("renders six featured projects and archive section", () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/localLLM/i)).toBeInTheDocument();
    expect(screen.getByText(/Debt Crusher/i)).toBeInTheDocument();
    expect(screen.getByText(/WealthPilot/i)).toBeInTheDocument();
    expect(screen.getByText(/Price Pin/i)).toBeInTheDocument();
    expect(screen.getByText(/Kadi Tiri/i)).toBeInTheDocument();
    expect(screen.getByText(/HA Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Earlier Work/i)).toBeInTheDocument();
  });
});
