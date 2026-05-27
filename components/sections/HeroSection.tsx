import Link from "next/link";
import type { SiteBlueprint } from "@/lib/content/schema";
import { HeroTerminal } from "@/components/sections/HeroTerminal";

export function HeroSection({ hero }: { hero: SiteBlueprint["home"]["hero"] }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow kicker">{hero.eyebrow}</div>
        <h1 id="hero-title">{hero.headline}</h1>
        <p className="hero-summary measure-narrow">{hero.subheadline}</p>
        <p className="route-lead">{hero.supportingLine}</p>
        <div className="hero-actions">
          <Link href={hero.primaryCta.href} className="link-btn">
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href}>
            <button className="secondary">{hero.secondaryCta.label}</button>
          </Link>
        </div>
      </div>
      <div className="hero-support">
        <HeroTerminal terminal={hero.terminal} />
      </div>
    </section>
  );
}
