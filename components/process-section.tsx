"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileSearch, Lightbulb, Wrench, Rocket } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Discovery Call",
    description: "A 30-minute conversation to understand your pain points, goals, and current tech stack. No pressure, just clarity."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Premium Diagnostic",
    description: "Deep-dive audit of your operations. We identify every automation opportunity and quantify the potential impact."
  },
  {
    icon: Wrench,
    step: "03",
    title: "Custom Roadmap",
    description: "Receive a prioritized action plan with clear timelines, expected ROI, and implementation recommendations."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Implementation",
    description: "Choose to implement yourself with our roadmap, or let us build and deploy the solutions for you."
  }
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A straightforward process designed to respect your time while delivering maximum insight.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number with icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-3 relative z-10">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
