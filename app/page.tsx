import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DevExperience from "@/components/DevExperience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://compactlab.dev";
const PLAYGROUND_URL = process.env.NEXT_PUBLIC_PLAYGROUND_URL ?? "https://playground.compactlab.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Compact Lab",
      description:
        "Browser-based IDE for writing Compact smart contracts on the Midnight blockchain.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE}/docs#{search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Compact Lab",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/cl-logo.png`,
        width: 3461,
        height: 648,
      },
      sameAs: [
        "https://github.com/midnightntwrk",
        "https://x.com/MidnightNtwrk",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/#app`,
      name: "Compact Lab Playground",
      url: PLAYGROUND_URL,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description:
        "A browser-based IDE for writing, simulating, and deploying Compact smart contracts on the Midnight blockchain.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DevExperience />
      <CTA />
      <Footer />
    </main>
  );
}
