import Link from "next/link"
import { ArrowLeft, Search, Book, FileQuestion, MessageCircle, Video } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HelpCenterPage() {
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions and get help with CVForge
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for help articles..."
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>

        {/* Popular Topics */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-border hover:border-primary/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-2">Getting Started</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/help/create-account" className="hover:text-primary">How to create an account</Link></li>
                <li><Link href="/help/first-resume" className="hover:text-primary">Creating your first resume</Link></li>
                <li><Link href="/help/templates" className="hover:text-primary">Choosing the right template</Link></li>
                <li><Link href="/help/import" className="hover:text-primary">Importing existing resumes</Link></li>
              </ul>
            </Card>

            <Card className="p-6 border-border hover:border-primary/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-2">Using the Editor</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/help/formatting" className="hover:text-primary">Formatting your resume</Link></li>
                <li><Link href="/help/sections" className="hover:text-primary">Adding and removing sections</Link></li>
                <li><Link href="/help/customization" className="hover:text-primary">Customizing templates</Link></li>
                <li><Link href="/help/ai-optimization" className="hover:text-primary">Using AI optimization</Link></li>
              </ul>
            </Card>

            <Card className="p-6 border-border hover:border-primary/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-2">Exporting & Sharing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/help/export-pdf" className="hover:text-primary">Exporting as PDF</Link></li>
                <li><Link href="/help/export-docx" className="hover:text-primary">Exporting as DOCX</Link></li>
                <li><Link href="/help/sharing" className="hover:text-primary">Sharing your resume</Link></li>
                <li><Link href="/help/print" className="hover:text-primary">Printing your resume</Link></li>
              </ul>
            </Card>

            <Card className="p-6 border-border hover:border-primary/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground mb-2">Account & Billing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/help/plans" className="hover:text-primary">Understanding plans</Link></li>
                <li><Link href="/help/upgrade" className="hover:text-primary">Upgrading your account</Link></li>
                <li><Link href="/help/billing" className="hover:text-primary">Managing billing</Link></li>
                <li><Link href="/help/cancel" className="hover:text-primary">Canceling your subscription</Link></li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Quick Help Options */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Book className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Documentation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive guides and tutorials
            </p>
            <Link href="/docs" className="text-primary hover:underline text-sm">
              Browse Docs →
            </Link>
          </Card>

          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Video className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Video Tutorials</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Step-by-step video guides
            </p>
            <Link href="/tutorials" className="text-primary hover:underline text-sm">
              Watch Videos →
            </Link>
          </Card>

          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get help from our support team
            </p>
            <Link href="/support" className="text-primary hover:underline text-sm">
              Get Support →
            </Link>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <FileQuestion className="inline h-5 w-5 mr-2 text-primary" />
                Is CVForge free to use?
              </h3>
              <p className="text-muted-foreground">
                Yes! CVForge offers a free plan with basic features. You can create up to 3 resumes and export them as PDF.
                Pro plans unlock unlimited resumes, AI optimization, and additional templates.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <FileQuestion className="inline h-5 w-5 mr-2 text-primary" />
                Can I import my existing resume?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! You can import resumes from PDF, DOCX files, or even directly from your LinkedIn profile.
                Our AI will automatically parse and structure your content.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <FileQuestion className="inline h-5 w-5 mr-2 text-primary" />
                Are the templates ATS-friendly?
              </h3>
              <p className="text-muted-foreground">
                Yes! All our templates are designed to be compatible with Applicant Tracking Systems (ATS). They use
                standard formatting and avoid complex layouts that ATS software might have trouble parsing.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <FileQuestion className="inline h-5 w-5 mr-2 text-primary" />
                How does the AI optimization work?
              </h3>
              <p className="text-muted-foreground">
                Our AI analyzes job descriptions to identify key skills and requirements. It then suggests improvements
                to your resume content to better match those requirements, increasing your chances of getting past ATS
                filters and impressing hiring managers.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
