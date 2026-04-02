import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release history for Compact Lab — new features, improvements, and Compact compiler updates.",
  alternates: { canonical: "https://compactlab.dev/changelog" },
  openGraph: {
    title: "Changelog | Compact Lab",
    description: "Release history for Compact Lab — new features, improvements, and Compact compiler updates.",
    url: "https://compactlab.dev/changelog",
  },
};

/* ─── types ───────────────────────────────────────────────────── */

type ChangeKind = "new" | "improved" | "fixed" | "compiler" | "breaking";

type ChangeEntry = {
  kind: ChangeKind;
  text: string;
};

type Release = {
  version: string;
  date: string;
  tag?: "latest";
  summary: string;
  changes: ChangeEntry[];
};

/* ─── data ────────────────────────────────────────────────────── */

const releases: Release[] = [
  {
    version: "0.1.0",
    date: "April 2, 2026",
    tag: "latest",
    summary:
      "Initial public launch of Midnight Compact Lab — a browser-based IDE for writing, simulating, and deploying Compact smart contracts.",
    changes: [
      { kind: "new",      text: "Monaco-based code editor with Compact syntax highlighting (keywords, types, witnesses, circuits)." },
      { kind: "new",      text: "Live compiler error markers with inline diagnostics." },
      { kind: "new",      text: "Starter templates: Private Counter, Bulletin Board, ZK Loan." },
      { kind: "new",      text: "Output panel displaying circuit statistics (k-parameter, constraint rows) and witness declarations." },
      { kind: "new",      text: "Privacy Visualization layer — colour-coded ZK proof inspector (public vs. shielded expressions)." },
      { kind: "new",      text: "Privacy-first architecture: all code processing happens client-side, no source files are transmitted." },
      { kind: "compiler", text: "Ships with Compact compiler ≥ 0.20 (bundled as WebAssembly)." },
    ],
  },
];

/* ─── coming up ───────────────────────────────────────────────── */

const roadmap: { label: string; desc: string }[] = [
  { label: "Multi-file projects",     desc: "Import, export, and manage multiple .compact files in a single workspace." },
  { label: "Testnet deployment",      desc: "One-click contract deployment to Midnight Testnet, directly from the browser." },
  { label: "Wallet integration",      desc: "Connect a Midnight-compatible wallet to sign and submit transactions." },
  { label: "Simulation sandbox",      desc: "Step-through circuit execution with editable witness inputs and ledger state inspection." },
  { label: "Keyboard shortcut panel", desc: "Full reference for editor bindings, available from the command palette." },
  { label: "Mainnet support",         desc: "Deployment to Midnight Mainnet once the network reaches stable release." },
  { label: "Shareable snippets",      desc: "Generate a permalink to share a contract in a read-only view." },
  { label: "More templates",          desc: "Shielded token transfer, DAO voting, identity proof, and more." },
];

/* ─── helpers ─────────────────────────────────────────────────── */

const kindConfig: Record<ChangeKind, { label: string; bg: string; color: string }> = {
  new:      { label: "New",      bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" },
  improved: { label: "Improved", bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" },
  fixed:    { label: "Fixed",    bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" },
  compiler: { label: "Compiler", bg: "rgba(233,81,68,0.12)",  color: "#E95144" },
  breaking: { label: "Breaking", bg: "rgba(233,81,68,0.18)",  color: "#E95144" },
};

function Badge({ kind }: { kind: ChangeKind }) {
  const c = kindConfig[kind];
  return (
    <span
      className="inline-block text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded shrink-0 mt-0.5"
      style={{ backgroundColor: c.bg, color: c.color }}
    >
      {c.label}
    </span>
  );
}

function Soon() {
  return (
    <span
      className="inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ml-2 align-middle"
      style={{ backgroundColor: "rgba(233,81,68,0.12)", color: "#E95144" }}
    >
      soon
    </span>
  );
}

/* ─── page ────────────────────────────────────────────────────── */

export default function ChangelogPage() {
  return (
    <div id="main-content" className="min-h-screen bg-black">
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
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "#E95144" }}
              >
                <span className="text-white font-black text-[10px] font-mono">CL</span>
              </div>
              <span className="font-semibold text-white tracking-tight text-sm">
                Compact<span style={{ color: "#E95144" }}>Lab</span>
              </span>
            </Link>
            <span className="text-white/15 text-sm">/</span>
            <span className="text-white/40 text-sm">Changelog</span>
          </div>
          <Link
            href="/"
            className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Page header */}
        <div className="mb-16 max-w-xl">
          <div
            className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded mb-5"
            style={{ backgroundColor: "#E95144", color: "#fff" }}
          >
            Changelog
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What&apos;s new in Compact Lab
          </h1>
          <p className="text-white/40 text-sm leading-relaxed">
            Every release, improvement, and compiler update — in one place.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── Release timeline ── */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[5px] top-3 bottom-0 w-px bg-white/8" />

              <div className="space-y-16">
                {releases.map((release) => (
                  <div key={release.version} className="relative pl-8">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-3 w-[11px] h-[11px] rounded-full border-2 border-black"
                      style={{ backgroundColor: "#E95144" }}
                    />

                    {/* Version + date */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-lg font-semibold text-white font-mono">
                        v{release.version}
                      </h2>
                      {release.tag === "latest" && (
                        <span
                          className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "#E95144", color: "#fff" }}
                        >
                          latest
                        </span>
                      )}
                      <span className="text-xs text-white/25 font-mono ml-auto sm:ml-0">
                        {release.date}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-white/45 leading-relaxed mb-6">
                      {release.summary}
                    </p>

                    {/* Change list */}
                    <ul className="space-y-3">
                      {release.changes.map((entry, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Badge kind={entry.kind} />
                          <span className="text-sm text-white/55 leading-relaxed">
                            {entry.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Future placeholder */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-3 w-[11px] h-[11px] rounded-full border-2 border-white/15 bg-black" />
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-lg font-semibold text-white/20 font-mono">
                      v0.2.0
                    </h2>
                    <Soon />
                  </div>
                  <p className="text-sm text-white/20 leading-relaxed">
                    Simulation sandbox, multi-file projects, and Testnet deployment.
                    ETA to be announced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Roadmap sidebar ── */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-mono font-semibold text-white/20 uppercase tracking-widest mb-5">
                On the roadmap
              </h3>
              <ul className="space-y-4">
                {roadmap.map(({ label, desc }) => (
                  <li key={label} className="flex gap-3">
                    <div
                      className="w-1 rounded-full shrink-0 mt-1"
                      style={{ backgroundColor: "#E95144", opacity: 0.3, minHeight: "1rem" }}
                    />
                    <div>
                      <p className="text-sm text-white/50 font-medium leading-snug mb-0.5">
                        {label}
                      </p>
                      <p className="text-xs text-white/25 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-white/8">
                <p className="text-xs text-white/25 leading-relaxed mb-4">
                  Have a feature request or found a bug?
                </p>
                <a
                  href="https://github.com/midnightntwrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors border border-white/10 hover:border-white/20 px-3 py-2 rounded-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Open an issue
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom nav */}
        <div className="mt-20 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/docs" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Docs →
          </Link>
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            ← Back to Compact Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
