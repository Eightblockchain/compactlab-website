"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* 404 */}
        <div className="mb-6 font-mono text-[120px] sm:text-[160px] font-black leading-none select-none"
          style={{ color: "#E95144", opacity: 0.15 }}
        >
          404
        </div>

        {/* Mock terminal error */}
        <div className="w-full mb-10 rounded-lg border border-white/8 bg-white/[0.03] overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="ml-2 text-white/20 text-xs">compact-lab — not-found</span>
          </div>
          <div className="px-5 py-4 space-y-1 text-left">
            <p>
              <span style={{ color: "#E95144" }}>error</span>
              <span className="text-white/30">: route not found</span>
            </p>
            <p className="text-white/20">
              <span className="text-white/40">{"  "}at</span> CompactLab.resolve
            </p>
            <p className="text-white/20">
              <span className="text-white/40">{"  "}→</span> the page you&apos;re looking for doesn&apos;t exist
            </p>
            <p className="text-white/20 flex items-center gap-2 pt-1">
              <span className="inline-block w-2 h-3.5 align-middle animate-pulse" style={{ backgroundColor: "#E95144" }} />
            </p>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-10">
          This route doesn&apos;t exist in Compact Lab yet.
          Head back and keep building.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#E95144" }}
          >
            Go home
          </Link>
          <Link
            href="/#features"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white/60 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
          >
            See features
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
