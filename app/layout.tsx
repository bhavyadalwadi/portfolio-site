import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { getDefaultMetadata } from "@/lib/content/metadata";

export const metadata: Metadata = getDefaultMetadata();
const enableWriting = false;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell includeWriting={enableWriting}>{children}</SiteShell>
      </body>
    </html>
  );
}
