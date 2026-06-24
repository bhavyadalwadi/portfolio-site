import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import { getHomeContent } from "@/lib/content/site-content-loader";
import { getFeaturedProjects } from "@/lib/content/projects";

const IMPACT_ACHIEVEMENTS = [
  { metric: "Auth platform, 25M+ users", context: "redesigned login, session, and WebView flows — ↑18% success rate across the Safeway ecosystem" },
  { metric: "10+ brand rollout", context: "shipped unified auth and session sharing across Safeway, Vons, Albertsons, Tom Thumb, and more" },
  { metric: "AEM → React, end-to-end", context: "led architecture, delivery, and engineering standards for the full platform rewrite" },
];

const STACK_GROUPS = [
  { label: "Frontend", skills: ["React", "TypeScript", "CSS", "Micro-frontends", "Design Systems"] },
  { label: "Backend", skills: ["NestJS", "Node.js", "SSO / Auth", "Session Management"] },
  { label: "AI / ML", skills: ["Vertex AI", "Ollama", "Prompt Engineering", "LM Studio"] },
  { label: "Cloud / Infra", skills: ["Azure", "AKS", "AWS", "Docker", "PCF"] },
  { label: "Tools", skills: ["Cypress", "Jest", "Webpack", "Grafana", "Figma", "D3.js"] },
];

export default function HomePage() {
  const content = getHomeContent();
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <>
      <HeroSection hero={content.hero} />

      {/* Impact Achievements */}
      <div className="container">
        <section className="impact-achievements reveal-soft" aria-label="Selected impact">
          {IMPACT_ACHIEVEMENTS.map((item) => (
            <div key={item.metric} className="impact-achievement">
              <span className="impact-achievement-metric">{item.metric}</span>
              <span className="impact-achievement-context">{item.context}</span>
            </div>
          ))}
        </section>
      </div>

      {/* Selected Work */}
      <section id="work" className="page-section reveal-soft" aria-labelledby="work-title">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Selected Work</div>
            <h2 id="work-title">Projects</h2>
            <p className="route-lead">A focused set showing product judgment, technical range, and how I turn ambiguous requirements into usable software.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="project-card card interaction-soft">
                <div className="card-head">
                  <h3>{project.title}</h3>
                  <div className="tags" aria-label="Project tags">
                    {(project.tags ?? []).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <p>{project.shortSummary}</p>
                <div className="project-card-footer">
                  <Link href={`/projects/${project.slug}`} className="project-card-link">
                    Read case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="page-section reveal-soft" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Approach</div>
            <h2 id="approach-title">How I Work</h2>
          </div>
          <div className="strengths-grid">
            {content.strengths.items.map((item) => (
              <div key={item.title} className="strength-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section id="experience" className="page-section reveal-soft" aria-labelledby="exp-title">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Experience</div>
            <h2 id="exp-title">Where I&rsquo;ve Worked</h2>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-meta">
                <span className="experience-company">Albertsons Companies</span>
                <span className="experience-date">Mar 2018 – Present</span>
              </div>
              <div className="experience-role">Sr. Software Engineer</div>
              <p className="experience-summary">
                Led auth platform redesign for the Safeway ecosystem — ↑18% auth success rate, ↑17% user adoption.
                Drove migration from AEM to React micro-frontend architecture.
                Shipped AI-enabled workflows with Google Vertex AI in production.
              </p>
            </article>
            <article className="experience-item">
              <div className="experience-meta">
                <span className="experience-company">Pro-Tek Consulting</span>
                <span className="experience-date">Sep 2017 – Feb 2018</span>
              </div>
              <div className="experience-role">Software Engineer</div>
              <p className="experience-summary">
                Full-stack delivery across cross-browser React UIs, performance optimization (↑10%), and responsive design systems.
              </p>
            </article>
            <div className="education-inline">
              <span>MS Computer Science — Lamar University, 2017</span>
              <span className="education-sep" aria-hidden="true">·</span>
              <span>BTech Computer Engineering — SVNIT, 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="page-section reveal-soft" aria-label="Technical stack">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Stack</div>
            <h2>Technical Skills</h2>
          </div>
          <div className="stack-groups">
            {STACK_GROUPS.map((group) => (
              <div key={group.label} className="stack-group">
                <div className="stack-group-label">{group.label}</div>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag tag-light">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="page-section reveal-soft" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-cta">
            <div className="eyebrow">Contact</div>
            <h2 id="contact-title">Open to Senior and Staff-level roles</h2>
            <p className="route-lead">Best fit: product-grade platforms, AI-enabled systems, or full-stack ownership at depth. Based in San Jose, CA.</p>
            <div className="hero-actions contact-cta-actions">
              <a href="https://www.linkedin.com/in/bhavyadalwadi/" className="link-btn" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
              <Link href="/resume">
                <button className="secondary">View Resume</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
