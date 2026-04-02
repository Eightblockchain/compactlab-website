/**
 * Docs UI primitives
 * ------------------
 * Shared building blocks used inside app/docs/content.tsx.
 * Edit content.tsx to update text — only touch this file when
 * you need to change how components are styled.
 */

import React from "react";

/* ── Soon badge ─────────────────────────────────────────────── */

export function Soon() {
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded ml-2 align-middle"
      style={{ backgroundColor: "rgba(233,81,68,0.12)", color: "#E95144" }}
    >
      soon
    </span>
  );
}

/* ── Section anchors (offset for sticky header) ─────────────── */

export function SectionAnchor({ id }: { id: string }) {
  return <span id={id} className="-mt-24 pt-24 block" />;
}

/* ── Headings ───────────────────────────────────────────────── */

export function DocH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <>
      <SectionAnchor id={id} />
      <h2 className="text-xl font-semibold text-white mb-4 mt-14 first:mt-0 pb-3 border-b border-white/8">
        {children}
      </h2>
    </>
  );
}

export function DocH3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <>
      {id && <SectionAnchor id={id} />}
      <h3 className="text-base font-medium text-white/85 mt-8 mb-3">{children}</h3>
    </>
  );
}

/* ── Paragraph ──────────────────────────────────────────────── */

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-white/50 text-sm leading-relaxed mb-4">{children}</p>;
}

/* ── Inline code ────────────────────────────────────────────── */

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="font-mono text-xs px-1.5 py-0.5 rounded"
      style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#E95144" }}
    >
      {children}
    </code>
  );
}

/* ── Fenced code block ──────────────────────────────────────── */

export function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <div className="rounded-lg border border-white/8 overflow-hidden mb-6 text-xs font-mono">
      {filename && (
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/[0.03]">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#E95144", opacity: 0.7 }} />
          <span className="text-white/30 text-[11px]">{filename}</span>
        </div>
      )}
      <pre className="p-5 overflow-x-auto leading-relaxed text-white/55 bg-white/[0.02]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

/* ── Callout box ────────────────────────────────────────────── */

type CalloutType = "info" | "warning" | "tip";

const calloutConfig: Record<CalloutType, { border: string; bg: string; label: string; labelColor: string }> = {
  info:    { border: "border-white/10",       bg: "bg-white/[0.03]", label: "Note",    labelColor: "text-white/40"    },
  warning: { border: "border-[#E95144]/30",   bg: "bg-[#E95144]/5",  label: "Warning", labelColor: "text-[#E95144]"   },
  tip:     { border: "border-white/10",       bg: "bg-white/[0.03]", label: "Tip",     labelColor: "text-white/50"    },
};

export function CalloutBox({ type, children }: { type: CalloutType; children: React.ReactNode }) {
  const c = calloutConfig[type];
  return (
    <div className={`rounded-lg border ${c.border} ${c.bg} px-5 py-4 mb-6`}>
      <p className={`text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 ${c.labelColor}`}>
        {c.label}
      </p>
      <div className="text-white/50 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
