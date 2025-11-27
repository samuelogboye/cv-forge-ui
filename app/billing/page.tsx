"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check, Loader2, CreditCard } from "lucide-react"
import { billingApi } from "@/lib/api"

interface Plan {
  id: string
  name: string
  price: number
  period: "month" | "year"
  description: string
  features: string[]
  popular?: boolean
}

interface Subscription {
  id: string
  plan: string
  status: "active" | "canceled" | "past_due"
  currentPeriodEnd: string
  autoRenew: boolean
}

export default function BillingPage() {
  const router = useRouter()
  const [plans, setPlans] = useState<Plan[]>([])
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [upgrading, setUpgrading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
      return
    }

    fetchBillingData(token)
  }, [router])

  const fetchBillingData = async (token: string) => {
    try {
      const [plansData, subData] = await Promise.all([
        billingApi.getPlans(),
        billingApi.getSubscription(),
      ])

      setPlans(plansData.plans || [])
      setSubscription(subData.subscription || null)
    } catch (err) {
      console.error("Failed to fetch billing data:", err)
      setError("Failed to load billing information")
    } finally {
      setLoading(false)
    }
  }

  const handleUpgrade = async (planId: string) => {
    setUpgrading(true)
    setError("")

    try {
      const data = await billingApi.upgrade(planId)
      // Redirect to Stripe checkout
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upgrade failed")
    } finally {
      setUpgrading(false)
    }
  }

  const handleManageSubscription = async () => {
    setUpgrading(true)

    try {
      const data = await billingApi.getCustomerPortal()
      if (data.portalUrl) {
        window.location.href = data.portalUrl
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Portal access failed")
    } finally {
      setUpgrading(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Current Subscription */}
          {subscription && (
            <Card className="border border-accent/30 bg-accent/5 p-6 mb-12">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Current Plan</h2>
                  <p className="text-muted-foreground mb-1">
                    You are currently on the{" "}
                    <span className="font-semibold capitalize text-accent">{subscription.plan}</span> plan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {subscription.status === "active"
                      ? `Renews on ${new Date(subscription.currentPeriodEnd).toLocaleDateString()}`
                      : `Status: ${subscription.status}`}
                  </p>
                </div>
                <Button
                  onClick={handleManageSubscription}
                  disabled={upgrading}
                  variant="outline"
                  className="gap-2 bg-transparent"
                >
                  {upgrading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4" />
                      Manage
                    </>
                  )}
                </Button>
              </div>
            </Card>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-destructive/10 p-4 mb-12 text-sm text-destructive border border-destructive/30">
              {error}
            </div>
          )}

          {/* Plans */}
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Plan</h2>
              <p className="text-muted-foreground">Start free and upgrade anytime</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`border overflow-hidden transition-all ${
                    plan.popular ? "border-primary ring-2 ring-primary/20 lg:scale-105" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary/10 px-4 py-2 text-center">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">Popular</p>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">₦{plan.price.toLocaleString()}</span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>

                    <Button
                      onClick={() => handleUpgrade(plan.id)}
                      disabled={upgrading || subscription?.plan === plan.id}
                      className={`w-full mb-6 gap-2 ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                      }`}
                    >
                      {upgrading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : subscription?.plan === plan.id ? (
                        "Current Plan"
                      ) : (
                        "Choose Plan"
                      )}
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="border border-border p-8 mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I change my plan anytime?</h4>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground">
                  We accept all major credit cards and digital payment methods through Stripe.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you offer refunds?</h4>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with your plan.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Is there a free trial?</h4>
                <p className="text-muted-foreground">
                  Yes! Start with our free plan and upgrade to Pro or Expert whenever you're ready.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
