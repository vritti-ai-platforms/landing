import type { Metadata } from 'next';
import Link from 'next/link';
import { Typography } from '@vritti/quantum-ui/Typography';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vritti AI',
  description: 'Learn how Vritti AI collects, uses, and protects your personal information.',
};

const EFFECTIVE_DATE = 'February 1, 2026';
const CONTACT_EMAIL = 'privacy@vrittiai.com';

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-12">
          <Typography variant="h1" className="mb-4">
            Privacy Policy
          </Typography>
          <Typography variant="body2" className="text-vritti-secondary">
            Effective Date: {EFFECTIVE_DATE}
          </Typography>
        </div>

        <div className="prose-content space-y-10">
          <Section>
            <Typography variant="body1" className="leading-relaxed text-vritti-secondary">
              Vritti AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our platform and services. Please read this policy carefully.
              If you do not agree with the terms, please discontinue use of our services.
            </Typography>
          </Section>

          <Section title="1. Information We Collect">
            <Subsection title="Information You Provide">
              <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
                <li><Typography variant="body2" className="inline">Account registration details (name, email address, phone number)</Typography></li>
                <li><Typography variant="body2" className="inline">Business information (company name, industry, size)</Typography></li>
                <li><Typography variant="body2" className="inline">Payment and billing information (processed securely via third-party providers)</Typography></li>
                <li><Typography variant="body2" className="inline">Communications you send us (support requests, feedback)</Typography></li>
                <li><Typography variant="body2" className="inline">Data you upload or input into the platform (leads, bookings, inventory records)</Typography></li>
              </ul>
            </Subsection>
            <Subsection title="Information Collected Automatically">
              <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
                <li><Typography variant="body2" className="inline">Usage data (features used, actions taken, session duration)</Typography></li>
                <li><Typography variant="body2" className="inline">Device and browser information (IP address, browser type, operating system)</Typography></li>
                <li><Typography variant="body2" className="inline">Log data (pages visited, referring URLs, timestamps)</Typography></li>
                <li><Typography variant="body2" className="inline">Cookies and similar tracking technologies</Typography></li>
              </ul>
            </Subsection>
            <Subsection title="Information from Third Parties">
              <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
                We may receive information about you from third-party integrations you connect to
                Vritti (such as CRMs, calendars, or inventory systems), analytics providers, and
                payment processors.
              </Typography>
            </Subsection>
          </Section>

          <Section title="2. How We Use Your Information">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </Typography>
            <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
              <li><Typography variant="body2" className="inline">Provide, operate, and improve our platform and services</Typography></li>
              <li><Typography variant="body2" className="inline">Process transactions and send related information</Typography></li>
              <li><Typography variant="body2" className="inline">Personalize your experience and deliver AI-powered recommendations</Typography></li>
              <li><Typography variant="body2" className="inline">Send administrative communications, including updates and security alerts</Typography></li>
              <li><Typography variant="body2" className="inline">Send marketing communications (you may opt out at any time)</Typography></li>
              <li><Typography variant="body2" className="inline">Monitor and analyze usage to improve functionality</Typography></li>
              <li><Typography variant="body2" className="inline">Detect and prevent fraud, abuse, and security incidents</Typography></li>
              <li><Typography variant="body2" className="inline">Comply with legal obligations</Typography></li>
            </ul>
          </Section>

          <Section title="3. Sharing Your Information">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </Typography>
            <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
              <li>
                <Typography variant="body2" className="inline font-medium">Service Providers</Typography>
                <Typography variant="body2" className="inline"> — Third parties that perform services on our behalf (hosting, payment processing, analytics, email delivery)</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">Business Transfers</Typography>
                <Typography variant="body2" className="inline"> — In connection with a merger, acquisition, or sale of assets, your information may be transferred</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">Legal Requirements</Typography>
                <Typography variant="body2" className="inline"> — When required by law, court order, or governmental authority</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">Safety and Security</Typography>
                <Typography variant="body2" className="inline"> — To protect the rights, property, or safety of Vritti, our users, or the public</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">With Your Consent</Typography>
                <Typography variant="body2" className="inline"> — For any other purpose with your explicit consent</Typography>
              </li>
            </ul>
          </Section>

          <Section title="4. Cookies and Tracking Technologies">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience. Types of cookies we use:
            </Typography>
            <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
              <li>
                <Typography variant="body2" className="inline font-medium">Essential cookies</Typography>
                <Typography variant="body2" className="inline"> — Required for the platform to function (authentication, session management)</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">Analytics cookies</Typography>
                <Typography variant="body2" className="inline"> — Help us understand how users interact with the platform</Typography>
              </li>
              <li>
                <Typography variant="body2" className="inline font-medium">Preference cookies</Typography>
                <Typography variant="body2" className="inline"> — Remember your settings (such as theme preference)</Typography>
              </li>
            </ul>
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may
              affect platform functionality.
            </Typography>
          </Section>

          <Section title="5. Data Retention">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              We retain your personal information for as long as your account is active or as
              needed to provide services. We may retain certain information for longer periods
              where required by law or for legitimate business purposes (such as fraud prevention).
              When you delete your account, we will delete or anonymize your data within 90 days,
              except where retention is required by law.
            </Typography>
          </Section>

          <Section title="6. Data Security">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              We implement industry-standard security measures to protect your information,
              including encryption in transit (TLS/HTTPS) and at rest, access controls, and
              regular security assessments. However, no system is completely secure, and we
              cannot guarantee absolute security. We encourage you to use strong passwords and
              to notify us immediately of any suspected unauthorized access.
            </Typography>
          </Section>

          <Section title="7. Your Rights and Choices">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </Typography>
            <ul className="list-disc pl-6 space-y-2 text-vritti-secondary">
              <li><Typography variant="body2" className="inline"><span className="font-medium">Access</span> — Request a copy of the personal data we hold about you</Typography></li>
              <li><Typography variant="body2" className="inline"><span className="font-medium">Correction</span> — Request correction of inaccurate or incomplete information</Typography></li>
              <li><Typography variant="body2" className="inline"><span className="font-medium">Deletion</span> — Request deletion of your personal data</Typography></li>
              <li><Typography variant="body2" className="inline"><span className="font-medium">Portability</span> — Request a machine-readable export of your data</Typography></li>
              <li><Typography variant="body2" className="inline"><span className="font-medium">Opt-out</span> — Unsubscribe from marketing communications at any time</Typography></li>
              <li><Typography variant="body2" className="inline"><span className="font-medium">Restriction</span> — Request that we restrict processing of your data in certain circumstances</Typography></li>
            </ul>
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We will respond within 30 days.
            </Typography>
          </Section>

          <Section title="8. International Data Transfers">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              Vritti AI operates globally. Your information may be transferred to and processed in
              countries other than your country of residence. We ensure appropriate safeguards are
              in place for such transfers in accordance with applicable data protection laws,
              including standard contractual clauses where required.
            </Typography>
          </Section>

          <Section title="9. Children's Privacy">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children. If you believe we have
              inadvertently collected information from a child, please contact us immediately
              and we will take steps to delete that information.
            </Typography>
          </Section>

          <Section title="10. Third-Party Links and Integrations">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              Our platform may contain links to third-party websites or integrate with third-party
              services. This Privacy Policy does not apply to those third-party services. We
              encourage you to review the privacy policies of any third-party services you access.
            </Typography>
          </Section>

          <Section title="11. Changes to This Policy">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by email or by posting a prominent notice on our platform.
              The &quot;Effective Date&quot; at the top of this page indicates when the policy was
              last revised. Continued use of our services after changes constitutes acceptance
              of the updated policy.
            </Typography>
          </Section>

          <Section title="12. Contact Us">
            <Typography variant="body2" className="text-vritti-secondary leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </Typography>
            <div className="mt-4 p-6 rounded-2xl border border-vritti bg-card">
              <Typography variant="body2" className="font-medium mb-1">Vritti AI</Typography>
              <Typography variant="body2" className="text-vritti-secondary">
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </Typography>
              <Typography variant="body2" className="text-vritti-secondary mt-1">
                Website:{' '}
                <a href="https://vrittiai.com" className="text-primary hover:underline">
                  vrittiai.com
                </a>
              </Typography>
            </div>
          </Section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-vritti flex flex-wrap gap-4">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </Link>
          <Link href="/terms" className="text-sm text-vritti-secondary hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div>
      {title && (
        <Typography variant="h3" className="mb-4 text-xl font-semibold">
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <Typography variant="h6" className="mb-3 font-medium">
        {title}
      </Typography>
      {children}
    </div>
  );
}
