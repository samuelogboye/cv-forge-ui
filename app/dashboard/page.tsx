"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, LogOut, FileText, Clock, Download, Edit2, Settings, CreditCard } from "lucide-react"
import Link from "next/link"
import { cvApi } from "@/lib/api"

interface CV {
  id: string
  title: string
  template: string
  createdAt: string
  updatedAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [cvs, setCvs] = useState<CV[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (!token) {
      router.push("/login")
      return
    }

    setUser(userData ? JSON.parse(userData) : null)
    fetchCVs(token)
  }, [router])

  const fetchCVs = async (token: string) => {
    try {
      const data = await cvApi.getAll()
      setCvs(data.cvs || [])
    } catch (err) {
      console.error("Failed to fetch CVs:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navbar */}
      <nav className="border-b border-border/40 bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              CF
            </div>
            <span className="text-xl font-bold text-foreground">CVForge</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => router.push("/billing")} className="gap-2">
              <CreditCard className="h-4 w-4" />
              Plans
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push("/settings")} className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your Resumes</h1>
              <p className="mt-2 text-muted-foreground">Manage and edit your CVs</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => router.push("/import")} className="gap-2">
                <Plus className="h-4 w-4" />
                Import
              </Button>
              <Button onClick={() => router.push("/editor/new")} className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                New Resume
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading your resumes...</p>
            </div>
          ) : cvs.length === 0 ? (
            <Card className="border border-dashed border-border p-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No resumes yet</h3>
              <p className="text-muted-foreground mb-6">Get started by creating your first resume</p>
              <div className="flex gap-3 justify-center">
                <Button onClick={() => router.push("/editor/new")} className="gap-2 bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Create Resume
                </Button>
                <Button variant="outline" onClick={() => router.push("/import")} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Import Resume
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cvs.map((cv) => (
                <Card
                  key={cv.id}
                  className="border border-border overflow-hidden hover:border-primary/50 transition-colors group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-1">{cv.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 capitalize">{cv.template} template</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3" />
                      Updated {new Date(cv.updatedAt).toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => router.push(`/editor/${cv.id}`)}
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                      >
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
