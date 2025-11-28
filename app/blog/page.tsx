import Link from "next/link"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Tips for Writing an ATS-Friendly Resume",
      excerpt: "Learn how to optimize your resume to pass through Applicant Tracking Systems and land more interviews.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Resume Tips",
      slug: "ats-friendly-resume-tips"
    },
    {
      title: "How to Use AI to Improve Your Resume",
      excerpt: "Discover how artificial intelligence can help you create a more compelling and targeted resume.",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "AI & Technology",
      slug: "ai-resume-improvement"
    },
    {
      title: "The Dos and Don'ts of Resume Design",
      excerpt: "Master the art of resume formatting with these essential design principles.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Design",
      slug: "resume-design-guide"
    },
    {
      title: "Career Change? Here's How to Pivot Your Resume",
      excerpt: "Expert advice on highlighting transferable skills when switching careers.",
      author: "David Kim",
      date: "2023-12-28",
      category: "Career Advice",
      slug: "career-change-resume"
    },
    {
      title: "Remote Work Resumes: What to Include",
      excerpt: "Showcase your remote work skills and stand out in the digital job market.",
      author: "Sarah Johnson",
      date: "2023-12-20",
      category: "Remote Work",
      slug: "remote-work-resume"
    },
    {
      title: "Common Resume Mistakes to Avoid in 2024",
      excerpt: "Don't let these common errors cost you your dream job.",
      author: "Michael Chen",
      date: "2023-12-15",
      category: "Resume Tips",
      slug: "resume-mistakes-2024"
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
          <h1 className="text-4xl font-bold text-foreground mb-4">CVForge Blog</h1>
          <p className="text-xl text-muted-foreground">
            Tips, guides, and insights to help you build a better resume and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden border-border hover:border-primary/50 transition-colors group">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More articles coming soon. Subscribe to our newsletter to stay updated!
          </p>
        </div>
      </div>
    </main>
  )
}
