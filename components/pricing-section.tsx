"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Premium Diagnostic",
    price: "$1,500",
    description: "One-time comprehensive audit of your operations",
    features: [
      "Full operational workflow audit",
      "Custom automation roadmap",
      "ROI projection for each opportunity",
      "Priority recommendation ranking",
      "90-minute strategy session",
      "NDA-protected deliverables"
    ],
    cta: "Request Diagnostic",
    highlighted: true
  },
  {
    name: "Ongoing Partnership",
    price: "Custom",
    description: "Monthly retainer for continuous optimization",
    features: [
      "Everything in Premium Diagnostic",
      "Implementation support",
      "Monthly optimization reviews",
      "Dedicated Slack channel",
      "Priority bug fixes",
      "Quarterly strategy sessions"
    ],
    cta: "Discuss Partnership",
    highlighted: false
  },
  {
    name: "Enterprise Solutions",
    price: "Let&apos;s Talk",
    description: "Full-scale transformation for growing teams",
    features: [
      "Multi-department automation",
      "Custom AI model training",
      "API integration development",
      "On-site implementation",
      "Team training sessions",
      "24/7 support SLA"
    ],
    cta: "Contact Us",
    highlighted: false
  }
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Investment Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the engagement level that matches your needs. Every engagement starts with understanding your unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price === "$1,500" && <span className="text-muted-foreground">/audit</span>}
                </div>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                asChild
              >
                <a href="#lead-form">
                  {tier.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
