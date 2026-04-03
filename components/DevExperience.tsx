"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Clock3, Package } from "lucide-react";
import Link from "next/link";

const codeSnippet = `pragma language_version >= 0.20;

import CompactStandardLibrary;

export enum State { VACANT, OCCUPIED }

export ledger state:    State;
export ledger owner:    Bytes<32>;
export ledger sequence: Counter;

// private — never revealed on-chain
witness localKey(): Bytes<32>;

constructor() {
  state = State.VACANT;
  sequence.increment(1);
}

export circuit post(): [] {
  assert(state == State.VACANT, "Board is occupied");
  owner = disclose(persistentHash<Bytes<32>>(localKey()));
  state = State.OCCUPIED;
  sequence.increment(1);
}

export circuit takeDown(): [] {
  assert(state == State.OCCUPIED, "Board is empty");
  assert(
    owner == persistentHash<Bytes<32>>(localKey()),
    "Not the board owner"
  );
  state = State.VACANT;
}`;

const highlights = [
  { label: "No local setup", sublabel: "Runs entirely in your browser", icon: Globe },
  { label: "Instant feedback", sublabel: "Simulate circuits in milliseconds", icon: Clock3 },
  { label: "Zero boilerplate", sublabel: "Write contracts, not config files", icon: Package },
];

function CodeToken({ text, type }: { text: string; type: string }) {
  const colorMap: Record<string, string> = {
    keyword: "text-white/60",
    type:    "text-white/80",
    fn:      "text-white font-medium",
    number:  "text-white/50",
    plain:   "text-white/60",
    comment: "text-white/25",
  };
  return <span className={colorMap[type] ?? "text-white/60"}>{text}</span>;
}

function SyntaxLine({ line, lineNum }: { line: string; lineNum: number }) {
  const renderLine = (text: string) => {
    if (text.trim().startsWith("//")) {
      return <CodeToken text={text} type="comment" />;
    }

    const keywords = ["pragma", "import", "export", "ledger", "circuit", "witness", "constructor", "return", "assert", "const", "enum", "disclose", "persistentHash", "none", "some"];
    const parts: React.ReactNode[] = [];
    const segments: { start: number; end: number; type: string; value: string }[] = [];

    let match;
    const kw = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
    while ((match = kw.exec(text)) !== null) {
      segments.push({ start: match.index, end: match.index + match[0].length, type: "keyword", value: match[0] });
    }

    const typePattern = /\b(Bytes|Uint|Counter|State|Maybe|Opaque|Set|Map|Field|Boolean|Vector|ZswapCoinPublicKey)\b/g;
    while ((match = typePattern.exec(text)) !== null) {
      segments.push({ start: match.index, end: match.index + match[0].length, type: "type", value: match[0] });
    }

    const numPattern = /\b\d+\b/g;
    while ((match = numPattern.exec(text)) !== null) {
      segments.push({ start: match.index, end: match.index + match[0].length, type: "number", value: match[0] });
    }

    segments.sort((a, b) => a.start - b.start);

    const filtered: typeof segments = [];
    let cursor = 0;
    for (const seg of segments) {
      if (seg.start >= cursor) {
        filtered.push(seg);
        cursor = seg.end;
      }
    }

    let pos = 0;
    for (const seg of filtered) {
      if (pos < seg.start) {
        parts.push(<CodeToken key={`p-${pos}`} text={text.slice(pos, seg.start)} type="plain" />);
      }
      parts.push(<CodeToken key={`s-${seg.start}`} text={seg.value} type={seg.type} />);
      pos = seg.end;
    }
    if (pos < text.length) {
      parts.push(<CodeToken key={`end-${pos}`} text={text.slice(pos)} type="plain" />);
    }

    return <>{parts}</>;
  };

  return (
    <div className="flex gap-4 hover:bg-white/[0.02] group px-4">
      <span className="select-none text-white/20 group-hover:text-white/30 w-5 text-right shrink-0 transition-colors text-xs leading-6">
        {lineNum}
      </span>
      <code className="font-mono text-xs sm:text-[13px] leading-6 whitespace-pre">
        {renderLine(line)}
      </code>
    </div>
  );
}

export default function DevExperience() {
  const lines = codeSnippet.split("\n");

  return (
    <section id="dev-experience" className="py-24 sm:py-32 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10 lg:sticky lg:top-24"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                Developer Experience
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight mb-5">
                Built for developers<br />
                who value their time.
              </h2>
              <p className="text-white/45 text-lg leading-relaxed">
                No Docker. No config files. No dependency hell. Open your browser,
                write your contract, and you&apos;re building on Midnight.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 border border-white/8 hover:border-white/15 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 border border-white/10 flex items-center justify-center">
                      <Icon className="w-[18px] h-[18px] text-white/40 group-hover:text-white/70 transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{item.label}</div>
                      <div className="text-xs text-white/35 mt-0.5">{item.sublabel}</div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: "#E95144" }} />
                  </motion.div>
                );
              })}
            </div>

            <a
              href="https://docs.midnight.network/compact"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read the Compact docs (opens in new tab)"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            >
              Read the Compact docs
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right — code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="ml-2 text-xs text-white/30 font-mono">
                  BulletinBoard.compact
                </span>
                <span className="ml-auto text-[10px] font-medium" style={{ color: "#E95144" }}>
                  ● Compact
                </span>
              </div>

              {/* Code — clipped on mobile */}
              <div className="relative bg-[#080808] py-4 overflow-x-auto max-h-56 sm:max-h-72 lg:max-h-none">
                {lines.map((line, i) => (
                  <SyntaxLine key={i} line={line} lineNum={i + 1} />
                ))}
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
              </div>

              {/* Status bar */}
              <div className="bg-[#060606] border-t border-white/8 px-4 py-2.5">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E95144" }} />
                    <span className="text-[11px] text-white/40 font-mono">Compiled</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="text-[11px] text-white/40 font-mono">circuits: post, takeDown</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                    <span className="text-[11px] text-white/40 font-mono">ZK proofs ready</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
