import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink, Container, reveal } from "@/components/site/ui";
import { PLAYGROUND_URL, SOURCE_URL, TOOLCHAIN } from "@/lib/site";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="pt-16 pb-16 sm:pt-24 sm:pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1
            {...reveal()}
            className="text-[38px] leading-[1.08] font-semibold tracking-[-0.03em] text-balance text-text-primary sm:text-[54px]"
          >
            Write, compile and deploy Compact contracts from your browser.
          </h1>
          <p
            {...reveal(80)}
            className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-balance text-text-secondary"
          >
            CompactLab is a free IDE for Midnight. It compiles your contract on our servers; you deploy and call it
            from your own 1AM wallet. There is nothing to install.
          </p>
          <div {...reveal(160)} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <ButtonLink href={PLAYGROUND_URL}>
              Open the playground
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <Link
              href="/docs"
              className="text-sm text-text-secondary underline-offset-4 transition-colors hover:text-text-primary hover:underline"
            >
              Read the docs
            </Link>
          </div>
          <p {...reveal(220)} className="mt-8 text-[13px] text-balance text-text-muted">
            Compact {TOOLCHAIN.compiler} · Midnight Preprod and Preview ·{" "}
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap underline-offset-4 transition-colors hover:text-text-secondary hover:underline"
            >
              MIT licensed
            </a>
          </p>
        </div>

        <div {...reveal(300)} className="mt-14 sm:mt-16">
          <ProductPreview />
        </div>
      </Container>
    </section>
  );
}
