"use client";

import { useEffect, useState } from "react";
import { DOCS_NAV } from "@/app/docs/nav";
import { cn } from "@/components/site/ui";

const IDS = DOCS_NAV.flatMap((g) => g.items.map((i) => i.id));

export default function DocsSidebar() {
  const [active, setActive] = useState(IDS[0]);

  useEffect(() => {
    // The section whose heading last scrolled past the sticky header is active.
    const update = () => {
      const threshold = 96;
      let current = IDS[0];
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav aria-label="Docs">
      {DOCS_NAV.map((group) => (
        <div key={group.title} className="mb-6">
          <p className="mb-2 text-xs font-medium text-text-muted">{group.title}</p>
          <ul className="border-l border-border">
            {group.items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "-ml-px block border-l py-1 pl-3 text-[13px] transition-colors",
                      isActive
                        ? "border-accent text-text-primary"
                        : "border-transparent text-text-secondary hover:border-border-strong hover:text-text-primary",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
