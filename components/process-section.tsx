"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileSearch, Lightbulb, Wrench, Rocket } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Chiamata di Scoperta",
    description: "Una conversazione di 30 minuti per comprendere i tuoi punti critici, obiettivi e stack tecnologico attuale. Niente pressioni, solo chiarezza."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Diagnosi Premium",
    description: "Audit approfondito delle tue operazioni. Identifichiamo ogni opportunità di automazione e quantifichiamo l'impatto potenziale."
  },
  {
    icon: Wrench,
    step: "03",
    title: "Roadmap Personalizzata",
    description: "Ricevi un piano d'azione prioritizzato con timeline chiare, ROI previsto e raccomandazioni di implementazione."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Implementazione",
    description: "Scegli di implementare da solo con la nostra roadmap, oppure lascia che costruiamo e distribuiamo le soluzioni per te."
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
            Come Funziona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un processo diretto progettato per rispettare il tuo tempo mentre offre il massimo insight.
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
