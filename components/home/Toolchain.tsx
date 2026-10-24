import { Container, reveal, SectionHeader, TEXT_LINK } from "@/components/site/ui";
import { LINKS, TOOLCHAIN } from "@/lib/site";

const SPECS = [
  ["Compact compiler", TOOLCHAIN.compiler],
  ["Language", TOOLCHAIN.language],
  ["Ledger", TOOLCHAIN.ledger],
  ["Midnight.js", TOOLCHAIN.midnightJs],
  ["Networks", "Preprod, Preview"],
  ["Wallet", "1AM"],
];

export default function Toolchain() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          title="Pinned to Midnight’s support matrix"
          description={
            <>
              Every template is compiled against these versions before a release, so what works here works with the
              rest of the Midnight stack. Mainnet is not supported. See the{" "}
              <a
                href={LINKS.supportMatrix}
                target="_blank"
                rel="noopener noreferrer"
                className={TEXT_LINK}
              >
                support matrix
              </a>
              .
            </>
          }
        />
        <dl {...reveal(80)} className="divide-y divide-border border-y border-border text-sm">
          {SPECS.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between py-3">
              <dt className="text-text-secondary">{label}</dt>
              <dd className="font-mono text-text-primary">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
