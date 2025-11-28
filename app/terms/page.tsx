import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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

        <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using CVForge, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these Terms of Service, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              CVForge provides an AI-powered resume building platform that allows users to create, edit, optimize,
              and export professional resumes. Our service includes various templates, AI optimization tools, and
              import features to help you build the perfect resume.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use certain features of our service, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Subscription and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CVForge offers both free and paid subscription plans:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Free plans provide basic features with limitations</li>
              <li>Paid plans unlock additional features and remove limitations</li>
              <li>Subscriptions are billed automatically on a recurring basis</li>
              <li>You can cancel your subscription at any time</li>
              <li>Refunds are provided in accordance with our refund policy</li>
              <li>Prices are subject to change with prior notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Content and Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to the content you create using CVForge, including your resume data, personal
              information, and any other materials you upload. By using our service, you grant us a limited license
              to use, store, and process your content solely for the purpose of providing our services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use CVForge to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use the service for any unlawful or fraudulent purpose</li>
              <li>Scrape or copy content using automated means without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. AI-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our AI optimization features are provided as tools to assist you in improving your resume. While we
              strive for accuracy, AI-generated suggestions should be reviewed and verified by you before use. We
              do not guarantee the accuracy, completeness, or suitability of AI-generated content for any particular
              purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The CVForge platform, including all templates, designs, logos, and software, is owned by CVForge and
              protected by copyright, trademark, and other intellectual property laws. You may not copy, modify,
              distribute, or reverse engineer any part of our service without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your account and access to our service at any time, with
              or without notice, for conduct that we believe violates these Terms of Service or is harmful to other
              users, us, or third parties, or for any other reason in our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              CVForge is provided "as is" and "as available" without warranties of any kind, either express or implied.
              We do not guarantee that the service will be uninterrupted, secure, or error-free. Your use of the service
              is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, CVForge shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless CVForge and its officers, directors, employees, and agents from
              any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of
              the service or violation of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify users of any material
              changes via email or through the service. Your continued use of CVForge after such modifications constitutes
              your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of
              California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>Email: legal@cvforge.com</p>
              <p>Address: CVForge Inc., 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
