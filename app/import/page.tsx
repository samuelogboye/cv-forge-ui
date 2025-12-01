"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Linkedin, Loader2, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import { importApi } from "@/lib/api"
import { toast } from "sonner"

interface ParsedData {
  name?: string
  email?: string
  phone?: string
  summary?: string
  experience?: Array<{ title: string; company: string; duration: string }>
  education?: Array<{ degree: string; school: string; year: string }>
  skills?: string[]
}

export default function ImportPage() {
  const router = useRouter()
  const [importMethod, setImportMethod] = useState<"pdf" | "docx" | "linkedin" | "text">("pdf")
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [parsedData, setParsedData] = useState<ParsedData | null>(null)
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [textInput, setTextInput] = useState("")

  const handleFileUpload = async (file: File) => {
    if (!file) return

    setLoading(true)
    setParsedData(null)
    setUploadProgress(0)

    try {
      // Note: Progress tracking is not available with the centralized API
      // If progress tracking is needed, consider enhancing the importApi.parseDocument method
      const data = await importApi.parseDocument(file)
      setParsedData(data.parsedData)
      toast.success("File uploaded and parsed successfully!")
      setUploadProgress(100)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setLoading(false)
    }
  }

  const handleTextParse = async () => {
    if (!textInput.trim()) {
      toast.error("Please paste some text")
      return
    }

    setLoading(true)
    setParsedData(null)

    try {
      const data = await importApi.parseText(textInput)
      setParsedData(data.parsedData)
      toast.success("Text parsed successfully!")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Parse failed")
    } finally {
      setLoading(false)
    }
  }

  const handleLinkedinImport = async () => {
    if (!linkedinUrl.trim()) {
      toast.error("Please enter a LinkedIn URL")
      return
    }

    setLoading(true)
    setParsedData(null)

    try {
      const data = await importApi.linkedIn(linkedinUrl)
      setParsedData(data.parsedData)
      toast.success("LinkedIn profile imported successfully!")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Import failed")
    } finally {
      setLoading(false)
    }
  }

  const handleCreateCV = () => {
    if (parsedData) {
      sessionStorage.setItem("importedData", JSON.stringify(parsedData))
      router.push("/editor/new")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Import Your Resume</h2>
            <p className="text-muted-foreground">Choose how you want to import your existing resume data</p>
          </div>

          <Tabs value={importMethod} onValueChange={(v) => setImportMethod(v as any)} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="pdf" className="gap-2 text-xs sm:text-sm">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">PDF</span>
              </TabsTrigger>
              <TabsTrigger value="docx" className="gap-2 text-xs sm:text-sm">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">DOCX</span>
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="gap-2 text-xs sm:text-sm">
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="gap-2 text-xs sm:text-sm">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Text</span>
              </TabsTrigger>
            </TabsList>

            {/* PDF Upload */}
            <TabsContent value="pdf" className="space-y-4">
              <Card className="border-2 border-dashed border-border p-8 text-center hover:border-primary/50 transition-colors">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  disabled={loading}
                  className="hidden"
                  id="pdf-upload"
                />
                <label htmlFor="pdf-upload" className="cursor-pointer block">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {loading ? "Uploading..." : "Click to upload PDF"}
                  </p>
                  <p className="text-sm text-muted-foreground">or drag and drop</p>
                </label>
              </Card>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${uploadProgress}%` }} />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{Math.round(uploadProgress)}%</p>
                </div>
              )}
            </TabsContent>

            {/* DOCX Upload */}
            <TabsContent value="docx" className="space-y-4">
              <Card className="border-2 border-dashed border-border p-8 text-center hover:border-primary/50 transition-colors">
                <Input
                  type="file"
                  accept=".docx"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  disabled={loading}
                  className="hidden"
                  id="docx-upload"
                />
                <label htmlFor="docx-upload" className="cursor-pointer block">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {loading ? "Uploading..." : "Click to upload DOCX"}
                  </p>
                  <p className="text-sm text-muted-foreground">or drag and drop</p>
                </label>
              </Card>
            </TabsContent>

            {/* LinkedIn Import */}
            <TabsContent value="linkedin" className="space-y-4">
              <Card className="border border-border p-6">
                <Label className="text-foreground font-semibold mb-3 block">LinkedIn Profile URL</Label>
                <div className="space-y-4">
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    disabled={loading}
                    className="bg-input text-foreground"
                  />
                  <Button
                    onClick={handleLinkedinImport}
                    disabled={loading || !linkedinUrl.trim()}
                    className="w-full gap-2 bg-primary hover:bg-primary/90"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Importing...
                      </>
                    ) : (
                      <>
                        <Linkedin className="h-4 w-4" />
                        Import from LinkedIn
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Text Input */}
            <TabsContent value="text" className="space-y-4">
              <Card className="border border-border p-6">
                <Label className="text-foreground font-semibold mb-3 block">Paste Your Resume Text</Label>
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  disabled={loading}
                  className="w-full h-64 rounded-lg border border-border bg-input p-4 text-foreground resize-none"
                  placeholder="Paste your resume text here..."
                />
                <Button
                  onClick={handleTextParse}
                  disabled={loading || !textInput.trim()}
                  className="w-full mt-4 gap-2 bg-primary hover:bg-primary/90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Parsing...
                    </>
                  ) : (
                    <>
                      <FileText className="h-4 w-4" />
                      Parse Text
                    </>
                  )}
                </Button>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Error State */}
          {error && (
            <Card className="border border-destructive/30 bg-destructive/5 p-4 mt-6">
              <div className="flex gap-3 items-start">
                <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-destructive">Error</p>
                  <p className="text-sm text-destructive/80">{error}</p>
                </div>
              </div>
            </Card>
          )}

          {/* Success State - Parsed Data Preview */}
          {success && parsedData && (
            <Card className="border border-accent/30 bg-accent/5 p-6 mt-6 space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Resume Imported Successfully</h3>
              </div>

              <div className="space-y-4">
                {parsedData.name && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">NAME</p>
                    <p className="text-foreground">{parsedData.name}</p>
                  </div>
                )}

                {(parsedData.email || parsedData.phone) && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">CONTACT</p>
                    <div className="space-y-1">
                      {parsedData.email && <p className="text-foreground">{parsedData.email}</p>}
                      {parsedData.phone && <p className="text-foreground">{parsedData.phone}</p>}
                    </div>
                  </div>
                )}

                {parsedData.summary && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">SUMMARY</p>
                    <p className="text-foreground text-sm">{parsedData.summary}</p>
                  </div>
                )}

                {parsedData.experience && parsedData.experience.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">EXPERIENCE</p>
                    <div className="space-y-3">
                      {parsedData.experience.map((exp, i) => (
                        <div key={i} className="rounded-lg border border-border bg-card p-3">
                          <p className="font-semibold text-foreground">{exp.title}</p>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {parsedData.skills && parsedData.skills.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">SKILLS</p>
                    <div className="flex flex-wrap gap-2">
                      {parsedData.skills.map((skill, i) => (
                        <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button onClick={handleCreateCV} className="w-full gap-2 bg-accent hover:bg-accent/90">
                Create CV with This Data
              </Button>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}
