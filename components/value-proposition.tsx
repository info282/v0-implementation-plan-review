"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Clock, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Elimina l'Attrito dei Dati",
    description: "Smetti di copiare dati tra i tuoi strumenti. Costruiamo pipeline intelligenti che spostano le informazioni esattamente dove devono andare."
  },
  {
    icon: Clock,
    title: "Recupera 20+ Ore/Settimana",
    description: "Il tuo team sta facendo lavoro ripetitivo che l'IA può gestire. Liberali per concentrarsi sulla crescita, non su compiti banali."
  },
  {
    icon: TrendingUp,
    title: "Scala Senza Aumentare il Personale",
    description: "Raddoppia il tuo output senza raddoppiare il tuo team. Automazione che cresce con il tuo business."
  },
  {
    icon: Shield,
    title: "Niente Più Errori Umani",
    description: "I controlli di qualità automatizzati e la convalida garantiscono accuratezza ogni volta, senza l'ansia."
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
            Perché i Fondatori Scelgono Cerbo Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Non vendiamo software. Architattiamo sistemi che trasformano il modo in cui opera il tuo business.
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
