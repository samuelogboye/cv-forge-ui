"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      <div className="lg:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-card/50 backdrop-blur-xl px-4 py-3 lg:hidden">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <span className="text-sm font-semibold text-foreground">Menu</span>
        </div>

        {children}
      </div>
    </div>
  )
}
