import Link from "next/link"
import { ArrowLeft, Target, Users, Lightbulb, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">About CVForge</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to help everyone create professional resumes that stand out and land their dream jobs.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Our Story</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              CVForge was founded in 2024 with a simple idea: creating a resume shouldn't be complicated or expensive.
              We noticed that job seekers were spending hours formatting their resumes, only to have them rejected by
              applicant tracking systems or overlooked by hiring managers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Combining cutting-edge AI technology with beautiful, professional templates, we've built a platform that
              makes it easy for anyone to create a resume that gets results. Whether you're a recent graduate, career
              changer, or seasoned professional, CVForge helps you put your best foot forward.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for excellence in everything we do, from our templates to our customer support.
              </p>
            </Card>

            <Card className="p-6 text-center border-border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">User-Centric</h3>
              <p className="text-sm text-muted-foreground">
                Our users are at the heart of every decision we make. Your success is our success.
              </p>
            </Card>

            <Card className="p-6 text-center border-border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We continuously innovate to provide the best resume building experience possible.
              </p>
            </Card>

            <Card className="p-6 text-center border-border">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Everyone deserves access to professional career tools, regardless of their background.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-Powered Optimization</h3>
              <p className="text-muted-foreground">
                Our advanced AI analyzes job descriptions and optimizes your resume to match, increasing your chances
                of landing an interview.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Professional Templates</h3>
              <p className="text-muted-foreground">
                Choose from a variety of ATS-friendly templates designed by professionals to make your resume stand out.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Easy to Use</h3>
              <p className="text-muted-foreground">
                No design skills required. Our intuitive interface makes it easy to create a professional resume in minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Join Thousands of Successful Job Seekers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start building your professional resume today and take the first step toward your dream career.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get Started Free
          </Link>
        </section>
      </div>
    </main>
  )
}
