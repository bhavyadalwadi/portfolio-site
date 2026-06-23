import Link from "next/link";
import type { SiteBlueprint } from "@/lib/content/schema";
import { HeroTerminal } from "@/components/sections/HeroTerminal";

export function HeroSection({ hero }: { hero: SiteBlueprint["home"]["hero"] }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy hero-copy-compact">
        <div className="hero-copy-topline">
          <div className="eyebrow kicker">{hero.eyebrow}</div>
        </div>
        <div className="hero-copy-band">
          <div className="hero-copy-main">
            <h1 id="hero-title">{hero.headline}</h1>
            <p className="hero-summary">{hero.subheadline}</p>
          </div>
          <div className="hero-copy-side">
            <p className="route-lead">{hero.supportingLine}</p>
            <div className="hero-actions hero-actions-compact">
              <Link href={hero.primaryCta.href} className="link-btn">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href}>
                <button className="secondary">{hero.secondaryCta.label}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-support hero-support-full">
        <HeroTerminal terminal={hero.terminal} />
      </div>
    </section>
  );
}
