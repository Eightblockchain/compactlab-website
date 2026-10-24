import CallToAction from "@/components/home/CallToAction";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Toolchain from "@/components/home/Toolchain";
import { BASE_URL as BASE, PLAYGROUND_URL, SOURCE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "CompactLab",
      description: "Browser IDE for writing, compiling and deploying Compact smart contracts on Midnight.",
    },
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "CompactLab",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/cl-icon.png`, width: 654, height: 648 },
      sameAs: [SOURCE_URL],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}/#app`,
      name: "CompactLab Playground",
      url: PLAYGROUND_URL,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description:
        "A browser IDE for writing, compiling and deploying Compact smart contracts on Midnight Preprod and Preview.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Features />
      <HowItWorks />
      <Toolchain />
      <Faq />
      <CallToAction />
    </main>
  );
}
