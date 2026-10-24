"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { DOCS_NAV } from "@/app/docs/nav";
import { Collapsible } from "@/components/site/Collapsible";
import { cn } from "@/components/site/ui";

/** "On this page" for screens without the docs sidebar. */
export default function DocsToc() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-10 rounded-lg border border-border bg-surface lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="docs-toc"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm text-text-primary"
      >
        On this page
        <ChevronDown
          aria-hidden
          className={cn("size-4 text-text-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <Collapsible open={open} id="docs-toc">
        <ul className="space-y-1 border-t border-border px-4 py-3">
          {DOCS_NAV.flatMap((g) => g.items).map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block py-0.5 text-sm text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Collapsible>
    </div>
  );
}
