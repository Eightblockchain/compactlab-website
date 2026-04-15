"use client";

import { useState, useEffect } from "react";

type NavItem = { label: string; href: string; soon?: true };
type NavGroup = { title: string; items: NavItem[] };

const nav: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Introduction",       href: "#introduction" },
      { label: "What is Compact?",   href: "#what-is-compact" },
      { label: "Quick Start",        href: "#quick-start" },
    ],
  },
  {
    title: "The Editor",
    items: [
      { label: "Interface Overview", href: "#interface-overview" },
      { label: "Keyboard Shortcuts", href: "#keyboard-shortcuts", soon: true },
      { label: "File Management",    href: "#file-management", soon: true },
    ],
  },
  {
    title: "Writing Compact",
    items: [
      { label: "Contract Structure",     href: "#contract-structure" },
      { label: "Ledger State",           href: "#ledger-state" },
      { label: "Circuits",               href: "#circuits" },
      { label: "Witnesses & Privacy",    href: "#witnesses" },
      { label: "The disclose() Pattern", href: "#disclose" },
      { label: "Built-in Types",         href: "#builtin-types" },
    ],
  },
  {
    title: "Simulation",
    items: [
      { label: "Running Locally",  href: "#simulation",    soon: true },
      { label: "Circuit Output",   href: "#circuit-output", soon: true },
    ],
  },
  {
    title: "Privacy Inspector",
    items: [
      { label: "Visualizing ZK Proofs", href: "#privacy-inspector", soon: true },
    ],
  },
  {
    title: "Deploying",
    items: [
      { label: "Testnet", href: "#testnet", soon: true },
      { label: "Mainnet", href: "#mainnet", soon: true },
    ],
  },
  {
    title: "Templates",
    items: [
      { label: "Using Templates",     href: "#using-templates" },
      { label: "Available Templates", href: "#available-templates" },
    ],
  },
  {
    title: "Wallet Setup",
    items: [
      { label: "Connecting a Wallet", href: "#wallet-setup", soon: true },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function DocsSidebar() {
  const [active, setActive] = useState<string>("introduction");

  // Track active section via scroll position
  useEffect(() => {
    const ids = nav.flatMap((g) => g.items.map((i) => i.href.slice(1)));
    const HEADER_H = 56 + 24; // sticky header 56px + small visual buffer

    const update = () => {
      const threshold = window.scrollY + HEADER_H;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= threshold) {
          current = id;
        }
      }

      setActive(current ?? "");
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // run once on mount
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav>
      {nav.map((group) => (
        <div key={group.title} className="mb-7">
          <p className="text-[10px] font-mono font-semibold text-white/20 uppercase tracking-widest mb-3">
            {group.title}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setActive(id)}
                    className={[
                      "flex items-center text-sm py-1 rounded transition-colors",
                      isActive
                        ? "font-medium"
                        : "text-white/40 hover:text-white/80",
                    ].join(" ")}
                    style={isActive ? { color: "#E95144" } : undefined}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <span
                        className="mr-2 w-0.5 h-4 rounded-full shrink-0"
                        style={{ backgroundColor: "#E95144" }}
                      />
                    )}
                    {item.label}
                    {item.soon && (
                      <span
                        className="ml-1.5 text-[9px] font-mono font-semibold px-1 py-0.5 rounded"
                        style={{
                          backgroundColor: "rgba(233,81,68,0.1)",
                          color: "#E95144",
                        }}
                      >
                        soon
                      </span>
                    )}
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
