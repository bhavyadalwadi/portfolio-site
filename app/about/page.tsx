import { AboutSection } from "@/components/sections/AboutSection";
import { getAboutContent } from "@/lib/content/site-content-loader";

export default function AboutPage() {
  const about = getAboutContent();
  return <AboutSection content={about} />;
}
