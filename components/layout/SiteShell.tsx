import Link from "next/link";
import { MainNav } from "@/components/layout/MainNav";
import { ScrollEffects } from "@/components/layout/ScrollEffects";

export function SiteShell({ children, includeWriting = false }: { children: React.ReactNode; includeWriting?: boolean }) {
  return (
    <div className="site-shell">
      <ScrollEffects />
      <MainNav includeWriting={includeWriting} />
      <main className="container site-main">{children}</main>
      <footer>
        <div className="container">
          Built for hiring and product engineering conversations. Reach out via{" "}
          <Link href="/contact">contact</Link>.
        </div>
      </footer>
    </div>
  );
}
