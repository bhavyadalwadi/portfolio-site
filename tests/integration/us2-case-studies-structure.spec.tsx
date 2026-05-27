import { render, screen } from "@testing-library/react";
import CaseStudiesPage from "@/app/case-studies/page";

describe("US2 case studies structure", () => {
  it("renders intro and case-study narrative blocks", () => {
    render(<CaseStudiesPage />);
    expect(screen.getByRole("heading", { name: /^Case Studies$/i })).toBeInTheDocument();
    expect(screen.getByText(/localLLM/i)).toBeInTheDocument();
    expect(screen.getByText(/Debt Crusher/i)).toBeInTheDocument();
    expect(screen.getByText(/WealthPilot/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Problem:/i).length).toBeGreaterThanOrEqual(2);
  });
});
