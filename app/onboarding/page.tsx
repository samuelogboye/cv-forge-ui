"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Zap, Sparkles, ArrowRight } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const steps = [
    {
      title: "Welcome to CVForge",
      description: "Build a professional resume in minutes with AI assistance",
      icon: FileText,
      content: (
        <div className="space-y-6 text-center">
          <p className="text-lg text-muted-foreground">
            Whether you're starting fresh or improving an existing resume, we've got you covered.
          </p>
        </div>
      ),
    },
    {
      title: "How It Works",
      description: "Three simple steps to get started",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Choose a template</h4>
              <p className="text-sm text-muted-foreground">Pick from modern, professional designs</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Add your content</h4>
              <p className="text-sm text-muted-foreground">Fill in your experience and skills</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Use AI to optimize</h4>
              <p className="text-sm text-muted-foreground">Paste a job description to tailor your resume</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI-Powered Features",
      description: "Let AI help you shine",
      icon: Sparkles,
      content: (
        <div className="space-y-4">
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
            <p className="text-sm text-muted-foreground">
              Upload any job description and our AI will suggest improvements to match the role perfectly.
            </p>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
            <p className="text-sm text-muted-foreground">
              Rewrite bullet points, improve grammar, and enhance your content with AI assistance.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const currentStep = steps[step - 1]
  const Icon = currentStep.icon

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4">
      <Card className="w-full max-w-lg border border-border p-8">
        <div className="mb-8 flex justify-center">
          <div className="rounded-lg bg-primary/10 p-4">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground text-center mb-2">{currentStep.title}</h1>
        <p className="text-muted-foreground text-center mb-8">{currentStep.description}</p>

        <div className="mb-8">{currentStep.content}</div>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
              Back
            </Button>
          )}
          <Button
            onClick={() => {
              if (step < steps.length) {
                setStep(step + 1)
              } else {
                router.push("/dashboard")
              }
            }}
            className="flex-1 gap-2 bg-primary hover:bg-primary/90"
          >
            {step === steps.length ? "Get Started" : "Next"}
            {step === steps.length && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </Card>
    </main>
  )
}
