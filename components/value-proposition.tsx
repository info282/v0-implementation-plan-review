"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Clock, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Eliminate Data Friction",
    description: "Stop copying data between tools. We build intelligent pipelines that move information exactly where it needs to go."
  },
  {
    icon: Clock,
    title: "Reclaim 20+ Hours/Week",
    description: "Your team is doing repetitive work that AI can handle. Free them to focus on growth, not grunt work."
  },
  {
    icon: TrendingUp,
    title: "Scale Without Headcount",
    description: "Double your output without doubling your team. Automation that grows with your business."
  },
  {
    icon: Shield,
    title: "No More Human Error",
    description: "Automated quality checks and validation ensure accuracy every time, without the anxiety."
  }
]

export function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Founders Choose Thorne AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We don&apos;t sell software. We architect systems that transform how your business operates.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
