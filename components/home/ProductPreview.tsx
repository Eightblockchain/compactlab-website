import { Check, ChevronDown, FileCode2, FileText, Folder, Play, Rocket } from "lucide-react";
import { CompactCode } from "@/components/site/CompactCode";
import { TOOLCHAIN } from "@/lib/site";

/** The playground's Counter template (compactlab/lib/constants.ts), minus its teaching comments. */
const COUNTER = `pragma language_version >= ${TOOLCHAIN.language};

import CompactStandardLibrary;

// On-chain counter using Midnight's built-in Counter type.
export ledger round: Counter;

constructor() {
  // Counter initialises to 0 automatically.
}

// Add 1 to the counter.
export circuit increment(): [] {
  round.increment(1);
}

// Add a custom amount passed as a circuit parameter.
export circuit incrementBy(amount: Uint<16>): [] {
  round.increment(disclose(amount));
}`;

/**
 * A faithful, static picture of the playground: the Counter template after a
 * full ZK compile, ready to deploy. It is illustrative, not interactive.
 */
export default function ProductPreview() {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg border border-border-strong bg-surface">
        {/* Top bar */}
        <div className="flex h-11 items-center gap-3 border-b border-border bg-surface-muted px-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
          </div>
          <span className="ml-2 text-xs font-medium text-text-primary">counter</span>
          <span className="hidden items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[10px] text-text-secondary sm:inline-flex">
            <span className="size-1.5 rounded-full bg-success" /> Preprod
            <ChevronDown className="size-3 text-text-muted" aria-hidden />
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="inline-flex h-6 items-center gap-1 rounded border border-border-strong px-2 text-[11px] text-text-secondary">
              <Play className="size-3" aria-hidden /> Compile
            </span>
            <span className="inline-flex h-6 items-center gap-1 rounded bg-accent px-2 text-[11px] font-medium text-white">
              <Rocket className="size-3" aria-hidden /> Deploy
            </span>
          </div>
        </div>

        <div className="grid min-h-[340px] grid-cols-1 md:grid-cols-[168px_1fr_248px]">
          {/* Files */}
          <div className="hidden border-r border-border bg-surface-muted/60 p-2 text-[11.5px] md:block">
            <p className="px-2 pt-1 pb-2 text-[10px] font-medium tracking-wider text-text-dim uppercase">Explorer</p>
            <div className="flex items-center gap-1.5 rounded px-2 py-1 text-text-secondary">
              <Folder className="size-3.5 text-text-muted" aria-hidden /> contracts
            </div>
            <div className="ml-3 flex items-center gap-1.5 rounded bg-white/[0.06] px-2 py-1 text-text-primary">
              <FileCode2 className="size-3.5 text-accent" aria-hidden /> counter.compact
            </div>
            <div className="flex items-center gap-1.5 rounded px-2 py-1 text-text-secondary">
              <FileText className="size-3.5 text-text-muted" aria-hidden /> README.md
            </div>
          </div>

          {/* Editor */}
          <div className="min-w-0 border-border md:border-r">
            <div className="flex h-8 items-end border-b border-border px-2">
              <span className="-mb-px rounded-t border border-b-0 border-border bg-surface px-3 py-1.5 text-[11px] text-text-primary">
                counter.compact
              </span>
            </div>
            <CompactCode code={COUNTER} ledger={["round"]} className="py-3 pr-4" />
          </div>

          {/* Contract panel */}
          <div className="hidden flex-col gap-3 p-3 text-[11.5px] md:flex">
            <p className="text-[10px] font-medium tracking-wider text-text-dim uppercase">Compile</p>
            <div className="flex items-start gap-2 rounded-md border border-success/20 bg-success/[0.06] p-2.5">
              <span className="mt-px flex size-4 shrink-0 items-center justify-center rounded bg-success/15">
                <Check className="size-3 text-success" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-success">Full Compact compile OK</p>
                <p className="mt-0.5 text-[10.5px] text-text-muted">compact {TOOLCHAIN.compiler}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md border border-border bg-surface-2/60 p-2">
                <p className="text-[10px] text-text-muted">Circuits</p>
                <p className="mt-0.5 font-mono text-sm text-text-primary">2</p>
              </div>
              <div className="rounded-md border border-border bg-surface-2/60 p-2">
                <p className="text-[10px] text-text-muted">Warnings</p>
                <p className="mt-0.5 font-mono text-sm text-text-primary">0</p>
              </div>
            </div>
            <p className="mt-1 text-[10px] font-medium tracking-wider text-text-dim uppercase">Circuits</p>
            {["increment()", "incrementBy(amount)"].map((c) => (
              <div key={c} className="flex items-center justify-between rounded-md border border-border px-2.5 py-1.5">
                <span className="font-mono text-[11px] text-text-primary">{c}</span>
                <span className="text-[10px] text-text-muted">after deploy</span>
              </div>
            ))}
            <div className="mt-auto rounded-md border border-border bg-surface-2/60 p-2.5 text-[10.5px] leading-relaxed text-text-secondary">
              Deploy opens <span className="text-text-primary">1AM</span>. Your wallet builds the proof and pays the fee.
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[13px] text-text-muted">
        The playground with the Counter template compiled and ready to deploy.
      </figcaption>
    </figure>
  );
}
