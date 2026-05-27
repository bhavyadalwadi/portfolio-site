import { render, screen } from "@testing-library/react";
import ResumePage from "@/app/resume/page";

describe("US3 resume structure", () => {
  it("renders resume sections and CTAs", () => {
    render(<ResumePage />);
    expect(screen.getByRole("heading", { name: /^Resume$/i })).toBeInTheDocument();
    expect(screen.getByText(/Snapshot/i)).toBeInTheDocument();
    expect(screen.getByText(/Highlights/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Download PDF Resume/i })).toHaveAttribute("href", "/resume/bhavya-dalwadi-resume.pdf");
    expect(screen.getByRole("link", { name: /Contact Me/i })).toHaveAttribute("href", "/contact");
  });
});
