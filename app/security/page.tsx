import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Security</h1>
          <p className="text-xl text-muted-foreground">
            Your data security and privacy are our top priorities
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Security Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At CVForge, we understand that your resume contains sensitive personal information. We employ
              industry-leading security practices to protect your data and ensure your privacy. Our security
              infrastructure is designed with multiple layers of protection to safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Encryption</h3>
                    <p className="text-sm text-muted-foreground">
                      All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Secure Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">
                      Hosted on enterprise-grade cloud infrastructure with regular security audits
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Access Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Strict access controls with multi-factor authentication for all team members
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      24/7 security monitoring and automated threat detection systems
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement comprehensive data protection measures:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Regular Backups:</strong> Automated daily backups with point-in-time recovery
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Data Isolation:</strong> Your data is logically separated and never shared with other users
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Secure Deletion:</strong> Permanent data deletion within 30 days of account closure
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>No Third-Party Sharing:</strong> We never sell or share your personal data with third parties
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance & Certifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CVForge complies with major data protection regulations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>GDPR (General Data Protection Regulation)</li>
              <li>CCPA (California Consumer Privacy Act)</li>
              <li>SOC 2 Type II (in progress)</li>
              <li>OWASP Top 10 security standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We partner with Stripe, a PCI-DSS Level 1 certified payment processor, to handle all payment
              transactions. We never store your credit card information on our servers. All payment data is
              encrypted and securely processed by Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Security Best Practices for Users</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Help us keep your account secure:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use a strong, unique password for your CVForge account</li>
              <li>Enable two-factor authentication (2FA) when available</li>
              <li>Keep your email account secure</li>
              <li>Log out when using shared or public computers</li>
              <li>Be cautious of phishing attempts</li>
              <li>Regularly review your account activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Incident Response</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the unlikely event of a security incident, we have a comprehensive incident response plan in place.
              We will notify affected users promptly and transparently about any breach that may affect their data,
              in accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible Disclosure</h2>
            <Card className="p-6 border-border bg-primary/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Report a Security Issue</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you discover a security vulnerability, please report it to us responsibly. We appreciate
                    security researchers who help us keep CVForge safe.
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Email:</strong> security@cvforge.com</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                    <p>Please do not publicly disclose the issue until we've had a chance to address it.</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our security practices, please contact our security team at{" "}
              <a href="mailto:security@cvforge.com" className="text-primary hover:underline">
                security@cvforge.com
              </a>
              . For general privacy questions, see our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
