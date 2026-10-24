import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, Mail, OPERATOR } from "@/components/site/LegalPage";
import { BASE_URL } from "@/lib/site";
import { TEXT_LINK } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What CompactLab collects, why, and the choices you have.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: false, follow: false },
};

const EFFECTIVE_DATE = "October 24, 2026";
const CONTACT_EMAIL = "privacy@compactlab.dev";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effective={EFFECTIVE_DATE}
      other={{ label: "Terms of Service", href: "/terms" }}
      intro={
        <p>
          {OPERATOR} (“we”, “our”) operates this website, compactlab.dev, and the CompactLab
          playground at playground.compactlab.dev. This policy explains what information we collect, how we use it,
          and your choices. By using CompactLab, you agree to the practices described here.
        </p>
      }
    >
      <LegalSection title="1. Information we collect">
        <p>
          <strong>Account.</strong> You need an account to use the playground. We store your email address and a
          hash of your password, or, if you sign in with Google or GitHub, your name, avatar and account ID from
          that provider.
        </p>
        <p>
          <strong>Projects.</strong> Your contract source files are saved to your account so you can continue on
          any device, and are sent to our API when you compile. We also store each project’s compile result,
          deployment details (such as contract address and transaction hash) and the constructor values you enter.
          Witness values are stored too, unless you turn off “Sync witness values to the cloud” in
          Settings.
        </p>
        <p>
          <strong>Usage.</strong> We record product events such as sign-up, compile, deploy and call to understand
          how CompactLab is used, and keep server logs (including IP address and browser details) for security and
          rate limiting.
        </p>
        <p>
          <strong>Wallets.</strong> Deploy and Call go through your 1AM wallet. We never receive your private keys
          or recovery phrase. Transactions you submit, and the contract addresses they create, are public on the
          Midnight network.
        </p>
        <p>
          <strong>Cookies and local storage.</strong> The playground uses first-party storage to keep you signed in,
          remember editor preferences and hold unsaved changes. We do not use advertising cookies. This website
          (compactlab.dev) sets no cookies and runs no analytics.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use your information">
        <ul>
          <li>Operate, maintain and improve CompactLab.</li>
          <li>Compile your contracts and restore your projects.</li>
          <li>Send service notices, such as planned maintenance.</li>
          <li>Respond to support requests.</li>
          <li>Prevent abuse, enforce rate limits and investigate security incidents.</li>
        </ul>
        <p>We do not sell, rent or trade your personal information.</p>
      </LegalSection>

      <LegalSection title="3. Sharing">
        <ul>
          <li>
            <strong>Service providers.</strong> Hosting providers, Google and GitHub for sign-in, and Blockfrost,
            which serves Preprod indexer requests made through CompactLab. They process data only to provide their
            service to us.
          </li>
          <li>
            <strong>Legal requirements.</strong> We may disclose information if required by law, or to protect the
            rights, property or safety of CompactLab, our users or the public.
          </li>
          <li>
            <strong>Business transfers.</strong> If CompactLab is merged, acquired or sold, your data may be
            transferred. We will notify you before this happens.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Retention">
        <p>
          We keep your account and projects while your account exists. If you ask us to delete your account, we
          delete it and its projects within 30 days, except where the law requires us to keep something. Data you
          publish on the Midnight network cannot be deleted by us or anyone else.
        </p>
      </LegalSection>

      <LegalSection title="5. Security">
        <p>
          Traffic is encrypted with TLS, passwords are stored only as hashes, and administrator actions are logged.
          No system is completely secure, so never paste private keys or recovery phrases into the editor.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>access a copy of the personal data we hold about you;</li>
          <li>correct inaccurate data;</li>
          <li>delete your data;</li>
          <li>receive your data in a machine-readable format (you can also export any project as a zip);</li>
          <li>object to certain processing.</li>
        </ul>
        <p>
          To exercise these rights, email <Mail to={CONTACT_EMAIL} />.
        </p>
      </LegalSection>

      <LegalSection title="7. Children">
        <p>
          CompactLab is not directed to anyone under 16, and we do not knowingly collect their personal information.
          If you believe we have, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-party links">
        <p>
          CompactLab links to other sites, such as the Midnight documentation, GitHub and the 1AM wallet. Their
          privacy practices are their own; please review their policies.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this policy. For material changes we will update the effective date above and, where
          appropriate, show a notice in the playground. Continuing to use CompactLab after a change means you accept
          the updated policy. See also the <Link href="/terms" className={TEXT_LINK}>Terms of Service</Link>.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions or requests about this policy: <Mail to={CONTACT_EMAIL} />.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
