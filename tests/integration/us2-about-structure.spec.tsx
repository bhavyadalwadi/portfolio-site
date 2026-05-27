import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("US2 about structure", () => {
  it("renders all required about sections", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByText(/How I Work/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Focus/i)).toBeInTheDocument();
    expect(screen.getByText(/What I Look For/i)).toBeInTheDocument();
    expect(screen.getByText(/Beyond the Resume/i)).toBeInTheDocument();
  });
});
