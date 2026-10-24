/**
 * Docs building blocks used by app/docs/content.tsx. Edit content.tsx to change
 * the text; only touch this file to change how the pieces look.
 */

import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { CompactCode } from "@/components/site/CompactCode";
import { cn, TEXT_LINK } from "@/components/site/ui";

export function DocH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 mb-4 border-b border-border pb-3 text-xl font-semibold tracking-tight text-text-primary first:mt-0"
    >
      {children}
    </h2>
  );
}

export function DocH3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="mt-8 mb-3 text-base font-medium text-text-primary">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[15px] leading-relaxed text-text-secondary">{children}</p>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-text-primary">{children}</strong>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = !href.startsWith("/") && !href.startsWith("#");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={TEXT_LINK}
    >
      {children}
    </a>
  );
}

export function List({ ordered, children }: { ordered?: boolean; children: ReactNode }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "mb-5 space-y-2 pl-5 text-[15px] leading-relaxed text-text-secondary marker:text-text-muted",
        ordered ? "list-decimal" : "list-disc",
      )}
    >
      {children}
    </Tag>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-text-primary">
      {children}
    </code>
  );
}

export function CodeBlock({ children, filename, ledger }: { children: string; filename?: string; ledger?: string[] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border border-border bg-surface-muted">
      {filename && (
        <div className="border-b border-border px-4 py-2 font-mono text-[11px] text-text-muted">{filename}</div>
      )}
      <CompactCode code={children} ledger={ledger} className="py-3 pr-4" />
    </div>
  );
}

const CALLOUT = {
  info: { icon: Info, label: "Note" },
  warning: { icon: TriangleAlert, label: "Important" },
  tip: { icon: Lightbulb, label: "Tip" },
} as const;

export function Callout({ type, children }: { type: keyof typeof CALLOUT; children: ReactNode }) {
  const c = CALLOUT[type];
  const Icon = c.icon;
  return (
    <div className="mb-6 flex gap-3 rounded-md border border-border bg-surface px-4 py-3.5">
      <Icon className="mt-0.5 size-4 shrink-0 text-text-muted" aria-label={c.label} />
      <div className="text-sm leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}
