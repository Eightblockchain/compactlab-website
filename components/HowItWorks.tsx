"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, FlaskConical, CloudUpload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Start with a template",
    description:
      "Pick from a library of production-ready Compact templates — tokens, governance, access control, private voting. Or start from scratch.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Edit and simulate",
    description:
      "Write your logic in the browser editor and run live simulations. Inspect public vs. private data, test edge cases, and iterate instantly — ZK proofs included.",
  },
  {
    number: "03",
    icon: CloudUpload,
    title: "Deploy and interact",
    description:
      "Connect your Midnight wallet, choose a network, and deploy with one click. Call your contract methods directly from the playground interface.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight">
            From idea to deployed<br />
            contract in three steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-white/8 hidden sm:block" style={{ left: "2.25rem" }} />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative flex gap-6 sm:gap-8 sm:gap-12 pb-10 sm:pb-16 last:pb-0"
                >
                  {/* Step indicator */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-12 h-12 sm:w-[72px] sm:h-[72px] rounded-sm border border-white/10 flex items-center justify-center bg-[#080808] group-hover:border-white/20 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-4 flex-1 pb-8 border-b border-white/5 last:border-0">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="text-xs font-mono font-bold uppercase tracking-widest"
                        style={{ color: "#E95144" }}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/45 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
