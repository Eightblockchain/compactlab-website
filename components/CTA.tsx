"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PLAYGROUND =
  process.env.NEXT_PUBLIC_PLAYGROUND_URL || "http://localhost:3001";

export default function CTA() {
  return (
    <section className="py-16 sm:py-28 lg:py-36 border-b border-white/6 relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(233,81,68,1) 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 sm:gap-10 border-t border-white/8 pt-10 sm:pt-16"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
              Start building on<br />
              Midnight <span style={{ color: "#E95144" }}>today.</span>
            </h2>
            <p className="mt-5 text-white/45 text-lg leading-relaxed max-w-md">
              Create a free CompactLab account, then Instant Deploy on Preprod with 1AM.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end flex-shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`${PLAYGROUND}/signup`}
                className="group inline-flex items-center gap-2.5 text-base font-semibold text-white px-8 py-4 rounded-sm transition-opacity duration-200 hover:opacity-90 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95144] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ backgroundColor: "#E95144" }}
              >
                Launch Playground
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
            <Link
              href="/docs"
              className="text-sm text-white/40 hover:text-white/70 transition-colors text-center"
            >
              Read the docs →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
