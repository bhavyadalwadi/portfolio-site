import Link from "next/link";
import { siteContent } from "@/lib/content/site-content";

export function MainNav({ includeWriting = false }: { includeWriting?: boolean }) {
  const nav = siteContent.ui.navigation;
  const links = includeWriting ? [...nav.links, nav.writingLink] : nav.links;

  return (
    <nav className="main-nav" aria-label={nav.ariaLabel}>
      <div className="container nav-row">
        <Link href="/" className="brand-link" aria-label={nav.homeAriaLabel}>
          <div className="brand-block">
            <div className="brand">{nav.brandName}</div>
            <div className="meta-label brand-note">
              <span>{nav.brandPrimary}</span>
              <span className="brand-separator" aria-hidden="true">•</span>
              <span>{nav.brandSecondary}</span>
            </div>
          </div>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-chip">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
