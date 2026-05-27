import { getResumeContent, getStructuredResumeContent } from "@/lib/content/site-content-loader";
import { ResumeView } from "@/components/sections/ResumeView";
import { siteContent } from "@/lib/content/site-content";

export default function ResumePage() {
  const resume = getResumeContent();
  const structuredResume = getStructuredResumeContent();
  const ui = siteContent.ui.resumePage;

  return (
    <section className="page-section section-shell reveal-soft" aria-labelledby="resume-title">
      <div className="section-heading measure">
        <div className="eyebrow">{ui.eyebrow}</div>
        <h1 id="resume-title">{resume.intro.title}</h1>
        <p className="route-lead">{resume.intro.body}</p>
      </div>
      <ResumeView resume={resume} structuredResume={structuredResume} />
    </section>
  );
}
