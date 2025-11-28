import Link from "next/link"
import { ArrowLeft, Eye, Keyboard, Users, Headphones } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AccessibilityPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Accessibility Statement</h1>
          <p className="text-xl text-muted-foreground">
            CVForge is committed to ensuring digital accessibility for people with disabilities
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are continually improving the user experience for everyone and applying the relevant accessibility
              standards to ensure we provide equal access to all of our users. CVForge strives to conform to Level AA
              of the Web Content Accessibility Guidelines (WCAG) 2.1.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Keyboard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Keyboard Navigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Full keyboard support for all interactive elements and features
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Screen Reader Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Compatible with popular screen readers including JAWS, NVDA, and VoiceOver
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Color Contrast</h3>
                    <p className="text-sm text-muted-foreground">
                      High contrast ratios that meet WCAG AA standards
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Alternative Text</h3>
                    <p className="text-sm text-muted-foreground">
                      Descriptive alt text for all images and icons
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CVForge accessibility relies on the following technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>HTML5 semantic elements</li>
              <li>WAI-ARIA attributes</li>
              <li>CSS for visual presentation</li>
              <li>JavaScript for interactive features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Known Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Despite our best efforts, some content on CVForge may not yet be fully accessible. We are actively
              working to improve accessibility across all features. Known limitations include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Some PDF exports may have limited screen reader support</li>
              <li>Certain third-party integrations may have accessibility constraints</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Feedback</h2>
            <p className="text-muted-foreground leading-relaxed">
              We welcome your feedback on the accessibility of CVForge. If you encounter any accessibility barriers
              or have suggestions for improvement, please contact us:
            </p>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>Email: accessibility@cvforge.com</p>
              <p>We typically respond within 2 business days</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ongoing Efforts</h2>
            <p className="text-muted-foreground leading-relaxed">
              We regularly review our website and conduct accessibility audits to identify and address issues.
              Our development team receives ongoing training in accessibility best practices to ensure that new
              features are designed and built with accessibility in mind from the start.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">External Resources</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more information about web accessibility:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Web Accessibility Initiative (WAI)
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Web Content Accessibility Guidelines (WCAG) 2.1
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
