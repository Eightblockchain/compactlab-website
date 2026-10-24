import Link from "next/link";
import type { ReactNode } from "react";
import { Container, reveal, TEXT_LINK } from "./ui";

/** Who operates the service, as named in the Terms and Privacy Policy. */
export const OPERATOR = "CompactLab";

export function LegalPage({
  title,
  effective,
  intro,
  other,
  children,
}: {
  title: string;
  effective: string;
  intro: ReactNode;
  other: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <main id="main-content">
      <Container className="max-w-3xl py-14 sm:py-20">
        <h1 {...reveal()} className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-text-muted">Effective {effective}</p>
        <div className="mt-8 text-[15px] leading-relaxed text-text-secondary">{intro}</div>
        <div className="mt-10 space-y-10">{children}</div>
        <div className="mt-14 border-t border-border pt-6 text-sm">
          <Link href={other.href} className={TEXT_LINK}>
            {other.label} →
          </Link>
        </div>
      </Container>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-base font-medium text-text-primary">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-text-secondary [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-text-primary [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function Mail({ to }: { to: string }) {
  return (
    <a href={`mailto:${to}`} className={TEXT_LINK}>
      {to}
    </a>
  );
}
