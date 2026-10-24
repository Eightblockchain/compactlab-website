/**
 * Docs text. The sidebar comes from ./nav.ts, so a new section needs an entry
 * there too. Building blocks live in components/docs/ui.tsx.
 *
 * Only describe what the playground does today. Every Compact example here is
 * taken from a playground template, so it compiles with the pinned compiler.
 */

import { A, Callout, Code, CodeBlock, DocH2, DocH3, List, P, Strong } from "@/components/docs/ui";
import { LINKS, PLAYGROUND_URL, SOURCE_URL, TOOLCHAIN } from "@/lib/site";

const TEMPLATES: Array<[name: string, about: string, level: string]> = [
  ["Hello World", "Store a public message on-chain. Deploys instantly.", "beginner"],
  ["Counter", "On-chain counter with the built-in Counter type. Deploys instantly.", "beginner"],
  ["Simple Voting", "One vote per wallet; why a witness that drives a public tally must be disclosed.", "beginner"],
  ["Bulletin Board", "One-slot board: post and take down with a ZK ownership proof.", "beginner"],
  ["Owned Contract", "Admin pattern with a transferable owner role.", "beginner"],
  ["Fungible Token", "Token balances in a Map keyed by ZswapCoinPublicKey.", "intermediate"],
  ["Name Registry", "Map names to owners: register, transfer, release.", "intermediate"],
  ["Player Profile", "Struct types and a Map of structs.", "intermediate"],
  ["Escrow", "State-machine escrow with an arbiter and role guards.", "intermediate"],
  ["ZK Commitment", "Commit-reveal: prove knowledge of a secret without revealing it.", "advanced"],
];

export default function DocsContent() {
  return (
    <>
      {/* ── Getting started ─────────────────────────────────────── */}

      <DocH2 id="introduction">Introduction</DocH2>
      <P>
        CompactLab is a browser IDE for <A href={LINKS.compactDocs}>Compact</A>, the smart-contract language of the
        Midnight Network. You write a contract in the editor, CompactLab compiles it on its servers, and you deploy
        and call it from your own <A href={LINKS.oneAm}>1AM</A> wallet on Midnight Preprod or Preview.
      </P>
      <P>
        The playground runs Compact compiler <Code>{TOOLCHAIN.compiler}</Code> (language{" "}
        <Code>{TOOLCHAIN.language}</Code>), following Midnight’s{" "}
        <A href={LINKS.supportMatrix}>support matrix</A>. It is free and{" "}
        <A href={SOURCE_URL}>open source</A>.
      </P>

      <DocH2 id="quick-start">Quick start</DocH2>
      <List ordered>
        <li>
          Open the <A href={PLAYGROUND_URL}>playground</A> and create a free account with email, or with Google or
          GitHub when offered.
        </li>
        <li>
          Create a project from the <Strong>Counter</Strong> template.
        </li>
        <li>
          Install <A href={LINKS.oneAm}>1AM</A>, switch it to Preprod and get test tokens from the{" "}
          <A href={LINKS.preprodFaucet}>Preprod faucet</A>.
        </li>
        <li>
          Click <Strong>Deploy</Strong> and approve in 1AM. Unedited Hello World and Counter projects deploy with
          bundled keys; anything else needs <Strong>Compile</Strong> first.
        </li>
        <li>
          In the Contract panel, call <Code>increment()</Code> and watch the <Code>round</Code> ledger value change.
        </li>
      </List>

      {/* ── The playground ──────────────────────────────────────── */}

      <DocH2 id="editor">Editor and projects</DocH2>
      <P>
        The editor is Monaco with Compact support: syntax highlighting, completions, hover types, lint and inline
        diagnostics. A project can hold several files and folders. Projects are saved to your account as you type,
        so you can continue on another device.
      </P>
      <P>
        If you lose your connection, changes are kept in the browser and synced when you’re back. To keep a
        local copy, use <Strong>Export project (.zip)</Strong>. The zip includes your sources, the deployment
        details and, when present, the compiled ZK files.
      </P>

      <DocH2 id="compile">Compile</DocH2>
      <P>
        <Strong>Compile</Strong> (<Code>⌘↵</Code>) sends the source to the CompactLab API, which runs the pinned
        compiler and produces the circuits and proving keys Deploy needs. The result shows the compiler version,
        the number of circuits and any warnings.
      </P>
      <P>
        <Strong>Typecheck only</Strong>, in the menu next to Compile, runs the compiler without generating proving
        keys. It is faster and good for catching errors, but it doesn’t prepare a Deploy.
      </P>
      <Callout type="info">
        Deploy is tied to the exact source you compiled. If you edit the contract after compiling, compile again
        before deploying.
      </Callout>

      <DocH2 id="contract-panel">Deploy and call</DocH2>
      <P>
        Deploy opens 1AM. If the constructor takes arguments, the playground asks for them first, with inputs that
        match their Compact types. Your wallet builds the proof, pays the fee and submits the transaction.
      </P>
      <P>
        After a deploy, the <Strong>Contract</Strong> panel lists each exported circuit with typed inputs. Calling a
        circuit opens 1AM again; when the transaction lands, the panel shows the new public ledger values. Use{" "}
        <Strong>Join another contract</Strong> to work with an address deployed earlier from the same contract.
      </P>
      <P>
        If your contract declares witnesses, the playground asks for values only for the witnesses that the
        constructor or circuit actually calls. Witness values are saved to your project by default; turn off{" "}
        <Strong>Sync witness values to the cloud</Strong> in Settings to keep them on your device only.
      </P>
      <Callout type="warning">
        CompactLab never deploys or calls a contract by itself. Every transaction needs your approval in 1AM.
      </Callout>

      <DocH2 id="privacy-view">Privacy view</DocH2>
      <P>
        The Privacy view marks each value in your contract as private, public, disclosed or hashed, so you can see
        where data crosses from private to public and where <Code>disclose()</Code> is needed. It is a guide built
        from the source, not a formal verifier: the compiler is the final word.
      </P>

      <DocH2 id="templates">Templates</DocH2>
      <P>
        Every template is compiled against the pinned compiler before a release. Hello World and Counter ship with
        prebuilt keys, so an unedited copy deploys without compiling. The Learn panel explains the concepts each one
        uses.
      </P>
      <div className="mb-6 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs text-text-muted">
            <tr>
              <th className="px-4 py-2.5 font-medium">Template</th>
              <th className="px-4 py-2.5 font-medium">What it shows</th>
              <th className="hidden px-4 py-2.5 font-medium sm:table-cell">Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {TEMPLATES.map(([name, about, level]) => (
              <tr key={name}>
                <td className="px-4 py-2.5 whitespace-nowrap text-text-primary">{name}</td>
                <td className="px-4 py-2.5 text-text-secondary">{about}</td>
                <td className="hidden px-4 py-2.5 text-text-muted capitalize sm:table-cell">{level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        There is also a <Strong>Blank Contract</Strong> with an inline guide.
      </P>

      {/* ── Wallet and networks ─────────────────────────────────── */}

      <DocH2 id="wallet">1AM wallet</DocH2>
      <P>
        Deploy and Call need the <A href={LINKS.oneAm}>1AM</A> browser wallet. Install it, unlock it, select the
        same network as the playground and approve the playground site when asked. Other Midnight wallets are not
        supported yet. You can write, compile and typecheck without a wallet.
      </P>

      <DocH2 id="networks">Networks and fees</DocH2>
      <List>
        <li>
          <Strong>Preprod</Strong> is the default. Get tNIGHT from the{" "}
          <A href={LINKS.preprodFaucet}>Preprod faucet</A>.
        </li>
        <li>
          <Strong>Preview</Strong> runs the same toolchain. Get tNIGHT from the{" "}
          <A href={LINKS.previewFaucet}>Preview faucet</A>.
        </li>
      </List>
      <P>
        Fees are paid in tDUST, which your wallet generates from tNIGHT. If your tDUST balance is 0, fund tNIGHT and
        wait a moment before you deploy. Contracts deployed on one network are not visible on the other.
      </P>

      <DocH2 id="reading-state">Reading ledger state</DocH2>
      <P>
        The playground reads public ledger values from the Midnight indexer. On Preprod it goes through CompactLab,
        which shares a daily quota between users. If that quota runs out, add your own free{" "}
        <A href={LINKS.blockfrost}>Blockfrost</A> key in Settings, or switch to Preview, which uses Midnight’s
        public indexer.
      </P>

      {/* ── Writing Compact ─────────────────────────────────────── */}

      <DocH2 id="contract-structure">Contract structure</DocH2>
      <P>
        A contract starts with a language pragma and the standard library import. It then declares ledger state
        (public, on-chain), optional witnesses, an optional constructor and the circuits people can call. This is
        the Hello World template:
      </P>
      <CodeBlock filename="contracts/hello-world.compact" ledger={["message"]}>
        {`pragma language_version >= ${TOOLCHAIN.language};

import CompactStandardLibrary;

// Public on-chain state, readable by anyone.
export ledger message: Opaque<"string">;

// Anyone can update the message. Writing a circuit
// parameter to the ledger requires disclose().
export circuit storeMessage(newMessage: Opaque<"string">): [] {
  message = disclose(newMessage);
}`}
      </CodeBlock>
      <P>
        Each exported circuit becomes a provable transition: callers prove they ran it correctly, and only the
        resulting public state changes are recorded.
      </P>

      <DocH2 id="witnesses">Witnesses and disclose()</DocH2>
      <P>
        A <Code>witness</Code> is private input that the caller supplies when building the proof. It never goes
        on-chain by itself. Anything derived from a witness or a circuit parameter must pass through{" "}
        <Code>disclose()</Code> before it can be written to the ledger or returned, and the compiler rejects code
        that forgets it. From the Bulletin Board template:
      </P>
      <CodeBlock filename="contracts/bulletin-board.compact" ledger={["state", "owner", "message", "sequence"]}>
        {`// The poster's secret key stays on their device.
witness localSecretKey(): Bytes<32>;

export circuit post(newMessage: Opaque<"string">): [] {
  assert(state == State.VACANT, "Board is occupied");
  // Only a hash of the secret becomes public.
  owner = disclose(boardPublicKey(localSecretKey(), sequence as Field as Bytes<32>));
  message = disclose(some<Opaque<"string">>(newMessage));
  state = State.OCCUPIED;
}`}
      </CodeBlock>
      <P>
        <Code>persistentHash</Code> gives the same result across compiler versions, so use it for anything you store
        and compare later, like owner keys. <Code>transientHash</Code> is cheaper but not guaranteed to stay stable
        across upgrades, so don’t use it to derive stored state.
      </P>

      <DocH2 id="types">Built-in types</DocH2>
      <div className="mb-6 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <tbody className="divide-y divide-border">
            {[
              ["Counter", "Ledger counter: .increment(n), .read()"],
              ["Uint<N>", "Unsigned integer of N bits, e.g. Uint<64>"],
              ["Field", "Element of the proof system's prime field"],
              ["Boolean", "true or false"],
              ["Bytes<N>", "Fixed-length byte array"],
              ['Opaque<"string">', "A string the contract stores but doesn't inspect"],
              ["Maybe<T>", "Optional value: some<T>(v) or none<T>()"],
              ["Vector<N, T>", "Fixed-length array of N values"],
              ["Map<K, V>, Set<T>", "Ledger collections"],
              ["ZswapCoinPublicKey", "A Midnight wallet public key"],
            ].map(([type, desc]) => (
              <tr key={type}>
                <td className="px-4 py-2.5 font-mono text-[13px] whitespace-nowrap text-[#E5B567]">{type}</td>
                <td className="px-4 py-2.5 text-text-secondary">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        For the full language, see the <A href={LINKS.compactDocs}>Compact reference</A>.
      </P>

      {/* ── Help ────────────────────────────────────────────────── */}

      <DocH2 id="limits">Limits</DocH2>
      <List>
        <li>Mainnet is not supported. Audit any contract independently before it handles real value.</li>
        <li>1AM is the only supported wallet.</li>
        <li>There is no local simulator yet: circuits run on-chain, on Preprod or Preview.</li>
        <li>Fees are paid from your own wallet. Sponsored fees are planned, not available.</li>
        <li>Compiling and reading Preprod state are rate-limited per account.</li>
      </List>

      <DocH2 id="faq">FAQ</DocH2>
      <DocH3>Does CompactLab see my private inputs?</DocH3>
      <P>
        Proofs are built by 1AM in your browser. Witness values are saved with your project unless you turn off
        cloud sync for them in Settings. Your contract source is sent to the API to compile.
      </P>
      <DocH3>Why does Deploy say I need to compile?</DocH3>
      <P>
        Deploy needs proving keys that match your current source. Run Compile (not Typecheck only) after your last
        edit. Unedited Hello World and Counter projects are the exception.
      </P>
      <DocH3>Where do I report a bug?</DocH3>
      <P>
        Open an issue on <A href={SOURCE_URL}>GitHub</A>.
      </P>
    </>
  );
}
