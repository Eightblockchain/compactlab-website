"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useComingSoon, ComingSoonToast, TOASTS } from "./ComingSoon";

export default function CTA() {
  const { show, dismiss, toast } = useComingSoon();
  return (
    <section className="py-16 sm:py-28 lg:py-36 border-b border-white/6">
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
              Join developers already building privacy-preserving smart contracts
              on the Midnight blockchain. Free during early access.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end flex-shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => show(TOASTS.playground)}
                className="group inline-flex items-center gap-2.5 text-base font-semibold text-white px-8 py-4 rounded-sm transition-opacity duration-200 hover:opacity-90 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E95144] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ backgroundColor: "#E95144" }}
              >
                Launch Playground
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
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
      <ComingSoonToast toast={toast} onDismiss={dismiss} />
    </section>
  );
}
