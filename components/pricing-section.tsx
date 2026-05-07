"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Diagnosi Premium",
    price: "€1.500",
    description: "Audit completo e unico delle tue operazioni",
    features: [
      "Audit completo del workflow operativo",
      "Roadmap di automazione personalizzata",
      "Proiezione ROI per ogni opportunità",
      "Ranking prioritario delle raccomandazioni",
      "Sessione strategica di 90 minuti",
      "Deliverables protetti da NDA"
    ],
    cta: "Richiedi Diagnosi",
    highlighted: true
  },
  {
    name: "Partnership Continua",
    price: "Personalizzato",
    description: "Retainer mensile per l'ottimizzazione continua",
    features: [
      "Tutto nella Diagnosi Premium",
      "Supporto implementazione",
      "Revisioni di ottimizzazione mensili",
      "Canale Slack dedicato",
      "Bug fix prioritari",
      "Sessioni strategiche trimestrali"
    ],
    cta: "Discuti Partnership",
    highlighted: false
  },
  {
    name: "Soluzioni Enterprise",
    price: "Parliamone",
    description: "Trasformazione su larga scala per team in crescita",
    features: [
      "Automazione multi-dipartimento",
      "Training di modelli IA personalizzati",
      "Sviluppo integrazione API",
      "Implementazione on-site",
      "Sessioni di training per il team",
      "SLA supporto 24/7"
    ],
    cta: "Contattaci",
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
            Opzioni di Investimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Scegli il livello di engagement che si adatta alle tue esigenze. Ogni engagement inizia con la comprensione delle tue sfide uniche.
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
                  Più Popolare
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price === "€1.500" && <span className="text-muted-foreground">/audit</span>}
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
