import Link from "next/link";
import type { SiteBlueprint } from "@/lib/content/schema";
import { HeroTerminal } from "@/components/sections/HeroTerminal";

export function HeroSection({ hero }: { hero: SiteBlueprint["home"]["hero"] }) {
  const showTerminal = process.env.NEXT_PUBLIC_SHOW_TERMINAL === "true";

  return (
    <section className="hero hero-onepage" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-main">
          <div className="eyebrow kicker">{hero.eyebrow}</div>
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="hero-subhead">{hero.subheadline}</p>
          <p className="hero-meta">{hero.supportingLine}</p>
          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="link-btn">{hero.primaryCta.label}</a>
            <Link href={hero.secondaryCta.href}>
              <button className="secondary">{hero.secondaryCta.label}</button>
            </Link>
          </div>
        </div>
      </div>
      {showTerminal && (
        <div className="container hero-terminal-wrap">
          <HeroTerminal terminal={hero.terminal} />
        </div>
      )}
    </section>
  );
}
