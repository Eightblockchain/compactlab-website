import { ArrowRight } from "lucide-react";
import { ButtonLink, Container, reveal } from "@/components/site/ui";
import { PLAYGROUND_URL } from "@/lib/site";

export default function CallToAction() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div {...reveal()}>
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-[28px]">
            Try it with the Counter template.
          </h2>
          <p className="mt-2 text-[15px] text-text-secondary">It takes a few minutes to have it running on Preprod.</p>
        </div>
        <div {...reveal(80)}>
          <ButtonLink href={PLAYGROUND_URL}>
            Open the playground
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
