"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Save, LogOut, Lock, User, Bell, Trash2, Loader2 } from "lucide-react"
import { userApi } from "@/lib/api"
import { toast } from "sonner"

interface UserProfile {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profile")
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Profile form
  const [name, setName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Preferences
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (!token) {
      router.push("/login")
      return
    }

    if (userData) {
      const parsed = JSON.parse(userData)
      setUser(parsed)
      setName(parsed.name || "")
    }

    fetchUserSettings(token)
  }, [router])

  const fetchUserSettings = async (token: string) => {
    try {
      const data = await userApi.getSettings()
      setEmailNotifications(data.settings?.emailNotifications ?? true)
      setWeeklyDigest(data.settings?.weeklyDigest ?? false)
    } catch (err) {
      console.error("Failed to fetch settings:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const data = await userApi.updateProfile({ name })
      setUser(data.user)
      localStorage.setItem("user", JSON.stringify(data.user))
      toast.success("Profile updated successfully")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed")
    } finally {
      setSaving(false)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setSaving(true)

    try {
      await userApi.changePassword(currentPassword, newPassword)
      toast.success("Password changed successfully")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Change failed")
    } finally {
      setSaving(false)
    }
  }

  const handleSavePreferences = async () => {
    setSaving(true)

    try {
      await userApi.updatePreferences({
        emailNotifications,
        weeklyDigest,
      })
      toast.success("Preferences updated successfully")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed")
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  const handleDeleteAccount = async () => {
    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return
    }

    setSaving(true)

    try {
      await userApi.deleteAccount()
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Account deleted successfully")
      router.push("/")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Deletion failed")
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Lock className="h-4 w-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Preferences</span>
              </TabsTrigger>
            </TabsList>

            {/* Messages */}
            {message && (
              <div className="rounded-lg bg-accent/10 p-4 text-sm text-accent border border-accent/30">{message}</div>
            )}

            {error && (
              <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive border border-destructive/30">
                {error}
              </div>
            )}

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Profile Information</h2>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || ""}
                        disabled
                        className="bg-muted text-muted-foreground"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Email cannot be changed</p>
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-foreground mb-2 block">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-input text-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Member Since</Label>
                    <p className="text-foreground">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>

                  <Button type="submit" disabled={saving} className="gap-2 bg-primary hover:bg-primary/90">
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              <Card className="border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Danger Zone</h3>
                <Button onClick={handleLogout} variant="outline" className="gap-2 mb-4 bg-transparent">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Change Password</h2>

                <form onSubmit={handleChangePassword} className="space-y-6">
                  <div>
                    <Label htmlFor="current-password" className="text-foreground mb-2 block">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="bg-input text-foreground"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="new-password" className="text-foreground mb-2 block">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="bg-input text-foreground"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirm-password" className="text-foreground mb-2 block">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-input text-foreground"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={saving} className="gap-2 bg-primary hover:bg-primary/90">
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4" />
                        Update Password
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              <Card className="border border-destructive/30 bg-destructive/5 p-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">Delete Account</h3>
                <p className="text-sm text-destructive/80 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button
                  onClick={handleDeleteAccount}
                  disabled={saving}
                  variant="outline"
                  className="gap-2 border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </Button>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card className="border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Email Preferences</h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="h-4 w-4 rounded border-border"
                    />
                    <div>
                      <p className="font-medium text-foreground">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about your CVs and account activity
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={weeklyDigest}
                      onChange={(e) => setWeeklyDigest(e.target.checked)}
                      className="h-4 w-4 rounded border-border"
                    />
                    <div>
                      <p className="font-medium text-foreground">Weekly Digest</p>
                      <p className="text-sm text-muted-foreground">
                        Get a weekly summary of CV updates and AI suggestions
                      </p>
                    </div>
                  </label>

                  <Button
                    onClick={handleSavePreferences}
                    disabled={saving}
                    className="gap-2 mt-6 bg-primary hover:bg-primary/90"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save Preferences
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
