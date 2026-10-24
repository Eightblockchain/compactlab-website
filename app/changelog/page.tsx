import type { Metadata } from "next";
import { Container, Planned, reveal, TEXT_LINK } from "@/components/site/ui";
import { BASE_URL, SOURCE_URL } from "@/lib/site";

const DESCRIPTION = "What changed in the CompactLab playground, release by release.";

export const metadata: Metadata = {
  title: "Changelog",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/changelog` },
  openGraph: { title: "Changelog · CompactLab", description: DESCRIPTION, url: `${BASE_URL}/changelog` },
};

type Kind = "new" | "improved" | "fixed" | "toolchain";
type Release = { date: string; title: string; changes: Array<[Kind, string]> };

/** Taken from the playground's merged pull requests. Newest first. */
const RELEASES: Release[] = [
  {
    date: "October 2026",
    title: "Preview network and planned maintenance",
    changes: [
      ["new", "Preview network alongside Preprod, with Midnight's public indexer."],
      ["new", "Add your own free Blockfrost key in Settings to read Preprod state."],
      ["new", "Planned maintenance is announced ahead with a live countdown, and open work is saved before it starts."],
      ["improved", "A refined, more compact playground layout."],
      ["improved", "Scoped completions, richer hovers and type hints in the editor."],
      ["improved", "Bytes<N> values can be entered and read as text."],
      ["improved", "The Contract panel explains ledger fields that aren't exported."],
      ["improved", "Only the witnesses a constructor or circuit calls are asked for."],
      ["fixed", "Expired 1AM sessions are detected and you're asked to reconnect."],
      ["fixed", "Unsaved changes are kept and retried if a save fails, instead of being lost."],
      ["toolchain", "Every template is checked against compiler 0.31.1 with language 0.23."],
    ],
  },
  {
    date: "September 2026",
    title: "Constructors, live contract panel and settings",
    changes: [
      ["new", "Deploy asks for constructor arguments, with inputs that match their Compact types."],
      ["new", "Call circuits from the Contract panel and see ledger values update."],
      ["new", "Compact lint, language server and the Privacy view in the editor."],
      ["new", "Settings for account, witness privacy and wallet restore."],
      ["improved", "Compiles run as background jobs on the API."],
      ["toolchain", "Compact compiler 0.31.1 and Midnight.js 4.1.1."],
    ],
  },
  {
    date: "August 2026",
    title: "Accounts, cloud projects and 1AM",
    changes: [
      ["new", "Sign up with email, Google or GitHub. Projects are saved to your account."],
      ["new", "Compile, then Deploy with the 1AM wallet, with links to the block explorer."],
      ["new", "tDUST balance shown from 1AM."],
      ["new", "The Learn panel for Compact and Midnight concepts."],
      ["new", "Export a project as a zip, with its deployment details."],
      ["new", "Browse the compiled ZK artifacts of a contract."],
    ],
  },
  {
    date: "April 2026",
    title: "v1.0.0: first release",
    changes: [
      ["new", "Browser IDE with the Monaco editor and Compact syntax support."],
      ["new", "Projects with nested folders and multiple files."],
      ["new", "Ten Compact templates, from Hello World to ZK Commitment."],
    ],
  },
];

/** From the CompactLab roadmap. None of these are available yet. */
const PLANNED = [
  ["Sponsored fees", "CompactLab pays Preprod fees for an allow-list of builders."],
  ["Browser simulator", "Run circuits locally before you deploy."],
  ["Test links", "Share a deployed contract with testers through a link."],
  ["Forge copilot", "An assistant that writes and repairs Compact in the IDE."],
  ["Quests", "Guided learning paths with certificates."],
  ["Export to GitHub", "Turn a project into a real dApp repository."],
];

const KIND: Record<Kind, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
  toolchain: "Toolchain",
};

export default function ChangelogPage() {
  return (
    <main id="main-content">
      <Container className="max-w-3xl py-14 sm:py-20">
        <h1 {...reveal()} className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">What’s new</h1>
        <p className="mt-3 text-[15px] text-text-secondary">
          {DESCRIPTION} Full history on{" "}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>
            GitHub
          </a>
          .
        </p>

        <ol className="mt-12 space-y-12">
          {RELEASES.map((r) => (
            <li key={r.date} {...reveal()} className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-8">
              <time className="pt-0.5 font-mono text-xs text-text-muted">{r.date}</time>
              <div>
                <h2 className="text-lg font-medium text-text-primary">{r.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {r.changes.map(([kind, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                      <span className="w-[72px] shrink-0 text-text-muted">{KIND[kind]}</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <section {...reveal()} className="mt-16 rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-medium text-text-primary">
            Coming next
            <Planned />
          </h2>
          <p className="mt-1 text-sm text-text-muted">On the roadmap, in rough order. Not available yet.</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {PLANNED.map(([title, body]) => (
              <li key={title}>
                <p className="text-sm text-text-primary">{title}</p>
                <p className="mt-0.5 text-sm text-text-secondary">{body}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
