"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, FileText, Sparkles } from "lucide-react"

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Resume Building</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Build Your Perfect Resume in Minutes
          </h1>

          <p className="mb-12 text-xl text-muted-foreground text-balance">
            CVForge uses AI to help you create, optimize, and tailor your resume for any job. Upload a job description,
            and we'll help you shine.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
            <Button
              size="lg"
              onClick={() => router.push("/signup")}
              className="gap-2 bg-primary hover:bg-primary/90 text-lg"
            >
              Start Building Free <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg bg-transparent"
              onClick={() => router.push("/templates")}
            >
              View Templates
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-accent/10 p-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">AI-Powered</h3>
            <p className="text-muted-foreground">Let AI optimize your resume for any job description in seconds.</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-accent/10 p-3">
                <FileText className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Modern Templates</h3>
            <p className="text-muted-foreground">Choose from professionally designed templates that work everywhere.</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-accent/10 p-3">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Easy Export</h3>
            <p className="text-muted-foreground">Export as PDF, DOCX, or Markdown instantly with perfect formatting.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
