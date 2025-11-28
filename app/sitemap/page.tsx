import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SitemapPage() {
  const links = {
    "Product": [
      { name: "Features", href: "/features" },
      { name: "Templates", href: "/templates" },
      { name: "Pricing", href: "/billing" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Import Resume", href: "/import" },
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press Kit", href: "/press" },
    ],
    "Support": [
      { name: "Help Center", href: "/help" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    "Account": [
      { name: "Sign Up", href: "/signup" },
      { name: "Login", href: "/login" },
      { name: "Settings", href: "/settings" },
      { name: "Billing", href: "/billing" },
    ],
    "Resources": [
      { name: "Sitemap", href: "/sitemap" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "Security", href: "/security" },
    ],
  }

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

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sitemap</h1>
          <p className="text-xl text-muted-foreground">
            Navigate through all pages on CVForge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(links).map(([category, items]) => (
            <Card key={category} className="p-6 border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">{category}</h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
