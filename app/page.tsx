import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DevExperience from "@/components/DevExperience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://compactlab.dev/#website",
      url: "https://compactlab.dev",
      name: "Compact Lab",
      description:
        "Browser-based IDE for writing Compact smart contracts on the Midnight blockchain.",
    },
    {
      "@type": "Organization",
      "@id": "https://compactlab.dev/#organization",
      name: "Compact Lab",
      url: "https://compactlab.dev",
      sameAs: [
        "https://github.com/midnightntwrk",
        "https://x.com/MidnightNtwrk",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://compactlab.dev/#app",
      name: "Compact Lab Playground",
      url: "https://playground.compactlab.dev",
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
