"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteBlueprint } from "@/lib/content/schema";

type HeroMatcherData = SiteBlueprint["home"]["hero"]["matcher"];

export function HeroRoleMatcher({ matcher }: { matcher: HeroMatcherData }) {
  const [selectedRoleId, setSelectedRoleId] = useState(matcher.defaultRoleId);
  const selectedRole = matcher.roles.find((role) => role.id === selectedRoleId) ?? matcher.roles[0];

  return (
    <div className="hero-role-matcher-shell">
      <div className="hero-panel matcher-panel">
        <div className="matcher-topline">
          <div className="meta-label">{matcher.label}</div>
        </div>

        <div className="matcher-intro">
          <strong>{matcher.introLine}</strong>
        </div>

        <div className="matcher-chip-row" aria-label="Role fit options">
          {matcher.roles.map((role) => {
            const isActive = role.id === selectedRole.id;
            return (
              <button
                key={role.id}
                type="button"
                className={`matcher-chip${isActive ? " is-active" : ""}`}
                onClick={() => setSelectedRoleId(role.id)}
                aria-pressed={isActive}
              >
                {role.label}
              </button>
            );
          })}
        </div>

        <div className="matcher-result" aria-live="polite">
          <div className="matcher-result-head">
            <span className="meta-label">Best fit</span>
            <h3>{selectedRole.label}</h3>
          </div>
          <p className="matcher-summary">{selectedRole.summary}</p>
          <div className="matcher-proof-block">
            <div className="meta-label">Proof points</div>
            <ul className="matcher-proof-list">
              {selectedRole.proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="matcher-links">
            {selectedRole.links.map((link) => (
              <Link key={`${selectedRole.id}-${link.href}`} href={link.href} className="matcher-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
