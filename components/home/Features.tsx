import { Container, reveal, SectionHeader } from "@/components/site/ui";

const FEATURES: Array<{ title: string; body: string }> = [
  {
    title: "An editor that knows Compact",
    body: "Syntax highlighting, completions, hover types and inline diagnostics. Projects can hold several files, are saved to your account, and export as a zip.",
  },
  {
    title: "Compile on our servers",
    body: "Typecheck only for a quick check, or a full ZK build that produces the proving keys Deploy needs. No local toolchain.",
  },
  {
    title: "Deploy and call from your wallet",
    body: "1AM builds the proofs and signs in your browser, and fees come from your own tDUST. CompactLab never holds your keys or sends a transaction for you.",
  },
  {
    title: "Read ledger state",
    body: "Public ledger values update after every call. Preprod reads go through CompactLab or your own free Blockfrost key; Preview uses Midnight’s public indexer.",
  },
  {
    title: "See what stays private",
    body: "The Privacy view marks private, public, disclosed and hashed values, so you can see where disclose() is needed. It’s a guide, not a formal verifier.",
  },
  {
    title: "Templates and lessons",
    body: "Ten templates, from Hello World to escrow and commit-reveal. Hello World and Counter deploy without compiling. The Learn panel explains each concept.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeader
          title="The whole loop in one tab"
          description="Write, compile, deploy, call and read state on Midnight’s test networks, without leaving the browser."
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, body }, i) => (
            <div key={title} {...reveal((i % 3) * 70)} className="border-t border-border-strong pt-5">
              <h3 className="text-[15px] font-medium text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
