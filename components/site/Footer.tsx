import Link from "next/link";
import { LINKS, PLAYGROUND_URL, SOURCE_URL } from "@/lib/site";
import { Logo } from "./Header";
import { Container } from "./ui";

type FooterLink = { label: string; href: string };

const GROUPS: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Product",
    links: [
      { label: "Playground", href: PLAYGROUND_URL },
      { label: "Docs", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "Source code", href: SOURCE_URL },
    ],
  },
  {
    title: "Midnight",
    links: [
      { label: "Compact language", href: LINKS.compactDocs },
      { label: "Midnight docs", href: LINKS.midnightDocs },
      { label: "Support matrix", href: LINKS.supportMatrix },
      { label: "Preprod faucet", href: LINKS.preprodFaucet },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Midnight on GitHub", href: LINKS.midnightGithub },
      { label: "Midnight Discord", href: LINKS.midnightDiscord },
      { label: "1AM wallet", href: LINKS.oneAm },
    ],
  },
];

function FooterAnchor({ label, href }: FooterLink) {
  const cls = "text-[13px] text-text-secondary transition-colors hover:text-text-primary";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[13px] leading-relaxed text-text-muted">
              A browser IDE for Compact, Midnight’s smart-contract language. Free and open source.
            </p>
          </div>
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-xs font-medium text-text-muted">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterAnchor {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CompactLab · MIT license · This project is built on the Midnight Network.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text-primary">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
