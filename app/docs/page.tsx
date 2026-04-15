/**
 * Docs layout shell — sidebar, header, grid.
 * ─────────────────────────────────────────
 * To update written content, edit: app/docs/content.tsx
 * To update styling components, edit: components/docs/ui.tsx
 */

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import DocsContent from "./content";
import DocsSidebar from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Learn how to write, simulate, and deploy Compact smart contracts in the browser-based Midnight playground.",
  alternates: { canonical: "https://compactlab.dev/docs" },
  openGraph: {
    title: "Docs | Compact Lab",
    description: "Learn how to write, simulate, and deploy Compact smart contracts in the browser-based Midnight playground.",
    url: "https://compactlab.dev/docs",
  },
};

/* ─── page ────────────────────────────────────────────────────── */

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image src="/cl-logo.png" alt="Compact Lab logo" width={107} height={20} priority />
            </Link>
            <span className="text-white/15 text-sm">/</span>
            <span className="text-white/40 text-sm">Docs</span>
          </div>
          <Link
            href="/"
            className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 flex gap-0 relative z-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 shrink-0 py-10 pr-8 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <DocsSidebar />
        </aside>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/8 shrink-0 my-10" />

        {/* Content */}
        <main id="main-content" className="flex-1 min-w-0 py-10 lg:pl-12 max-w-2xl">
          <DocsContent />
        </main>
      </div>
    </div>
  );
}
