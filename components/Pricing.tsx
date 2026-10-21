"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const PLAYGROUND =
  process.env.NEXT_PUBLIC_PLAYGROUND_URL || "http://localhost:3001";

type Plan = {
  slug: string;
  name: string;
  description: string;
  priceMonthlyCents: number;
  features: string[];
  highlighted?: boolean;
};

const COMMUNITY_FALLBACK: Plan = {
  slug: "free",
  name: "Community",
  description:
    "Free playground for the Midnight community. Compile, Deploy, and Call on Preprod with 1AM.",
  priceMonthlyCents: 0,
  features: [
    "Playground access",
    "Server Compile (ZK)",
    "Deploy & Call on Preprod",
    "Instant Deploy (Hello & Counter)",
    "Project export",
  ],
};

export default function Pricing() {
  const [plan, setPlan] = useState<Plan>(COMMUNITY_FALLBACK);

  useEffect(() => {
    void fetch(`${API}/v1/billing/plans`)
      .then(async (r) => {
        if (!r.ok) throw new Error("Failed to load plans");
        return r.json() as Promise<{ plans: Plan[] }>;
      })
      .then((data) => {
        const community =
          data.plans.find((p) => p.slug === "free" || p.priceMonthlyCents === 0) ??
          COMMUNITY_FALLBACK;
        setPlan(community);
      })
      .catch(() => {
        setPlan(COMMUNITY_FALLBACK);
      });
  }, []);

  return (
    <section id="pricing" className="py-16 sm:py-24 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
          Access
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter mb-4">
          Free for the Midnight community
        </h2>
        <p className="text-white/45 text-lg max-w-2xl mb-10">
          CompactLab is free to use. Create an account, connect 1AM on Preprod, compile Compact,
          and deploy. Network fees come from your own tDUST.
        </p>
        <div className="grid md:grid-cols-1 gap-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="text-white/45 mt-2 min-h-[48px]">{plan.description}</p>
            <p className="text-3xl font-bold text-white mt-6 mb-4">Free</p>
            <ul className="space-y-2 text-white/60 text-sm mb-8">
              {plan.features.map((f) => (
                <li key={f}>· {f}</li>
              ))}
            </ul>
            <a
              href={`${PLAYGROUND}/signup`}
              className="inline-flex text-sm font-semibold text-white px-5 py-3 rounded-sm"
              style={{ backgroundColor: "#E95144" }}
            >
              Open the playground
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
