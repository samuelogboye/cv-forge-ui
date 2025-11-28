import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
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

        <h1 className="text-4xl font-bold text-foreground mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (authentication, security)</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Collect information about how you use our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>

            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Session Cookies</h3>
                <p className="text-muted-foreground">
                  These are temporary cookies that expire when you close your browser. They help us maintain your
                  session and keep you logged in.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Persistent Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies remain on your device for a set period and help us remember your preferences across
                  multiple visits.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Third-Party Cookies</h3>
                <p className="text-muted-foreground">
                  We use services like Google Analytics and Stripe that may set their own cookies to provide their services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can
              impact your user experience and some features may no longer function properly.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Most browsers allow you to refuse or accept cookies. You can usually find these settings in your browser's
              options or preferences menu. For more information about managing cookies, visit{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.allaboutcookies.org
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>Email: privacy@cvforge.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
