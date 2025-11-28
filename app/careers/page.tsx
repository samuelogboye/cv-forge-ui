import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build the future of resume building technology with our talented engineering team."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences that help people showcase their best selves."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our users achieve their career goals and build lasting relationships."
    },
    {
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling content that educates and inspires job seekers."
    }
  ]

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Unlimited PTO",
    "Remote-first culture",
    "Learning & development budget",
    "Home office stipend",
    "401(k) matching",
    "Parental leave"
  ]

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build the future of career development and empower millions of people to achieve their professional goals.
          </p>
        </div>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Why CVForge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Mission-Driven</h3>
              <p className="text-muted-foreground">
                We're passionate about helping people land their dream jobs and build fulfilling careers.
              </p>
            </Card>
            <Card className="p-6 border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                Work with cutting-edge AI technology and modern development practices.
              </p>
            </Card>
            <Card className="p-6 border-border text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                We believe in sustainable work practices and taking care of our team.
              </p>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{position.title}</h3>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button>
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Benefits & Perks</h2>
          <Card className="p-8 border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Don't See the Right Role?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us why you'd be a great fit for CVForge.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:careers@cvforge.com">
              Contact Us
            </a>
          </Button>
        </section>
      </div>
    </main>
  )
}
