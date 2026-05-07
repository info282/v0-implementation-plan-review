"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Solo 2 Posti Disponibili Questo Trimestre</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          Smetti di Annegare nel{" "}
          <span className="text-primary">Caos Operativo</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty"
        >
          Soluzioni di automazione IA su misura che eliminano il lavoro manuale che consuma il tuo tempo e profitti. 
          Costruito per fondatori di SaaS di medio mercato che rifiutano soluzioni temporanee.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#lead-form">
              Richiedi la Tua Diagnosi Premium
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary px-8 py-6 text-lg"
            asChild
          >
            <a href="#calculator">Vedi i Tuoi Risparmi Potenziali</a>
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          Considerato affidabile dai fondatori di aziende che processano €1M-€50M ARR
        </motion.p>
      </div>
    </section>
  )
}
