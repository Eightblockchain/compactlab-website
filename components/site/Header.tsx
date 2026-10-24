"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PLAYGROUND_URL, SOURCE_URL } from "@/lib/site";
import { Collapsible } from "./Collapsible";
import { ButtonLink, cn, Container, GithubIcon } from "./ui";

const NAV = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="CompactLab home" className={cn("inline-flex items-center rounded-sm", className)}>
      <Image src="/cl-logo.svg" alt="CompactLab" width={118} height={22} priority className="h-[22px] w-auto" />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent",
      )}
    >
      <Container className="flex h-14 items-center gap-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = !item.href.includes("#") && pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[13px] transition-colors",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text-primary sm:inline-flex"
            aria-label="CompactLab on GitHub"
            title="Source on GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <ButtonLink href={PLAYGROUND_URL} size="sm">
            Open playground
            <ArrowUpRight className="size-3.5" aria-hidden />
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-8 items-center justify-center rounded-md text-text-secondary hover:text-text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <div className="md:hidden">
        <Collapsible open={open} id="mobile-nav">
          <nav aria-label="Mobile" className="border-t border-border">
            <Container className="flex flex-col gap-1 py-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
              >
                <GithubIcon className="size-4" /> Source on GitHub
              </a>
            </Container>
          </nav>
        </Collapsible>
      </div>
    </header>
  );
}
