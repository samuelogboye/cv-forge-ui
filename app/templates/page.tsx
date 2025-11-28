import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TemplatesPage() {
  const templates = [
    {
      id: "modern",
      name: "Modern Professional",
      description: "Clean and contemporary design perfect for tech and creative roles",
      category: "Professional"
    },
    {
      id: "classic",
      name: "Classic Traditional",
      description: "Time-tested format ideal for corporate and formal positions",
      category: "Professional"
    },
    {
      id: "minimal",
      name: "Minimal Clean",
      description: "Simple and elegant design that puts content first",
      category: "Minimal"
    },
    {
      id: "creative",
      name: "Creative Bold",
      description: "Eye-catching layout for designers and creative professionals",
      category: "Creative"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior-level positions",
      category: "Professional"
    },
    {
      id: "academic",
      name: "Academic CV",
      description: "Comprehensive format for researchers and academics",
      category: "Academic"
    }
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Resume Templates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our collection of professional, ATS-friendly resume templates designed to help you stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
              {/* Template Preview */}
              <div className="aspect-[8.5/11] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center border-b border-border">
                <FileText className="h-24 w-24 text-muted-foreground" />
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{template.name}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link href={`/editor/new?template=${template.id}`}>
                      Use Template
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/preview/${template.id}`}>
                      Preview
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-lg p-12 border border-primary/20">
          <h2 className="text-2xl font-semibold text-foreground mb-4">All Templates Are Included</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get access to all templates with any plan. Customize colors, fonts, and layouts to match your personal brand.
          </p>
          <Link href="/signup">
            <Button size="lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
