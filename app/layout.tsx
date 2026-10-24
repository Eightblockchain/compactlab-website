import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import ScrollReveal from "@/components/site/ScrollReveal";
import { REVEAL_BOOTSTRAP } from "@/lib/reveal";
import { BASE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "CompactLab · Browser IDE for Midnight smart contracts";
const DESCRIPTION =
  "Write, compile and deploy Compact smart contracts on Midnight Preprod and Preview from your browser. Free and open source. Your 1AM wallet signs every transaction.";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: TITLE, template: "%s · CompactLab" },
  description: DESCRIPTION,
  keywords: [
    "Midnight", "Compact", "CompactLab", "smart contracts", "zero-knowledge", "ZK proofs",
    "playground", "IDE", "Preprod", "1AM wallet",
  ],
  applicationName: "CompactLab",
  category: "developer tools",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "CompactLab",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CompactLab: a browser IDE for Midnight smart contracts" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOTSTRAP }} />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-text-primary" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
