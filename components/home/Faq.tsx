"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { Collapsible } from "@/components/site/Collapsible";
import { cn, Container, reveal, SectionHeader, TEXT_LINK } from "@/components/site/ui";
import { LINKS, SOURCE_URL } from "@/lib/site";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>
    {children}
  </a>
);

const FAQ: Array<{ q: string; a: ReactNode }> = [
  {
    q: "Is CompactLab free?",
    a: (
      <>
        Yes. Create a free account to save projects and compile. Network fees are paid in tDUST from your own
        wallet: get tNIGHT from the <A href={LINKS.preprodFaucet}>Preprod faucet</A> and your wallet generates
        tDUST from it.
      </>
    ),
  },
  {
    q: "Does CompactLab hold my keys or funds?",
    a: "No. Deploy and Call always open your 1AM wallet, which builds the proof and signs in your browser. CompactLab never holds keys and never sends a transaction on your behalf.",
  },
  {
    q: "Where is my code stored?",
    a: "Projects are saved to your CompactLab account so you can pick up on any device. To compile, the source is sent to the CompactLab API. You can export any project as a zip.",
  },
  {
    q: "What do I need to install?",
    a: (
      <>
        Nothing to write and compile. To deploy and call, install the <A href={LINKS.oneAm}>1AM wallet</A> and
        switch it to Preprod or Preview.
      </>
    ),
  },
  {
    q: "Which networks are supported?",
    a: "Midnight Preprod (the default) and Preview. Contracts on one network aren’t visible on the other. Mainnet is not supported.",
  },
  {
    q: "Is it open source?",
    a: (
      <>
        Yes. The playground is MIT-licensed and on <A href={SOURCE_URL}>GitHub</A>. Issues and pull requests are
        welcome.
      </>
    ),
  },
  {
    q: "What’s coming next?",
    a: (
      <>
        Sponsored fees on Preprod, a browser simulator and shareable test links are planned. They are not available
        yet. See the{" "}
        <Link href="/changelog" className={TEXT_LINK}>
          changelog
        </Link>
        .
      </>
    ),
  },
];

export default function Faq() {
  const base = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-border py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeader title="Questions" description="Anything else? Open an issue on GitHub." />
        <div className="divide-y divide-border border-y border-border" {...reveal(80)}>
          {FAQ.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panel = `${base}-faq-${i}`;
            return (
              <div key={q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panel}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] text-text-primary transition-colors hover:text-white"
                  >
                    {q}
                    <Plus
                      aria-hidden
                      className={cn(
                        "size-4 shrink-0 text-text-muted transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                        isOpen && "rotate-45 text-text-secondary",
                      )}
                    />
                  </button>
                </h3>
                <Collapsible open={isOpen} id={panel}>
                  <p className="pr-8 pb-5 text-sm leading-relaxed text-text-secondary">{a}</p>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
