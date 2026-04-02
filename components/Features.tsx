"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Eye, Rocket, LayoutTemplate } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Smart Code Editor",
    description:
      "Browser IDE with syntax highlighting, auto-completion, and real-time error reporting — purpose-built for the Compact language.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Live Simulation",
    description:
      "Execute contract circuits instantly. See inputs, outputs, and witness generation without spinning up a local node.",
    highlight: false,
  },
  {
    icon: Eye,
    title: "Privacy Visualization",
    description:
      "Visually distinguish public and private data flows in your contracts. Understand exactly what is revealed on-chain.",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "One-click Deploy",
    description:
      "Deploy to the Midnight testnet or mainnet with a single click. Connect your wallet and ship without any CLI setup.",
    highlight: false,
  },
  {
    icon: LayoutTemplate,
    title: "Built-in Templates",
    description:
      "Start from battle-tested templates — tokens, voting systems, access control, and more. Go from zero to deployed in minutes.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight">
            Everything you need<br />
            to build with Compact.
          </h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`relative group p-6 sm:p-8 bg-black hover:bg-[#0a0a0a] transition-colors duration-200 cursor-default ${
                  feature.highlight ? "border-l-2" : ""
                }`}
                style={feature.highlight ? { borderLeftColor: "#E95144" } : {}}
              >
                {feature.highlight && (
                  <span
                    className="absolute top-8 right-8 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5"
                    style={{ color: "#E95144", backgroundColor: "rgba(233,81,68,0.08)", border: "1px solid rgba(233,81,68,0.2)" }}
                  >
                    Unique
                  </span>
                )}
                <div className="mb-5">
                  <Icon
                    className="w-5 h-5"
                    style={feature.highlight ? { color: "#E95144" } : { color: "rgba(255,255,255,0.4)" }}
                  />
                </div>
                <h3 className="font-semibold text-white text-base mb-2.5 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

          {/* Filler cell to complete the grid visually */}
          <div className="hidden lg:block p-6 sm:p-8 bg-black" />
        </motion.div>
      </div>
    </section>
  );
}
