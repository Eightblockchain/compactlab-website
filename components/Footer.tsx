import Link from "next/link";

type FooterLink = { label: string; href: string; external?: true };
type FooterGroup = { title: string; links: FooterLink[] };

const footerLinks: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features",    href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      /**
       * /docs — Compact Lab usage documentation (internal):
       * editor shortcuts, simulation guide, wallet setup, deploy flow.
       */
      { label: "Docs",        href: "/docs" },
      /**
       * /changelog — Compact Lab version history (internal):
       * lists playground releases, new features, compiler version bumps.
       */
      { label: "Changelog",   href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Compact Language", href: "https://docs.midnight.network/compact",           external: true },
      { label: "Midnight Docs",    href: "https://docs.midnight.network",                   external: true },
      { label: "Templates",        href: "https://docs.midnight.network/getting-started",   external: true },
      { label: "Examples",         href: "https://github.com/midnightntwrk/midnight-awesome-dapps", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub",      href: "https://github.com/midnightntwrk",             external: true },
      { label: "Twitter / X", href: "https://x.com/MidnightNtwrk",                  external: true },
      { label: "Discord",     href: "https://discord.com/invite/midnightnetwork",    external: true },
      { label: "Blog",        href: "https://midnight.network/blog",                 external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "#E95144" }}
              >
                <span className="text-white font-black text-xs font-mono">CL</span>
              </div>
              <span className="font-semibold text-white tracking-tight text-sm">
                Compact<span style={{ color: "#E95144" }}>Lab</span>
              </span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-[22ch]">
              Browser-based IDE for the Midnight blockchain.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Midnight Compact Lab. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#E95144" }} />
              <span className="text-xs text-white/25">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
