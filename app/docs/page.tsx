/**
 * Docs layout: sidebar and content column. Edit app/docs/content.tsx for the
 * text and app/docs/nav.ts for the sidebar.
 */

import type { Metadata } from "next";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsToc from "@/components/docs/DocsToc";
import { Container, reveal } from "@/components/site/ui";
import { BASE_URL } from "@/lib/site";
import DocsContent from "./content";

const DESCRIPTION =
  "How to write, compile, deploy and call Compact smart contracts in the CompactLab playground on Midnight Preprod and Preview.";

export const metadata: Metadata = {
  title: "Docs",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/docs` },
  openGraph: { title: "Docs · CompactLab", description: DESCRIPTION, url: `${BASE_URL}/docs` },
};

export default function DocsPage() {
  return (
    <Container className="flex gap-12">
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-52 shrink-0 overflow-y-auto py-10 lg:block">
        <DocsSidebar />
      </aside>

      <main id="main-content" className="min-w-0 max-w-[720px] flex-1 py-10 sm:py-14">
        <h1 {...reveal()} className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Using CompactLab</h1>
        <p className="mt-3 mb-8 text-[15px] text-text-secondary">
          Everything the playground does today, and how to use it.
        </p>

        <DocsToc />

        <DocsContent />
      </main>
    </Container>
  );
}
