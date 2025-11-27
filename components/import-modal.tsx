"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"
import { importApi } from "@/lib/api"

interface ImportModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ImportModal({ open, onOpenChange }: ImportModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFileUpload = async (file: File) => {
    setLoading(true)
    setError("")

    try {
      const data = await importApi.parseDocument(file)
      // Store parsed data in session and reload editor
      sessionStorage.setItem("importedData", JSON.stringify(data.parsedData))
      window.location.reload()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Content from File</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {error && <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <Input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              disabled={loading}
              className="hidden"
              id="quick-import"
            />
            <label htmlFor="quick-import" className="cursor-pointer block">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-semibold text-foreground">{loading ? "Processing..." : "Click to upload"}</p>
            </label>
          </div>

          <Button onClick={() => onOpenChange(false)} variant="outline" className="w-full">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
