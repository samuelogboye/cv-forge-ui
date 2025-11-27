"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Settings, CreditCard, LogOut, Home } from "lucide-react"

interface User {
  id: string
  email: string
  name: string
}

interface NavbarProps {
  authenticated?: boolean
}

export default function Navbar({ authenticated = false }: NavbarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const userData = localStorage.getItem("user")
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch {
        setUser(null)
      }
    }
  }, [])

  const isAuthPage = pathname?.includes("/login") || pathname?.includes("/signup") || pathname?.includes("/onboarding")
  const isDashboard =
    pathname?.includes("/dashboard") ||
    pathname?.includes("/editor") ||
    pathname?.includes("/settings") ||
    pathname?.includes("/billing") ||
    pathname?.includes("/import")

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    router.push("/login")
    setMenuOpen(false)
  }

  if (!mounted || isAuthPage) {
    return null
  }

  if (isDashboard && user) {
    return (
      <nav className="border-b border-border/40 bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              CF
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">CVForge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>

            <Link
              href="/billing"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/billing" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span className="text-sm">Plans</span>
            </Link>

            <Link
              href="/settings"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/settings" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="h-4 w-4" />
              <span className="text-sm">Settings</span>
            </Link>

            <Button onClick={handleLogout} variant="ghost" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {menuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>

              <Link
                href="/billing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <CreditCard className="h-4 w-4" />
                Plans
              </Link>

              <Link
                href="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    )
  }

  return (
    <nav className="border-b border-border/40 bg-card/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            CF
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">CVForge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Button variant="ghost" onClick={() => router.push("/login")}>
                Sign In
              </Button>
              <Button onClick={() => router.push("/signup")} className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Dashboard
              </Link>
              <Link href="/billing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Plans
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {menuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {!user ? (
              <>
                <Button
                  onClick={() => {
                    router.push("/login")
                    setMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => {
                    router.push("/signup")
                    setMenuOpen(false)
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/billing"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  Plans
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
