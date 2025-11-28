import Link from "next/link"
import { ArrowLeft, Sparkles, FileText, Zap, Download, Upload, Edit3, Shield, Globe, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">Powerful Features</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create a professional resume that stands out and gets you hired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Optimization</h3>
            <p className="text-muted-foreground">
              Our advanced AI analyzes job descriptions and optimizes your resume content to match employer requirements,
              increasing your chances of getting interviews.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Palette className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Professional Templates</h3>
            <p className="text-muted-foreground">
              Choose from a variety of ATS-friendly templates designed by professionals. All templates are fully
              customizable to match your personal brand.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Edit3 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Easy Editing</h3>
            <p className="text-muted-foreground">
              Intuitive drag-and-drop interface makes it easy to rearrange sections, update content, and customize
              your resume without any design skills.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Upload className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Import Existing Resumes</h3>
            <p className="text-muted-foreground">
              Already have a resume? Import it from PDF, DOCX, or even LinkedIn. Our AI will parse and structure
              your content automatically.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Download className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Multiple Export Formats</h3>
            <p className="text-muted-foreground">
              Export your resume as PDF, DOCX, or Markdown. Perfect formatting guaranteed across all platforms
              and applicant tracking systems.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Unlimited Resumes</h3>
            <p className="text-muted-foreground">
              Create and manage multiple resumes for different job applications. Tailor each resume to specific
              roles and industries.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Privacy & Security</h3>
            <p className="text-muted-foreground">
              Your data is encrypted and secure. We never share your personal information with third parties.
              You own your content.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Real-Time Preview</h3>
            <p className="text-muted-foreground">
              See your changes instantly with our live preview feature. What you see is exactly what you'll get
              when you export.
            </p>
          </Card>

          <Card className="p-6 border-border hover:border-primary/50 transition-colors">
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Cloud Storage</h3>
            <p className="text-muted-foreground">
              Access your resumes from anywhere, on any device. All your work is automatically saved to the cloud
              in real-time.
            </p>
          </Card>
        </div>

        <section className="text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully landed their dream jobs with CVForge.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Building Free
              </Button>
            </Link>
            <Link href="/templates">
              <Button size="lg" variant="outline">
                View Templates
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
