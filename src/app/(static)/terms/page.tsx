'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';

export default function Terms() {
  const lastUpdated = '2026-02-04';
  const effectiveDate = '2026-02-04';

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative' }}>
        <Paper
          variant="section"
          sx={{
            backgroundColor: 'var(--quantum-color-background-brand)',
            py: 6,
            px: 2,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <GradientText
              variant="h1"
              gradient="hero"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              Terms of Service
            </GradientText>
            
            <Typography
              variant="body1"
              intent="secondary"
              sx={{
                fontSize: '1.125rem',
                mb: 2,
              }}
            >
              Last updated: {lastUpdated}
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Content */}
      <section>
        <Paper
          variant="section"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Introduction */}
              <div>
                <Typography variant="body1" intent="primary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Welcome to {SITE_CONFIG.name}. These Terms of Service ("Terms") govern your use of our website 
                  and services. By accessing or using our services, you agree to be bound by these Terms.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Please read these Terms carefully before using our services. If you do not agree with these Terms, 
                  you may not use our services.
                </Typography>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Acceptance of Terms
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  By accessing and using {SITE_CONFIG.name} ("Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. These Terms are effective as of {effectiveDate}.
                </Typography>
              </div>

              {/* Description of Service */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Description of Service
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  {SITE_CONFIG.name} provides an AI-powered business operating system for small businesses in India,
                  including salons, clinics, restaurants, and service-based businesses. Our Service includes:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Customer relationship management</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Appointment scheduling and booking</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Inventory management</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Financial analytics and reporting</Typography></li>
                  <li><Typography variant="body1" intent="secondary">WhatsApp business integration</Typography></li>
                  <li><Typography variant="body1" intent="secondary">AI-powered business insights</Typography></li>
                </ul>

                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  AI System Capabilities and Limitations
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Our Service leverages artificial intelligence and machine learning technologies. While we strive for
                  accuracy and reliability, AI systems:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">
                    May produce errors, inaccuracies, or incomplete information
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Improve over time through learning but are not infallible
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Require human oversight for critical business decisions
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Should not replace professional advice for legal, financial, or medical matters
                  </Typography></li>
                </ul>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You acknowledge that AI-generated insights and recommendations are provided as tools to assist your
                  decision-making and should be verified before taking action based on them.
                </Typography>
              </div>

              {/* User Accounts */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  User Accounts and Registration
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  To access certain features of our Service, you may need to create an account. You agree to:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Provide accurate and complete information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Maintain the security of your account credentials</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Update your information as needed</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Notify us immediately of any unauthorized use</Typography></li>
                </ul>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You are responsible for all activities that occur under your account.
                </Typography>
              </div>

              {/* OAuth Authentication */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  OAuth-Based Authentication
                </Typography>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Vritti AI offers authentication through third-party OAuth providers, including X (formerly Twitter),
                  Google, and other supported platforms. By using OAuth to access our Service:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">
                    You grant us permission to access limited information from your OAuth provider account, including
                    your email address, as authorized through the OAuth consent flow
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    You acknowledge that your use of third-party OAuth providers is subject to their respective terms
                    and privacy policies
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    You understand that we use your email address solely for authentication, account communication,
                    and critical service updates
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    You can revoke OAuth access through the provider's settings at any time, which may limit your
                    ability to access certain features
                  </Typography></li>
                </ul>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We obtain explicit consent before accessing your email through OAuth providers and never share this
                  information with third parties for marketing purposes.
                </Typography>
              </div>

              {/* Acceptable Use */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Acceptable Use Policy
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  You agree not to use our Service to:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Violate any applicable laws or regulations</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Infringe on intellectual property rights</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Transmit harmful or malicious content</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Interfere with the operation of our services</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Attempt unauthorized access to our systems</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Use the service for spam or unsolicited communications</Typography></li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Intellectual Property Rights
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  The Service and its original content, features, and functionality are owned by {SITE_CONFIG.name} 
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You retain ownership of content you create using our Service, while granting us a license to 
                  provide the Service to you.
                </Typography>
              </div>

              {/* Privacy */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Privacy and Data Protection
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Your privacy is important to us. Our collection and use of personal information is governed by our{' '}
                  <a
                    href="/privacy-policy"
                    style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                  >
                    Privacy Policy
                  </a>, which is incorporated into these Terms by reference.
                </Typography>
              </div>

              {/* Payments and Billing */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Payments and Billing
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Subscription Fees
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Our Service is provided on a subscription basis. Current pricing is available on our website and 
                  may be updated from time to time.
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Payment Terms
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Subscription fees are billed in advance monthly or annually</Typography></li>
                  <li><Typography variant="body1" intent="secondary">All fees are non-refundable except as required by law</Typography></li>
                  <li><Typography variant="body1" intent="secondary">You authorize us to charge your payment method automatically</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Failed payments may result in service suspension</Typography></li>
                </ul>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Cancellation
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You may cancel your subscription at any time. Cancellation will be effective at the end of your 
                  current billing period.
                </Typography>
              </div>

              {/* Service Availability */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Service Availability and Modifications
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  We strive to provide reliable service but cannot guarantee 100% uptime. We may:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Modify or discontinue features with notice</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Perform maintenance that may temporarily affect service</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Update our Terms with advance notice</Typography></li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Disclaimers and Limitation of Liability
                </Typography>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  THE SERVICE, INCLUDING ALL AI-POWERED FEATURES AND RECOMMENDATIONS, IS PROVIDED "AS IS" AND "AS AVAILABLE"
                  WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                  DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">
                    Warranties of merchantability and fitness for a particular purpose
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Warranties that the Service will be error-free, uninterrupted, or secure
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Warranties regarding the accuracy, completeness, or reliability of AI-generated content, insights,
                    or recommendations
                  </Typography></li>
                  <li><Typography variant="body1" intent="secondary">
                    Warranties that AI systems will meet your specific business requirements or expectations
                  </Typography></li>
                </ul>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  YOU ACKNOWLEDGE THAT AI SYSTEMS ARE PROBABILISTIC IN NATURE AND MAY PRODUCE UNEXPECTED OR INCORRECT
                  RESULTS. YOU AGREE TO VERIFY ALL AI-GENERATED INFORMATION BEFORE MAKING BUSINESS DECISIONS BASED ON IT.
                </Typography>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  IN NO EVENT SHALL {SITE_CONFIG.name.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
                </Typography>
              </div>

              {/* Indemnification */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Indemnification
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You agree to indemnify and hold harmless {SITE_CONFIG.name} from any claims, damages, or expenses 
                  arising from your use of the Service or violation of these Terms.
                </Typography>
              </div>

              {/* Termination */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Termination
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, 
                  for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </Typography>
              </div>

              {/* Governing Law */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Governing Law and Dispute Resolution
                </Typography>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  These Terms are governed by and construed in accordance with the laws of California, United States,
                  without regard to conflict of law principles. For users in India, these Terms also comply with
                  applicable Indian laws, including the Information Technology Act, 2000, and the Digital Personal
                  Data Protection Act.
                </Typography>

                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Any disputes arising from these Terms will be resolved through binding arbitration in accordance
                  with the rules of the American Arbitration Association. Users in India may also seek resolution
                  through courts of competent jurisdiction in India for matters relating to Indian law compliance.
                </Typography>
              </div>

              {/* Changes to Terms */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Changes to These Terms
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                  by email or through the Service. Continued use of the Service after changes constitutes acceptance 
                  of the new Terms.
                </Typography>
              </div>

              {/* Contact Information */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--quantum-color-surface-subtle)',
                  borderRadius: '12px',
                  border: '1px solid var(--quantum-color-border-subtle)',
                }}
              >
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Contact Information
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  If you have any questions about these Terms of Service, please contact us:
                </Typography>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Typography variant="body1" intent="primary">
                    Email: <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </Typography>
                  
                  <Typography variant="body1" intent="primary">
                    Website: <a 
                      href={SITE_CONFIG.url}
                      style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                    >
                      {SITE_CONFIG.url}
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </div>
  );
}