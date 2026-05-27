import { cleanup, render, screen } from "@testing-library/react";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ProjectsPage from "@/app/projects/page";
import ContactPage from "@/app/contact/page";

describe("content placement guardrails", () => {
  it("keeps home-only headings off about/projects/contact pages", () => {
    render(<AboutPage />);
    expect(screen.queryByText(/Selected Work/i)).not.toBeInTheDocument();
    cleanup();

    render(<ProjectsPage />);
    expect(screen.queryByText(/How I work/i)).not.toBeInTheDocument();
    cleanup();

    render(<ContactPage />);
    expect(screen.queryByText(/Deeper Case Studies/i)).not.toBeInTheDocument();
  });

  it("keeps contact heading off home page", () => {
    render(<HomePage />);
    expect(screen.queryByRole("heading", { name: /^Contact$/i })).not.toBeInTheDocument();
  });
});
