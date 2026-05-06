"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Thorne AI completely transformed our onboarding process. What used to take our team 6 hours per client now takes 20 minutes. The ROI was obvious within the first month.",
    name: "Sarah Chen",
    title: "COO, DataFlow Analytics",
    metric: "95% time reduction"
  },
  {
    quote: "I was skeptical at first, but the Premium Diagnostic alone paid for itself. They found automation opportunities we had completely overlooked for years.",
    name: "Marcus Rodriguez",
    title: "Founder, ScaleOps",
    metric: "$180K saved annually"
  },
  {
    quote: "The attention to detail is unmatched. They didn&apos;t just automate our workflows—they redesigned them to be smarter. Our error rate dropped to near zero.",
    name: "Jennifer Park",
    title: "VP Operations, TechBridge",
    metric: "99.8% accuracy"
  }
]

export function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Founders Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results from founders who took the leap.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-foreground mb-6 flex-grow">{testimonial.quote}</p>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonial.metric}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
