import type { Metadata } from "next";

export function getDefaultMetadata(): Metadata {
  return {
    title: "Portfolio Signal",
    description: "A portfolio website highlighting projects, outcomes, and direct contact paths.",
    metadataBase: new URL("https://example.com"),
    openGraph: {
      title: "Portfolio Signal",
      description: "Explore featured case studies and start a conversation.",
      type: "website",
    },
  };
}
