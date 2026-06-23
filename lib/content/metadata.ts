import type { Metadata } from "next";

export function getDefaultMetadata(): Metadata {
  return {
    title: "Bhavya Dalwadi — Staff Full-Stack Engineer",
    description:
      "Staff-leaning full-stack engineer. Product judgment, AI systems, and end-to-end delivery. Based in San Jose, CA.",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://bhavyadalwadi.com"
    ),
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Bhavya Dalwadi — Staff Full-Stack Engineer",
      description:
        "Product-grade software for messy workflows. AI where it helps. Clear systems where it counts.",
      siteName: "Bhavya Dalwadi",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bhavya Dalwadi — Staff Full-Stack Engineer",
      description:
        "Product-grade software for messy workflows. AI where it helps. Clear systems where it counts.",
    },
  };
}
