import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Compact Lab.",
  alternates: { canonical: "https://compactlab.dev/terms" },
  openGraph: {
    title: "Terms of Service | Compact Lab",
    description: "The terms and conditions governing your use of Compact Lab.",
    url: "https://compactlab.dev/terms",
  },
  robots: { index: false, follow: false },
};

const EFFECTIVE_DATE = "April 2, 2026";
const CONTACT_EMAIL = "legal@compactlab.dev";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/8">
        {title}
      </h2>
      <div className="space-y-4 text-white/55 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfService() {
  return (
    <div id="main-content" className="min-h-screen bg-black">
      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/60 transition-colors mb-14 font-mono"
        >
          <span>←</span>
          <span>Back to Compact Lab</span>
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div
            className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded mb-5"
            style={{ backgroundColor: "#E95144", color: "#fff" }}
          >
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-white/30 font-mono">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        {/* Intro */}
        <p className="text-white/55 text-sm leading-relaxed mb-12">
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using the
          Midnight Compact Lab web application (&quot;the Lab&quot;, &quot;the Service&quot;) operated by
          Midnight Compact Lab (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using the
          Service, you agree to be bound by these Terms. If you do not agree, do not
          use the Service.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Lab in any manner, including visiting or browsing
            the site, you affirm that you are at least 16 years of age and are fully
            able and competent to enter into, abide by, and comply with these Terms.
            These Terms constitute a binding agreement between you and Midnight Compact
            Lab.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of
            the Service after changes are posted constitutes your acceptance of the
            revised Terms. We will always update the effective date above when changes
            are made.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            Midnight Compact Lab is a browser-based integrated development environment
            (IDE) for writing, simulating, and deploying smart contracts written in
            Compact — the zero-knowledge smart contract language of the Midnight
            blockchain. The Service includes:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>A code editor with Compact language syntax support.</li>
            <li>A local simulation environment for testing contract logic.</li>
            <li>A privacy visualization layer for ZK proof inspection.</li>
            <li>Integration tooling for deployment to Midnight Testnet and Mainnet.</li>
            <li>Starter templates and example contracts.</li>
          </ul>
          <p>
            The Service is provided &quot;as-is&quot; and is subject to change, interruption, or
            discontinuation at any time without prior notice.
          </p>
        </Section>

        <Section title="3. User Accounts and Access">
          <p>
            Access to certain features may require you to register for an account. You
            agree to provide accurate, current, and complete information and to keep
            your account credentials secure. You are solely responsible for all
            activity that occurs under your account. Notify us immediately if you
            suspect unauthorized access.
          </p>
          <p>
            We reserve the right to suspend or terminate your access at our sole
            discretion, with or without notice, for conduct we determine violates these
            Terms or is harmful to other users, us, or third parties.
          </p>
        </Section>

        <Section title="4. Acceptable Use">
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>
              Develop, deploy, or distribute malicious contracts designed to defraud,
              exploit, or harm other users or third parties.
            </li>
            <li>
              Attempt to gain unauthorized access to any systems, networks, or accounts.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any portion of the Service or
              its underlying infrastructure.
            </li>
            <li>
              Scrape, crawl, or systematically extract data from the Service without
              written permission.
            </li>
            <li>
              Violate any applicable local, national, or international law or
              regulation, including export control laws.
            </li>
            <li>
              Use the Service in a way that could disable, overburden, or impair it, or
              interfere with any other user&apos;s access.
            </li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            <strong className="text-white/80">Our content.</strong> All software, code,
            design, text, graphics, logos, and other materials comprising the Service
            are owned by or licensed to Midnight Compact Lab and are protected by
            applicable intellectual property laws. You may not reproduce, distribute,
            or create derivative works from our content without express written
            permission.
          </p>
          <p>
            <strong className="text-white/80">Your content.</strong> You retain full
            ownership of any smart contract code, scripts, or other content you create
            using the Service. By using the Service, you grant us a limited,
            non-exclusive, royalty-free license to process and display your content
            solely as necessary to operate the Service. We do not claim ownership of
            your code.
          </p>
          <p>
            <strong className="text-white/80">Open-source components.</strong> The
            Service may incorporate open-source libraries. Their respective licenses
            apply and take precedence over these Terms for those specific components.
          </p>
        </Section>

        <Section title="6. Blockchain and Financial Risk">
          <p>
            The Lab facilitates deployment to public blockchains, including Midnight
            Testnet and Mainnet. You acknowledge and accept that:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>
              Blockchain transactions are irreversible. Deployed contracts cannot be
              &quot;undone.&quot;
            </li>
            <li>
              Smart contract bugs may result in permanent loss of funds or assets.
            </li>
            <li>
              You are solely responsible for auditing your own code before any Mainnet
              deployment.
            </li>
            <li>
              Midnight Compact Lab is not a financial service and does not provide
              investment, legal, or financial advice.
            </li>
          </ul>
          <p>
            We strongly recommend thorough testing on Testnet and independent security
            audits before deploying contracts that handle real value.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            ACCURACY, OR NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted, error-free, or
            free of harmful components. We do not warrant the correctness, accuracy, or
            reliability of any compiler output, simulation result, or deployment outcome
            produced by the Service.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MIDNIGHT COMPACT LAB
            AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS
            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR ASSETS
            — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
            SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU EXCEED ONE HUNDRED
            US DOLLARS (US $100), OR THE AMOUNT YOU PAID US IN THE PRECEDING TWELVE
            MONTHS, WHICHEVER IS GREATER.
          </p>
        </Section>

        <Section title="9. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless Midnight Compact Lab and
            its affiliates, officers, directors, employees, and agents from and against
            any claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable legal fees) arising out of or
            relating to your violation of these Terms or your use of the Service,
            including any contracts you deploy on-chain.
          </p>
        </Section>

        <Section title="10. Privacy">
          <p>
            Your use of the Service is also governed by our{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-white/80 transition-colors"
              style={{ color: "#E95144" }}
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. Please review the
            Privacy Policy to understand our data practices.
          </p>
        </Section>

        <Section title="11. Third-Party Services">
          <p>
            The Service may include links to or integrations with third-party websites
            or services (including Midnight Network, GitHub, and wallet providers). We
            are not responsible for the content, policies, or practices of any
            third-party service. Your use of third-party services is at your own risk
            and subject to their terms and privacy policies.
          </p>
        </Section>

        <Section title="12. Governing Law and Dispute Resolution">
          <p>
            These Terms are governed by and construed in accordance with applicable
            law, without regard to conflict of law principles. Any disputes arising
            from or related to these Terms or the Service shall first be attempted to
            be resolved through good-faith negotiation. If negotiation fails, disputes
            shall be submitted to binding arbitration or, where arbitration is not
            enforceable, to the courts of competent jurisdiction.
          </p>
        </Section>

        <Section title="13. Severability and Entire Agreement">
          <p>
            If any provision of these Terms is found to be unenforceable or invalid,
            that provision shall be modified to the minimum extent necessary to make it
            enforceable, and the remaining provisions shall remain in full force and
            effect. These Terms, together with the Privacy Policy, constitute the
            entire agreement between you and Midnight Compact Lab with respect to the
            Service.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p>
            Questions about these Terms? Contact us at:
          </p>
          <div className="mt-4 p-4 rounded-lg border border-white/8 bg-white/[0.03] font-mono text-xs text-white/50 space-y-1">
            <p>Midnight Compact Lab — Legal</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-white/80 transition-colors"
                style={{ color: "#E95144" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Privacy Policy →
          </Link>
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            ← Back to Compact Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
