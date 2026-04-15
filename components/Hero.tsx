"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import DemoModal from "./DemoModal";
import { useComingSoon, ComingSoonToast, TOASTS } from "./ComingSoon";

type CLine = { type: string; content?: string; rest?: string };

const codeLines: CLine[] = [
  { type: "pragma",  content: "pragma language_version >= 0.20;" },
  { type: "blank" },
  { type: "import_", content: "import CompactStandardLibrary;" },
  { type: "blank" },
  { type: "enum_",   content: "export enum Status { OPEN, PAUSED }" },
  { type: "blank" },
  { type: "comment", content: "// public on-chain state" },
  { type: "ledger",  content: "export ledger count: ",  rest: " Counter;" },
  { type: "ledger",  content: "export ledger status:",  rest: " Status;" },
  { type: "ledger",  content: "export ledger owner:  ", rest: " Bytes<32>;" },
  { type: "blank" },
  { type: "comment", content: "// private witness — never revealed on-chain" },
  { type: "witness", content: "witness secretKey(): Bytes<32>;" },
  { type: "blank" },
  { type: "ctor",    content: "constructor",   rest: "() {" },
  { type: "code",    content: "  status = Status.OPEN;" },
  { type: "code",    content: "  owner  = disclose(persistentHash<Bytes<32>>(secretKey()));" },
  { type: "code",    content: "}" },
  { type: "blank" },
  { type: "fn",      content: "increment",     rest: "(): [] {" },
  { type: "code",    content: '  assert(status == Status.OPEN, "Counter is paused");' },
  { type: "code",    content: "  count.increment(1);" },
  { type: "code",    content: "}" },
  { type: "blank" },
  { type: "fn",      content: "pause",          rest: "(): [] {" },
  { type: "code",    content: "  assert(owner == persistentHash<Bytes<32>>(secretKey())," },
  { type: "str_",    content: '    "Only the owner can pause");' },
  { type: "code",    content: "  status = Status.PAUSED;" },
  { type: "code",    content: "}" },
];

function CodeLine({ line, index }: { line: CLine; index: number }) {
  const lineNumber = index + 1;

  const renderContent = () => {
    if (line.type === "blank") return <span>&nbsp;</span>;
    if (line.type === "comment")
      return <span className="text-white/25">{line.content}</span>;
    if (line.type === "pragma" || line.type === "import_")
      return <span className="text-white/40">{line.content}</span>;
    if (line.type === "enum_")
      return (
        <span>
          <span className="text-white/50">export enum </span>
          <span className="text-white/85">Status </span>
          <span className="text-white/40">{"{ "}</span>
          <span style={{ color: "#E95144" }}>OPEN</span>
          <span className="text-white/40">, </span>
          <span style={{ color: "#E95144" }}>PAUSED</span>
          <span className="text-white/40">{" }"}</span>
        </span>
      );
    if (line.type === "ledger")
      return (
        <span>
          <span className="text-white/50">{line.content}</span>
          <span style={{ color: "#E95144" }}>{line.rest}</span>
        </span>
      );
    if (line.type === "witness") {
      const after = (line.content ?? "").replace("witness ", "");
      return (
        <span>
          <span style={{ color: "#E95144" }}>witness </span>
          <span className="text-white/60">{after}</span>
        </span>
      );
    }
    if (line.type === "ctor")
      return (
        <span>
          <span className="text-white/80">{line.content}</span>
          <span className="text-white/50">{line.rest}</span>
        </span>
      );
    if (line.type === "fn")
      return (
        <span>
          <span className="text-white/50">export circuit </span>
          <span className="text-white font-semibold">{line.content}</span>
          <span className="text-white/50">{line.rest}</span>
        </span>
      );
    if (line.type === "str_")
      return <span className="text-white/45">{line.content}</span>;
    return <span className="text-white/65">{line.content}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 + index * 0.04, duration: 0.2 }}
      className="flex gap-4 hover:bg-white/[0.02] group px-4"
    >
      <span className="select-none text-white/20 group-hover:text-white/30 w-5 text-right shrink-0 transition-colors text-xs leading-6">
        {lineNumber}
      </span>
      <code className="font-mono text-xs sm:text-[13px] leading-6 whitespace-pre">
        {renderContent()}
      </code>
    </motion.div>
  );
}

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const { show, dismiss, toast } = useComingSoon();

  return (
    <>
    <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    <ComingSoonToast toast={toast} onDismiss={dismiss} />
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-16">
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Warm radial glow — accent colour, very subtle */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-10%",
          width: "60%",
          height: "70%",
          background: "radial-gradient(ellipse at center, rgba(233,81,68,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          right: "-5%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(ellipse at center, rgba(233,81,68,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Thin horizontal rule top */}
      <div className="absolute top-16 left-0 right-0 h-px bg-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#E95144" }}
              />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                Early Access
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
              className="text-4xl sm:text-5xl xl:text-7xl font-bold tracking-tighter text-white"
            >
              {[
                { words: ["Build ", "Midnight"],    accent: false },
                { words: ["Smart ", "Contracts"],   accent: false },
                { words: ["in ",    "Minutes."],     accent: true  },
              ].map((line, li) => (
                <div key={li} className="overflow-hidden leading-[1.08] sm:leading-[1.05]">
                  {line.words.map((word, wi) => (
                    <motion.span
                      key={`${li}-${wi}`}
                      variants={{
                        hidden:  { y: "110%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] } },
                      }}
                      className="inline-block"
                      style={line.accent ? { color: "#E95144" } : undefined}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/50 leading-relaxed max-w-md"
            >
              A browser-based playground for learning and building with Compact.
              Write, simulate, and deploy — no setup required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => show(TOASTS.playground)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-sm transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95144] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ backgroundColor: "#E95144" }}
              >
                Start Building
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => setDemoOpen(true)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/30 px-6 py-3 rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Play className="w-3.5 h-3.5" />
                View Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-5 sm:gap-8 pt-2 border-t border-white/8"
            >
              {[
                { value: "100%", label: "Browser-based" },
                { value: "0s", label: "Setup time" },
                { value: "ZK", label: "Privacy built-in" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5 pt-4">
                  <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — code editor mock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:animate-float"
          >
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/80">
              {/* Editor titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-white/8">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
                <span className="ml-3 text-xs text-white/30 font-mono">
                  PrivateCounter.compact
                </span>
                <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#E95144" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#E95144" }}>
                    Simulating
                  </span>
                </div>
              </div>

              {/* Code — clipped on mobile with fade, full on lg+ */}
              <div className="relative bg-[#080808] py-4 overflow-x-auto max-h-48 sm:max-h-64 lg:max-h-none overflow-y-hidden lg:overflow-y-visible">
                {/* Scan line — makes the editor feel alive */}
                <div
                  aria-hidden="true"
                  className="animate-scan pointer-events-none z-10"
                  style={{ background: "linear-gradient(90deg, transparent 0%, rgba(233,81,68,0.7) 50%, transparent 100%)" }}
                />
                {codeLines.map((line, i) => (
                  <CodeLine key={i} line={line} index={i} />
                ))}
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
              </div>

              {/* Output panel */}
              <div className="bg-[#060606] border-t border-white/8 px-4 py-3">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">Output</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="font-mono text-xs space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-white/50">
                    <span style={{ color: "#E95144" }}>✓</span> Compiled (2 circuits)
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="text-white/30">→</span> circuit <span className="text-white/80">increment</span> (k=10, rows=29)
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="text-white/30">→</span> circuit <span className="text-white/80">pause</span> (k=12, rows=41)
                  </div>
                  <div className="flex items-center gap-2 text-white/50">
                    <span style={{ color: "#E95144" }}>›</span> witness <span className="text-white/70">secretKey</span>: shielded ✓
                  </div>
                  <div className="text-white/25">Ready to deploy · Midnight Preprod</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
    </>
  );
}
