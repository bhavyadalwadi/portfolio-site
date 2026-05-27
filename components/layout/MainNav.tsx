import Link from "next/link";

const defaultLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function MainNav({ includeWriting = false }: { includeWriting?: boolean }) {
  const links = includeWriting ? [...defaultLinks, { href: "/writing", label: "Writing" }] : defaultLinks;

  return (
    <nav className="main-nav" aria-label="Primary">
      <div className="container nav-row">
        <Link href="/" className="brand-link" aria-label="Bhavya Dalwadi home">
          <div className="brand">Bhavya Dalwadi</div>
          <div className="meta-label brand-note">
            <span>Staff-leaning</span>
            <span className="brand-separator" aria-hidden="true">|</span>
            <span>Full-Stack</span>
            <span className="brand-separator" aria-hidden="true">|</span>
            <span>Product</span>
            <span className="brand-separator" aria-hidden="true">|</span>
            <span>Engineering</span>
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
