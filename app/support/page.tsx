"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Headphones, Mail, MessageCircle, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SupportPage() {
  const [ticketSubmitted, setTicketSubmitted] = useState(false)

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    setTicketSubmitted(true)
    setTimeout(() => setTicketSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Technical Support</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help you get the most out of CVForge
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat with our support team in real-time
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Available Mon-Fri, 9am-6pm PST
            </p>
            <Button variant="outline" className="w-full">
              Start Chat
            </Button>
          </Card>

          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send us an email and we'll respond within 24 hours
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              support@cvforge.com
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="mailto:support@cvforge.com">Send Email</a>
            </Button>
          </Card>

          <Card className="p-6 text-center border-border">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Call us for urgent issues (Pro plan only)
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              +1 (555) 123-4567
            </p>
            <Button variant="outline" className="w-full">
              Call Now
            </Button>
          </Card>
        </div>

        {/* Submit a Ticket */}
        <Card className="p-8 border-border mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Submit a Support Ticket</h2>

          {ticketSubmitted && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
              Ticket submitted successfully! We'll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmitTicket} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Issue Category</Label>
              <select
                id="category"
                required
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a category</option>
                <option value="account">Account & Login</option>
                <option value="billing">Billing & Subscription</option>
                <option value="technical">Technical Issue</option>
                <option value="editor">Editor Problems</option>
                <option value="export">Export Issues</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" required className="mt-2" />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                required
                rows={6}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please provide as much detail as possible about your issue..."
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Ticket
            </Button>
          </form>
        </Card>

        {/* Support Hours */}
        <Card className="p-6 border-border bg-primary/5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Support Hours</h3>
              <div className="space-y-1 text-muted-foreground">
                <p><strong>Live Chat & Phone:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST</p>
                <p><strong>Email:</strong> 24/7 (response within 24 hours)</p>
                <p><strong>Emergency Support:</strong> Available for Enterprise customers</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Looking for something else?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/help" className="text-primary hover:underline">
              Visit Help Center
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              General Contact
            </Link>
            <Link href="/billing" className="text-primary hover:underline">
              Billing Questions
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
