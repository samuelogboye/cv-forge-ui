import Link from "next/link"
import { ArrowLeft, Download, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PressPage() {
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Press Kit</h1>
          <p className="text-xl text-muted-foreground">
            Resources for media and press inquiries
          </p>
        </div>

        {/* About CVForge */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">About CVForge</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              CVForge is an AI-powered resume building platform that helps job seekers create professional,
              ATS-friendly resumes in minutes. Founded in 2024, our mission is to democratize access to
              professional career tools and help everyone put their best foot forward in the job market.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              With advanced AI optimization, beautiful templates, and intuitive editing tools, CVForge has
              helped thousands of users land their dream jobs across various industries.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Facts</h2>
          <Card className="p-6 border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Founded</p>
                <p className="text-lg font-semibold text-foreground">2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                <p className="text-lg font-semibold text-foreground">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Industry</p>
                <p className="text-lg font-semibold text-foreground">Career Technology</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Website</p>
                <p className="text-lg font-semibold text-foreground">cvforge.com</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Brand Assets */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Brand Assets</h2>
          <Card className="p-6 border-border">
            <p className="text-muted-foreground mb-6">
              Download our logos, screenshots, and other brand materials for your publication.
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                <span>Logo Pack (SVG, PNG)</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Product Screenshots</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Brand Guidelines</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        {/* Leadership */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Leadership Team</h2>
          <div className="space-y-4">
            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-1">Jane Smith</h3>
              <p className="text-sm text-muted-foreground mb-3">CEO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Former Head of Product at a leading HR tech company, Jane has over 10 years of experience
                in career technology and product development.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-1">John Doe</h3>
              <p className="text-sm text-muted-foreground mb-3">CTO & Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Previously a senior engineer at a major tech company, John brings expertise in AI/ML
                and scalable system architecture.
              </p>
            </Card>
          </div>
        </section>

        {/* Press Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Press Contact</h2>
          <Card className="p-6 border-border bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Media Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For press inquiries, interviews, or additional information, please contact:
                </p>
                <div className="space-y-1 text-muted-foreground">
                  <p><strong>Email:</strong> press@cvforge.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
                <Button className="mt-4" asChild>
                  <a href="mailto:press@cvforge.com">
                    Contact Press Team
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
