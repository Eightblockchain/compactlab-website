import { ButtonLink, Container } from "@/components/site/ui";

export default function NotFound() {
  return (
    <main id="main-content">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-sm text-text-muted">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary">Page not found</h1>
        <p className="mt-3 max-w-sm text-[15px] text-text-secondary">
          This page doesn’t exist or has moved. Try the docs, or head back home.
        </p>
        <div className="mt-8 flex gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/docs" variant="secondary">
            Read the docs
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
