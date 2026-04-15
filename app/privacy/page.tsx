import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Compact Lab collects, uses, and protects your data.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL || "https://compactlab.dev"}/privacy` },
  openGraph: {
    title: "Privacy Policy | Compact Lab",
    description: "How Compact Lab collects, uses, and protects your data.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://compactlab.dev"}/privacy`,
  },
  robots: { index: false, follow: false },
};

const EFFECTIVE_DATE = "April 2, 2026";
const CONTACT_EMAIL = "privacy@compactlab.dev";

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

export default function PrivacyPolicy() {
  return (
    <div id="main-content" className="min-h-screen bg-black">
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
            Privacy Policy
          </h1>
          <p className="text-sm text-white/30 font-mono">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        {/* Intro */}
        <p className="text-white/55 text-sm leading-relaxed mb-12">
          Midnight Compact Lab (&quot;we&quot;, &quot;our&quot;, or &quot;the Lab&quot;) operates the Compact Lab
          web application at{" "}
          <span className="text-white/70 font-mono">compactlab.dev</span>. This
          Privacy Policy explains what information we collect, how we use it, and
          your rights regarding your data. By using the Lab, you agree to the
          practices described here.
        </p>

        <Section title="1. Information We Collect">
          <p>
            <strong className="text-white/80">Information you provide directly.</strong>{" "}
            We collect information you voluntarily submit, such as your email address
            when you sign up for early access or contact us. We do not require account
            registration to use the core playground features.
          </p>
          <p>
            <strong className="text-white/80">Usage data.</strong> When you visit the
            Lab, we automatically collect certain technical information: IP address,
            browser type and version, operating system, pages visited, time spent, and
            referring URL. This data is used in aggregate form to improve the product.
          </p>
          <p>
            <strong className="text-white/80">Smart contract code you write.</strong>{" "}
            Code you write in the editor is processed entirely in your browser. We do
            not store, transmit, or inspect your Compact source files unless you
            explicitly use a share or export feature (when available).
          </p>
          <p>
            <strong className="text-white/80">Cookies and local storage.</strong> We
            use first-party cookies and browser local storage to save editor
            preferences (theme, font size) and session state. We do not use
            third-party advertising cookies.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>Operate, maintain, and improve the Compact Lab playground.</li>
            <li>Respond to support requests and inquiries.</li>
            <li>Send product updates or release notes if you have opted in.</li>
            <li>Monitor for abuse, security incidents, or terms violations.</li>
            <li>Compile aggregate analytics to understand feature usage.</li>
          </ul>
          <p>
            We will not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>
        </Section>

        <Section title="3. Data Sharing and Disclosure">
          <p>
            We may share your information only in the following limited circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>
              <strong className="text-white/80">Service providers.</strong> We engage
              trusted third-party vendors (e.g., hosting, analytics, error monitoring)
              who process data on our behalf under strict confidentiality obligations.
            </li>
            <li>
              <strong className="text-white/80">Legal requirements.</strong> We may
              disclose information if required by law, subpoena, or to protect the
              rights, property, or safety of Compact Lab, our users, or the public.
            </li>
            <li>
              <strong className="text-white/80">Business transfers.</strong> In the
              event of a merger, acquisition, or asset sale, your data may be
              transferred. We will notify you before this occurs.
            </li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <p>
            We retain personal data only as long as necessary to fulfill the purposes
            described in this policy, or as required by applicable law. Usage logs are
            typically purged after 90 days. If you request deletion of your data, we
            will comply within 30 days, except where retention is required by law.
          </p>
        </Section>

        <Section title="5. Security">
          <p>
            We apply industry-standard security measures including TLS encryption in
            transit, access controls, and regular security reviews. However, no system
            is completely secure. We encourage you not to share sensitive private keys
            or wallet credentials through the editor or any communication channel
            associated with the Lab.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the following rights regarding
            your personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-1">
            <li>
              <strong className="text-white/80">Access.</strong> Request a copy of the
              personal data we hold about you.
            </li>
            <li>
              <strong className="text-white/80">Rectification.</strong> Ask us to
              correct inaccurate data.
            </li>
            <li>
              <strong className="text-white/80">Erasure.</strong> Request deletion of
              your personal data.
            </li>
            <li>
              <strong className="text-white/80">Portability.</strong> Receive your data
              in a machine-readable format.
            </li>
            <li>
              <strong className="text-white/80">Objection.</strong> Object to certain
              processing activities.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline underline-offset-2 hover:text-white/80 transition-colors"
              style={{ color: "#E95144" }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            The Lab is not directed to individuals under the age of 16. We do not
            knowingly collect personal information from children. If you believe we
            have inadvertently collected such information, please contact us immediately
            and we will delete it.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            The Lab may contain links to external websites (such as Midnight Network
            documentation or GitHub). We are not responsible for the privacy practices
            of those sites. We encourage you to review their privacy policies before
            providing any personal data.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by updating the effective date above and, where
            appropriate, by displaying a notice in the application. Your continued use
            of the Lab after changes become effective constitutes your acceptance of the
            updated policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy,
            please reach out to us at:
          </p>
          <div className="mt-4 p-4 rounded-lg border border-white/8 bg-white/[0.03] font-mono text-xs text-white/50 space-y-1">
            <p>Midnight Compact Lab</p>
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
          <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Terms of Service →
          </Link>
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            ← Back to Compact Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
