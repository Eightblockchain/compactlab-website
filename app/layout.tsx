import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://compactlab.dev";

/* ── Viewport (separate from metadata per Next.js 14+ spec) ────── */
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

/* ── Site-wide metadata (all pages inherit via template) ─────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Compact Lab — Browser IDE for Midnight Smart Contracts",
    template: "%s | Compact Lab",
  },
  description:
    "Write, simulate, and deploy Compact smart contracts on the Midnight blockchain — entirely in your browser. No setup, no installation required.",
  keywords: [
    "Midnight", "Compact", "CompactLab", "blockchain", "smart contracts",
    "Web3", "playground", "IDE", "zero-knowledge", "ZK proofs", "privacy",
    "DApp", "compactlab.dev",
  ],
  authors: [{ name: "Compact Lab", url: BASE_URL }],
  creator: "Compact Lab",
  publisher: "Compact Lab",
  applicationName: "Compact Lab",
  category: "developer tools",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Compact Lab",
    title: "Compact Lab — Browser IDE for Midnight Smart Contracts",
    description:
      "Write, simulate, and deploy Compact smart contracts on the Midnight blockchain — entirely in your browser. No setup required.",
    locale: "en_US",
    images: [
      {
        url: "/cl-icon.png",
        width: 654,
        height: 648,
        alt: "Compact Lab logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@CompactLab",
    creator: "@CompactLab",
    title: "Compact Lab — Browser IDE for Midnight Smart Contracts",
    description:
      "Write, simulate, and deploy Compact smart contracts on the Midnight blockchain — entirely in your browser.",
    images: ["/cl-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>
        {/* Skip-to-content for screen readers and keyboard-only users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:rounded-sm focus:outline-none"
          style={{ backgroundColor: "#E95144" }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}


