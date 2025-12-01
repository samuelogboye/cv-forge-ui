"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Plus, Sparkles, Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"
import ImportModal from "@/components/import-modal"
import { cvApi, aiApi } from "@/lib/api"
import { toast } from "sonner"

export default function EditorPage() {
  const router = useRouter()
  const params = useParams()
  const cvId = params.id as string
  const [cv, setCv] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState("")
  const [template, setTemplate] = useState("modern")
  const [jdInput, setJdInput] = useState("")
  const [aiLoading, setAiLoading] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
      return
    }

    if (cvId !== "new") {
      fetchCV(cvId)
    } else {
      setLoading(false)
    }
  }, [router, cvId])

  const fetchCV = async (id: string) => {
    try {
      const data = await cvApi.getById(id)
      console.log("data", data)
      setCv(data.cv)
      setContent(data.cv.content || "")
      setTemplate(data.cv.template || "modern")
    } catch (err) {
      console.error("Failed to fetch CV:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleOptimizeWithAI = async () => {
    if (!jdInput.trim()) {
      toast.error("Please paste a job description")
      return
    }

    setAiLoading(true)

    try {
      const data = await aiApi.optimize(content, jdInput)
      setContent(data.optimizedContent)
      setJdInput("")
      toast.success("Resume optimized successfully!")
    } catch (err) {
      console.error("Failed to optimize CV:", err)
      toast.error("Failed to optimize CV")
    } finally {
      setAiLoading(false)
    }
  }

  const handleSave = async () => {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const cvData = {
        title: cv?.title || "My Resume",
        content,
        template,
      }

      if (cvId === "new") {
        const data = await cvApi.create(cvData)
        toast.success("CV saved successfully!")
        router.push(`/editor/${data.id}`)
      } else {
        console.log("cvData", cvData)
        await cvApi.update(cvId, cvData)
        toast.success("CV updated successfully!")
      }
    } catch (err) {
      console.error("Failed to save CV:", err)
      toast.error("Failed to save CV. Please try again.")
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
            <Button onClick={handleSave} size="sm" className="bg-primary hover:bg-primary/90">
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Editor Panel */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-border p-6">
            <div className="space-y-4">
              <div>
                <Label className="text-foreground font-semibold mb-2 block">Resume Title</Label>
                <Input
                  value={cv?.title || "My Resume"}
                  onChange={(e) => setCv({ ...cv, title: e.target.value })}
                  className="bg-input text-foreground"
                  placeholder="e.g., Software Engineer Resume"
                />
              </div>

              <div>
                <Label className="text-foreground font-semibold mb-2 block">Select Template</Label>
                <select
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  className="w-full rounded-lg border border-border bg-input px-4 py-2 text-foreground"
                >
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
            </div>
          </Card>

          <Card className="border border-border p-6">
            <Label className="text-foreground font-semibold mb-4 block">Resume Content</Label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-96 rounded-lg border border-border bg-input p-4 text-foreground font-mono text-sm resize-none"
              placeholder="Your resume content here..."
            />
          </Card>
        </div>

        {/* AI Assistant Sidebar */}
        <div className="space-y-6">
          <Card className="border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">AI Optimizer</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Paste a job description below to optimize your resume for the role
            </p>
            <textarea
              value={jdInput}
              onChange={(e) => setJdInput(e.target.value)}
              className="w-full h-32 rounded-lg border border-border bg-background p-3 text-foreground text-sm resize-none mb-4"
              placeholder="Paste job description here..."
            />
            <Button
              onClick={handleOptimizeWithAI}
              disabled={aiLoading}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              {aiLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Optimize Resume
                </>
              )}
            </Button>
          </Card>

          <Card className="border border-border p-6">
            <Label className="text-foreground font-semibold mb-4 block">Quick Actions</Label>
            <div className="space-y-2">
              <Button
                onClick={() => setShowImportModal(true)}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
              >
                <Upload className="h-4 w-4" />
                Import from File
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
                <Plus className="h-4 w-4" />
                Add Section
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Import Modal for quick file uploads */}
      <ImportModal open={showImportModal} onOpenChange={setShowImportModal} />
    </main>
  )
}
