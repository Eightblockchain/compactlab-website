/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  DOCS CONTENT                                               ║
 * ║  app/docs/content.tsx                                       ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  This is the ONLY file you need to edit to update the docs. ║
 * ║  The layout, sidebar, and styling live in page.tsx and      ║
 * ║  components/docs/ui.tsx — no need to touch those.           ║
 * ║                                                             ║
 * ║  Available components (auto-complete in VS Code):           ║
 * ║    <DocH2 id="anchor-id">Section Title</DocH2>              ║
 * ║    <DocH3 id="anchor-id">Sub-section</DocH3>                ║
 * ║    <P>Paragraph text</P>                                    ║
 * ║    <Code>inline code</Code>                                 ║
 * ║    <CodeBlock filename="Foo.compact">{`...`}</CodeBlock>     ║
 * ║    <CalloutBox type="info|warning|tip">...</CalloutBox>     ║
 * ║    <Soon />   ← "soon" badge next to a heading              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import Link from "next/link";
import { Soon, DocH2, DocH3, P, Code, CodeBlock, CalloutBox } from "@/components/docs/ui";

export default function DocsContent() {
  return (
    <>
      {/* ── Introduction ─────────────────────────────────────────── */}

      <DocH2 id="introduction">Introduction</DocH2>
      <P>
        <strong className="text-white/75">Midnight Compact Lab</strong> is a
        browser-based playground for{" "}
        <strong className="text-white/75">Compact</strong> — the smart contract
        language of the Midnight blockchain. Create a free Community account,
        write contracts in the editor, Compile (ZK), then Deploy and Call on
        Midnight Preprod with the 1AM wallet. No local Compact toolchain is required.
      </P>
      <P>
        The Lab runs the Compact compiler, stores your projects in the cloud,
        and talks to Midnight Preprod so you can prove and submit transactions
        from the browser. Mainnet is not supported in v1.
      </P>

      {/* ── What is Compact? ─────────────────────────────────────── */}

      <DocH2 id="what-is-compact">What is Compact?</DocH2>
      <P>
        Compact is a domain-specific language designed for writing smart contracts
        on the{" "}
        <a
          href="https://midnight.network"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white/80 transition-colors"
          style={{ color: "#E95144" }}
        >
          Midnight blockchain
        </a>
        . Its defining feature is built-in{" "}
        <strong className="text-white/75">zero-knowledge proving</strong>: contract
        logic runs privately on the user&apos;s device and only a cryptographic proof
        is submitted on-chain. Public state is updated without ever revealing the
        private inputs that produced the proof.
      </P>
      <P>
        This model makes Compact uniquely suited for applications requiring
        selective disclosure — proving a condition is true without revealing the
        underlying data.
      </P>
      <CalloutBox type="info">
        Compact compiles to ZK circuits. Each <Code>circuit</Code> function in your
        contract becomes a provable computation. The compiler version used in Compact
        Lab is <Code>{">=0.20"}</Code>.
      </CalloutBox>

      {/* ── Quick Start ──────────────────────────────────────────── */}

      <DocH2 id="quick-start">Quick Start</DocH2>
      <P>Create a free Community account, then open the playground:</P>
      <ol className="list-decimal list-inside text-white/50 text-sm leading-relaxed space-y-2 mb-6 pl-1">
        <li>Choose a starter template — Hello and Counter support Instant Deploy.</li>
        <li>Write your Compact contract in the editor. Syntax errors are highlighted inline.</li>
        <li>Typecheck, then <strong className="text-white/75">Compile (ZK)</strong> for custom contracts.</li>
        <li>Connect <strong className="text-white/75">1AM</strong> on Midnight Preprod, Deploy, then Call circuits from the Contract panel.</li>
      </ol>

      {/* ── Interface Overview ───────────────────────────────────── */}

      <DocH2 id="interface-overview">Interface Overview</DocH2>
      <P>The Compact Lab interface is split into three main zones:</P>
      <div className="space-y-3 mb-8">
        {[
          {
            label: "Editor Panel",
            desc:  "Center canvas where you write Compact source code. Features syntax highlighting, bracket matching, and inline error markers.",
          },
          {
            label: "Output Panel",
            desc:  "Displays compiler output, circuit metadata, network logs, and ZK artifact listings after Compile.",
          },
          {
            label: "File Explorer",
            desc:  "Manage multiple .compact files per project. Templates are pre-loaded as individual files.",
          },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-4 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
            <div className="w-1 rounded-full shrink-0" style={{ backgroundColor: "#E95144", opacity: 0.6 }} />
            <div>
              <p className="text-sm font-medium text-white/80 mb-1">{label}</p>
              <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <DocH3 id="keyboard-shortcuts">
        Keyboard Shortcuts <Soon />
      </DocH3>
      <P>
        A full keyboard shortcut reference is coming soon. In the meantime the
        editor supports standard code editor bindings (save, undo/redo, find,
        comment toggle).
      </P>

      <DocH3 id="file-management">
        File Management
      </DocH3>
      <P>
        Signed-in projects sync to CompactLab cloud storage so you can resume work
        across sessions. Richer multi-file workflows and zip import/export polish
        continue to evolve with the playground.
      </P>

      {/* ── Contract Structure ───────────────────────────────────── */}

      <DocH2 id="contract-structure">Contract Structure</DocH2>
      <P>
        Every Compact contract begins with a language pragma and a standard library
        import. At the top level you declare ledger state, witnesses, a constructor,
        and one or more circuit functions.
      </P>
      <CodeBlock filename="Counter.compact">
{`pragma language_version >= 0.20;

import CompactStandardLibrary;

// ── ledger state (public, on-chain) ──────────────
export ledger count: Counter;

// ── private witness ──────────────────────────────
witness secretKey(): Bytes<32>;

// ── initialises on-chain state ───────────────────
constructor() {
  count.increment(0);
}

// ── provable transition ──────────────────────────
export circuit increment(): [] {
  count.increment(1);
}`}
      </CodeBlock>

      {/* ── Ledger State ─────────────────────────────────────────── */}

      <DocH3 id="ledger-state">Ledger State</DocH3>
      <P>
        Ledger variables hold persistent, public state stored on the Midnight
        blockchain. They are declared at module scope using the{" "}
        <Code>ledger</Code> keyword.
      </P>
      <CodeBlock>
{`export ledger count:    Counter;     // auto-incrementing integer
export ledger owner:    Bytes<32>;   // 32-byte hash (e.g. public-key hash)
export ledger sequence: Counter;     // monotonic sequence number
export ledger state:    State;       // user-defined enum`}
      </CodeBlock>
      <CalloutBox type="warning">
        Ledger variables are <strong>always public</strong>. Never store private
        data directly in a ledger variable. Use <Code>witness</Code> declarations
        and the <Code>disclose()</Code> pattern instead.
      </CalloutBox>

      {/* ── Circuits ─────────────────────────────────────────────── */}

      <DocH3 id="circuits">Circuits</DocH3>
      <P>
        A <Code>circuit</Code> is a function whose execution generates a ZK proof.
        When you call an exported circuit from a Midnight DApp, the proof is
        computed client-side and submitted on-chain without revealing the private
        inputs.
      </P>
      <CodeBlock>
{`export circuit post(): [] {
  assert(state == State.VACANT, "Board is occupied");
  owner = disclose(persistentHash<Bytes<32>>(localKey()));
  state = State.OCCUPIED;
  sequence.increment(1);
}`}
      </CodeBlock>
      <P>
        The return type <Code>[]</Code> means the circuit returns nothing publicly.
        A circuit can also return public values, e.g. <Code>{"[Uint<32>]"}</Code>.
      </P>

      {/* ── Witnesses & Privacy ──────────────────────────────────── */}

      <DocH3 id="witnesses">Witnesses &amp; Privacy</DocH3>
      <P>
        A <Code>witness</Code> declaration names a private value that the user
        supplies at proof-generation time. This value never touches the blockchain —
        only the proof that something valid was provided is recorded.
      </P>
      <CodeBlock>
{`// declares that the user will provide a 32-byte secret key
witness secretKey(): Bytes<32>;

// or: a key derived from the local wallet
witness localKey(): Bytes<32>;`}
      </CodeBlock>
      <P>
        Inside a circuit you can use witness values freely. The compiler ensures
        they cannot &quot;leak&quot; into public state unless explicitly wrapped in{" "}
        <Code>disclose()</Code>.
      </P>

      {/* ── disclose() ───────────────────────────────────────────── */}

      <DocH3 id="disclose">The <Code>disclose()</Code> Pattern</DocH3>
      <P>
        <Code>disclose()</Code> is the gate between private and public. It marks an
        expression as intentionally made public, which allows it to be written into
        a ledger variable.
      </P>
      <CodeBlock>
{`// ✓ safe — only the HASH of the secret key is public
owner = disclose(persistentHash<Bytes<32>>(secretKey()));

// ✗ compile error — can't assign a witness directly to ledger state
// owner = secretKey();`}
      </CodeBlock>
      <P>Two hashing builtins are available:</P>
      <ul className="list-disc list-inside text-white/50 text-sm space-y-2 mb-6 pl-1">
        <li>
          <Code>persistentHash&lt;T&gt;(value)</Code> — produces the same hash across
          multiple transactions for the same input. Use for ownership proofs.
        </li>
        <li>
          <Code>transientHash&lt;T&gt;(value)</Code> — produces a unique hash per
          transaction. Use for one-time commitments.
        </li>
      </ul>

      {/* ── Built-in Types ───────────────────────────────────────── */}

      <DocH3 id="builtin-types">Built-in Types</DocH3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-xs font-mono border-collapse">
          <thead>
            <tr className="border-b border-white/8">
              <th className="text-left text-white/30 py-2.5 pr-8 font-normal">Type</th>
              <th className="text-left text-white/30 py-2.5 pr-8 font-normal">Description</th>
            </tr>
          </thead>
          <tbody className="text-white/50">
            {[
              ["Counter",            "Auto-incrementing ledger integer (call .increment(n))"],
              ["Bytes<N>",           "Fixed-length byte array of length N"],
              ["Uint<N>",            "Unsigned integer with N-bit precision"],
              ["Boolean",            "true / false"],
              ["Field",              "Prime field element (raw ZK circuit value)"],
              ["Maybe<T>",           "Optional value — none<T>() or some<T>(val)"],
              ["ZswapCoinPublicKey", "A Midnight wallet public key"],
              ["Vector<N, T>",       "Fixed-length array of N elements of type T"],
            ].map(([type, desc]) => (
              <tr key={type} className="border-b border-white/5">
                <td className="py-2.5 pr-8" style={{ color: "#E95144" }}>{type}</td>
                <td className="py-2.5 text-white/40">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Contract panel ───────────────────────────────────────── */}

      <DocH2 id="simulation">
        Calling Contracts
      </DocH2>
      <P>
        After a successful Deploy, open the <strong className="text-white/75">Contract</strong>{" "}
        panel. Connect 1AM on Preprod, then Call exported circuits. Proofs run in the
        wallet; CompactLab then reads public ledger state from the indexer. You can
        also Join another contract by pasting an address deployed from the same project.
      </P>
      <CalloutBox type="info">
        CompactLab v1 does not ship a local Simulate sandbox. Typecheck is offline;
        Deploy and Call are on-chain on Preprod.
      </CalloutBox>

      <DocH3 id="circuit-output">
        Circuit Output
      </DocH3>
      <P>
        After Compile (ZK), the output panel lists generated circuits and artifacts.
        Example:
      </P>
      <CodeBlock>
{`Compilation successful

circuit increment  (k=10, rows=29)
circuit pause      (k=12, rows=41)

witness secretKey: shielded ✓`}
      </CodeBlock>
      <P>
        <Code>k</Code> is the circuit depth parameter and <Code>rows</Code> is the
        number of constraint rows. Lower is faster and cheaper to prove.
      </P>

      {/* ── Privacy Inspector ────────────────────────────────────── */}

      <DocH2 id="privacy-inspector">
        Privacy Inspector
      </DocH2>
      <P>
        The Privacy tab in the playground highlights Compact disclosure flows
        (heuristic, not a formal verifier). Use it to see which values stay
        off-chain in witnesses versus what may be disclosed to the public ledger.
      </P>

      {/* ── Deploying ────────────────────────────────────────────── */}

      <DocH2 id="testnet">
        Deploying to Preprod
      </DocH2>
      <P>
        CompactLab v1 deploys to <strong className="text-white/75">Midnight Preprod</strong> with
        the <strong className="text-white/75">1AM</strong> wallet. Compile (ZK), connect 1AM,
        fund tDUST from the faucet if needed, then Deploy. After success, open the
        Contract panel to Call exported circuits and read public ledger state.
      </P>

      <DocH3 id="mainnet">
        Deploying to Mainnet <Soon />
      </DocH3>
      <CalloutBox type="warning">
        CompactLab does not support Mainnet in v1. Always complete a thorough Preprod
        validation and an independent audit before deploying any contract to Mainnet
        outside this lab.
      </CalloutBox>

      {/* ── Templates ────────────────────────────────────────────── */}

      <DocH2 id="using-templates">Using Templates</DocH2>
      <P>
        Templates are pre-written Compact contracts. Hello and Counter support Instant
        Deploy (bundled ZK keys). Other templates need <strong className="text-white/75">Compile (ZK)</strong>{" "}
        before Deploy. Open Templates in the playground, hover a card, and click{" "}
        <strong className="text-white/75">Use Template</strong>.
      </P>

      <DocH3 id="available-templates">Available Templates</DocH3>
      <div className="space-y-3 mb-8">
        {[
          {
            name: "Private Counter",
            desc: "A counter with owner-gated pause functionality. Demonstrates Counter ledger type, witness ownership proofs, and assert guards.",
            file: "PrivateCounter.compact",
          },
          {
            name: "Bulletin Board",
            desc: "A single-slot message board where only the original poster can take down their message. Demonstrates State enum, disclose(), and sequence counters.",
            file: "BulletinBoard.compact",
          },
          {
            name: "ZK Loan",
            desc: "A privacy-preserving loan application that proves creditworthiness without revealing the underlying score. Based on the official Midnight example.",
            file: "ZkLoan.compact",
          },
          {
            name: "Token Transfer",
            desc: "A simple shielded token that moves balances privately between ZswapCoinPublicKey addresses.",
            file: "ShieldedToken.compact",
            soon: true,
          },
        ].map(({ name, desc, file, soon: s }) => (
          <div key={name} className="p-4 rounded-lg border border-white/8 bg-white/[0.02]">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-sm font-medium text-white/80">{name}</p>
              {s && <Soon />}
            </div>
            <p className="text-xs text-white/35 leading-relaxed mb-2">{desc}</p>
            {!s && (
              <code
                className="font-mono text-xs px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#E95144" }}
              >
                {file}
              </code>
            )}
          </div>
        ))}
      </div>

      {/* ── Wallet Setup ─────────────────────────────────────────── */}

      <DocH2 id="wallet-setup">
        Wallet Setup
      </DocH2>
      <P>
        CompactLab v1 requires the <strong className="text-white/75">1AM</strong> wallet
        on Midnight Preprod for Deploy and Call (ZK proving via{" "}
        <Code>getProvingProvider</Code>). Install 1AM from{" "}
        <a href="https://1am.xyz/" className="text-white/75 underline">1am.xyz</a>,
        unlock on Preprod, and approve the playground origin. Lace and other Midnight
        wallets are not supported in v1.
      </P>
      <CalloutBox type="tip">
        You can Typecheck without a wallet. A funded 1AM wallet on Preprod is required
        to Deploy or Call on-chain.
      </CalloutBox>

      {/* ── FAQ ──────────────────────────────────────────────────── */}

      <DocH2 id="faq">FAQ</DocH2>
      <div className="space-y-6 mb-10">
        {[
          {
            q: "Do I need to install anything?",
            a: "No compiler toolchain on your machine. You need a browser, a free CompactLab account, and 1AM if you want to Deploy or Call on Preprod.",
          },
          {
            q: "Is my code stored anywhere?",
            a: "Projects sync to CompactLab’s cloud API when you are signed in so you can resume later. Export a zip if you want a local copy.",
          },
          {
            q: "Which Compact version is supported?",
            a: "CompactLab targets Compact compiler 0.31.1 (language ≥ 0.23). The version is shown after Compile.",
          },
          {
            q: "Can I use the Lab without a Midnight wallet?",
            a: "You can write and Typecheck without a wallet. Deploy and Call require 1AM on Preprod with tDUST for Self-pay fees.",
          },
          {
            q: "Where can I find official Compact language documentation?",
            a: "See the official Midnight documentation at docs.midnight.network/compact.",
          },
        ].map(({ q, a }) => (
          <div key={q}>
            <p className="text-sm font-medium text-white/75 mb-2">{q}</p>
            <p className="text-sm text-white/45 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* ── Bottom nav ───────────────────────────────────────────── */}

      <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href="https://docs.midnight.network/compact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          Official Compact Language Docs →
        </a>
        <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
          ← Back to Compact Lab
        </Link>
      </div>
    </>
  );
}
