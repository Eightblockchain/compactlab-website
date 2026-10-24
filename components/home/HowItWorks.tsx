import type { ReactNode } from "react";
import { Container, reveal, SectionHeader } from "@/components/site/ui";
import { TOOLCHAIN } from "@/lib/site";

function Snippet({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-md border border-border bg-surface px-3.5 py-3 font-mono text-[12px] leading-[1.8] text-text-secondary">
      {children}
    </div>
  );
}

const STEPS: Array<{ title: string; body: string; snippet: ReactNode }> = [
  {
    title: "Pick a template",
    body: "Start from Counter, or any of the ten templates, and change it to suit.",
    snippet: (
      <>
        <p>
          <span className="text-text-muted">template</span> <span className="text-text-primary">Counter</span>
        </p>
        <p>
          <span className="text-text-muted">file</span> contracts/counter.compact
        </p>
      </>
    ),
  },
  {
    title: "Compile",
    body: "A full ZK build checks your contract and produces its circuits and proving keys.",
    snippet: (
      <>
        <p className="text-success">Full Compact compile OK</p>
        <p>
          <span className="text-text-muted">compact</span> {TOOLCHAIN.compiler}{" "}
          <span className="text-text-muted">circuits</span> 2
        </p>
      </>
    ),
  },
  {
    title: "Deploy and call",
    body: "Approve in 1AM, then call circuits from the Contract panel and read the ledger.",
    snippet: (
      <>
        <p>
          <span className="text-text-primary">increment()</span> <span className="text-text-muted">approved in 1AM</span>
        </p>
        <p>
          <span className="text-text-muted">ledger</span> <span className="text-[#C4B5FD]">round</span> = 1
        </p>
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeader
          title="From template to Preprod in three steps"
          description="You need a free CompactLab account to save and compile, and the 1AM wallet with test tokens to deploy."
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} {...reveal(i * 90)}>
              <p className="text-[13px] text-text-muted">Step {i + 1}</p>
              <h3 className="mt-1 text-[15px] font-medium text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
              <Snippet>{step.snippet}</Snippet>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
