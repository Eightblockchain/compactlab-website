import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Props that make an element fade up as it scrolls into view (see ScrollReveal). */
export function reveal(delayMs = 0): { "data-reveal": ""; style?: CSSProperties } {
  return delayMs
    ? { "data-reveal": "", style: { "--reveal-delay": `${delayMs}ms` } as CSSProperties }
    : { "data-reveal": "" };
}

/** Inline text link: underlined body text, no brand colour. */
export const TEXT_LINK =
  "text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-text-primary";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

const BUTTON = {
  primary:
    "bg-brand text-white hover:bg-[color-mix(in_srgb,var(--color-brand)_88%,white)]",
  secondary:
    "border border-border-strong bg-white/[0.03] text-text-primary hover:bg-white/[0.07] hover:border-white/20",
  ghost: "text-text-secondary hover:text-text-primary",
} as const;

const SIZE = {
  sm: "h-8 px-3 text-[13px] gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
} as const;

type ButtonLinkProps = Omit<ComponentProps<"a">, "className"> & {
  href: string;
  variant?: keyof typeof BUTTON;
  size?: keyof typeof SIZE;
  className?: string;
};

/** Internal paths use next/link; absolute URLs (the playground, GitHub) use a plain anchor. */
export function ButtonLink({ href, variant = "primary", size = "md", className, children, ...rest }: ButtonLinkProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors",
    BUTTON[variant],
    SIZE[size],
    className,
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

export function SectionHeader({
  title,
  description,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div {...reveal()} className={cn("max-w-2xl", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-balance text-text-primary sm:text-[28px] sm:leading-[1.2]">
        {title}
      </h2>
      {description && <p className="mt-3 text-[15px] leading-relaxed text-pretty text-text-secondary">{description}</p>}
    </div>
  );
}

/** Mark for things that are on the roadmap but not shipped. */
export function Planned() {
  return (
    <span className="ml-2 inline-flex items-center rounded border border-border-strong px-1.5 py-px align-middle font-mono text-[10px] font-medium text-text-muted">
      planned
    </span>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
