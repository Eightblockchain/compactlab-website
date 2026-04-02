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
        browser-based integrated development environment for{" "}
        <strong className="text-white/75">Compact</strong> — the smart contract
        language of the Midnight blockchain. You write, test, and deploy
        privacy-preserving contracts entirely in your browser, with no local
        installation required.
      </P>
      <P>
        The Lab handles the Compact compiler, local simulation runtime, ZK proof
        visualization, and Midnight network connectivity so you can focus
        exclusively on writing contract logic.
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
      <P>No sign-up is required for the playground. Open Compact Lab and:</P>
      <ol className="list-decimal list-inside text-white/50 text-sm leading-relaxed space-y-2 mb-6 pl-1">
        <li>Choose a starter template from the Templates panel — or start from a blank file.</li>
        <li>Write your Compact contract in the editor. Syntax errors are highlighted inline.</li>
        <li>Click <strong className="text-white/75">Simulate</strong> to run the contract locally and inspect circuit output.</li>
        <li>When ready, connect your wallet and deploy to Midnight Testnet.</li>
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
            desc:  "Displays compiler output, circuit statistics (constraint rows, k-parameter), witness declarations, and simulation results.",
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
        File Management <Soon />
      </DocH3>
      <P>
        Multi-file project support, import/export of <Code>.compact</Code> files,
        and local persistence are on the roadmap.
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

      {/* ── Simulation ───────────────────────────────────────────── */}

      <DocH2 id="simulation">
        Simulating Contracts <Soon />
      </DocH2>
      <P>
        The simulation panel lets you invoke circuits locally, inspect ledger state
        changes, and view compiler-generated statistics — all without connecting to
        any network.
      </P>

      <DocH3 id="circuit-output">
        Circuit Output <Soon />
      </DocH3>
      <P>
        After compilation, the output panel will display circuit statistics in this
        format:
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
        Privacy Inspector <Soon />
      </DocH2>
      <P>
        The Privacy Inspector is a visual tool for understanding exactly what your
        ZK circuits reveal on-chain. It colour-codes each expression in your
        contract — green for private (stays on device), red for disclosed (goes
        on-chain).
      </P>
      <P>This panel is currently under development and will ship in a future release.</P>

      {/* ── Deploying ────────────────────────────────────────────── */}

      <DocH2 id="testnet">
        Deploying to Testnet <Soon />
      </DocH2>
      <P>
        Full step-by-step deployment guides for Midnight Testnet and Mainnet are
        coming as the network moves toward stable releases.
      </P>

      <DocH3 id="mainnet">
        Deploying to Mainnet <Soon />
      </DocH3>
      <CalloutBox type="warning">
        Smart contract bugs on Mainnet can result in permanent, irreversible loss of
        funds. Always complete a thorough Testnet validation and an independent
        audit before deploying to Mainnet.
      </CalloutBox>

      {/* ── Templates ────────────────────────────────────────────── */}

      <DocH2 id="using-templates">Using Templates</DocH2>
      <P>
        Templates are pre-written Compact contracts that demonstrate common patterns.
        To load a template, open the Templates panel from the sidebar, hover a card,
        and click <strong className="text-white/75">Use Template</strong>. The contract
        is loaded directly into the editor.
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
        Wallet Setup <Soon />
      </DocH2>
      <P>
        Compact Lab will support connecting a Midnight-compatible wallet to sign
        and submit transactions. A step-by-step wallet configuration guide will be
        published once the Midnight wallet SDK reaches a stable API.
      </P>
      <CalloutBox type="tip">
        For now you can use Compact Lab fully in simulation mode without connecting
        a wallet. A wallet is only required for on-chain deployment.
      </CalloutBox>

      {/* ── FAQ ──────────────────────────────────────────────────── */}

      <DocH2 id="faq">FAQ</DocH2>
      <div className="space-y-6 mb-10">
        {[
          {
            q: "Do I need to install anything?",
            a: "No. Compact Lab runs entirely in your browser. The Compact compiler and simulation runtime are bundled as WebAssembly modules.",
          },
          {
            q: "Is my code stored anywhere?",
            a: "Contract code you write is processed locally in your browser. We do not store or transmit your source files unless you use an explicit share feature.",
          },
          {
            q: "Which Compact version is supported?",
            a: "Compact Lab currently targets the Compact compiler at version ≥ 0.20. The active compiler version is shown in the output panel after compilation.",
          },
          {
            q: "Can I use the Lab without a Midnight wallet?",
            a: "Yes. Simulation mode is fully functional without a wallet. A wallet is only needed when deploying to Testnet or Mainnet.",
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
