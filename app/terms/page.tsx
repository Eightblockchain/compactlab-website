import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, Mail, OPERATOR } from "@/components/site/LegalPage";
import { BASE_URL, SOURCE_URL } from "@/lib/site";
import { TEXT_LINK } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using the CompactLab website and playground.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: false, follow: false },
};

const EFFECTIVE_DATE = "October 24, 2026";
const CONTACT_EMAIL = "legal@compactlab.dev";

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      effective={EFFECTIVE_DATE}
      other={{ label: "Privacy Policy", href: "/privacy" }}
      intro={
        <p>
          These Terms of Service (“Terms”) govern your use of the CompactLab website and playground
          (“the Service”), operated by {OPERATOR} (“we”, “our”, “us”). By
          using the Service, you agree to these Terms. If you do not agree, do not use the Service.
        </p>
      }
    >
      <LegalSection title="1. Acceptance of terms">
        <p>
          By using the Service, you confirm that you are at least 16 years old and able to agree to these Terms,
          which form a binding agreement between you and {OPERATOR}.
        </p>
        <p>
          We may change these Terms. We will update the effective date above when we do, and continuing to use the
          Service afterwards means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. The Service">
        <p>
          CompactLab is a browser IDE for writing, compiling and deploying smart contracts written in Compact, the
          smart-contract language of the Midnight Network. It currently includes:
        </p>
        <ul>
          <li>a code editor with Compact language support and projects saved to your account;</li>
          <li>server-side compilation (full ZK builds and typecheck-only builds);</li>
          <li>a Privacy view that highlights disclosure in your contract (a heuristic guide, not a verifier);</li>
          <li>tools to deploy and call contracts on Midnight Preprod and Preview through the 1AM wallet;</li>
          <li>starter templates and learning material.</li>
        </ul>
        <p>
          Mainnet is not supported. The Service is provided as-is and may change, be interrupted (including for
          planned maintenance) or be discontinued.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts">
        <p>
          You need an account to use the playground. Give accurate information and keep your credentials secure;
          you are responsible for activity under your account. Tell us promptly if you suspect unauthorized access.
        </p>
        <p>
          We may suspend or terminate accounts that violate these Terms or harm other users, us or third parties.
        </p>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>You agree not to use the Service to:</p>
        <ul>
          <li>develop, deploy or distribute contracts designed to defraud, exploit or harm others;</li>
          <li>attempt to gain unauthorized access to any system, network or account;</li>
          <li>get around rate limits, quotas or other technical restrictions;</li>
          <li>scrape or systematically extract data from the Service without written permission;</li>
          <li>break any applicable law or regulation, including export controls;</li>
          <li>disable, overload or impair the Service, or interfere with other users.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          <strong>Open source.</strong> The playground’s source code is published on{" "}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>
            GitHub
          </a>{" "}
          under the MIT license, and that license governs your use of that code. The CompactLab name and logo are
          not licensed for reuse.
        </p>
        <p>
          <strong>Your content.</strong> You keep full ownership of the code and other content you create. You grant
          us a limited, non-exclusive, royalty-free license to store, compile and display it only as needed to
          operate the Service.
        </p>
      </LegalSection>

      <LegalSection title="6. Blockchain risk">
        <p>CompactLab deploys to Midnight test networks. You acknowledge that:</p>
        <ul>
          <li>blockchain transactions are irreversible, and deployed contracts cannot be undone;</li>
          <li>contract bugs can cause permanent loss of funds or assets;</li>
          <li>you are responsible for auditing your code before any Mainnet deployment you make elsewhere;</li>
          <li>CompactLab does not provide investment, legal or financial advice.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Disclaimer of warranties">
        <p>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY OR
          NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted or error-free, or that any
          compiler output, proof or deployment outcome is correct.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {OPERATOR.toUpperCase()} AND ITS CONTRIBUTORS SHALL NOT BE LIABLE
          FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA,
          GOODWILL OR ASSETS, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY TO YOU
          SHALL NOT EXCEED ONE HUNDRED US DOLLARS (US $100) OR THE AMOUNT YOU PAID US IN THE PRECEDING TWELVE
          MONTHS, WHICHEVER IS GREATER.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnification">
        <p>
          You agree to defend, indemnify and hold harmless {OPERATOR} and its contributors from any claims, losses
          and costs (including reasonable legal fees) arising from your violation of these Terms or your use of the
          Service, including contracts you deploy.
        </p>
      </LegalSection>

      <LegalSection title="10. Privacy">
        <p>
          Our <Link href="/privacy" className={TEXT_LINK}>Privacy Policy</Link> is part of these Terms and explains
          how we handle your data.
        </p>
      </LegalSection>

      <LegalSection title="11. Third-party services">
        <p>
          The Service links to or works with third parties, including the Midnight Network, the 1AM wallet,
          Blockfrost, Google and GitHub. We are not responsible for their content or practices; your use of them is
          subject to their own terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law and disputes">
        <p>
          These Terms are governed by applicable law, without regard to conflict-of-law rules. We will first try to
          resolve any dispute through good-faith negotiation. If that fails, disputes go to binding arbitration or,
          where arbitration is not enforceable, to the competent courts.
        </p>
      </LegalSection>

      <LegalSection title="13. Severability and entire agreement">
        <p>
          If any provision is unenforceable, it will be limited to the minimum extent necessary and the rest remains
          in effect. These Terms and the Privacy Policy are the entire agreement between you and {OPERATOR} about the
          Service.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          Questions about these Terms: <Mail to={CONTACT_EMAIL} />.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
