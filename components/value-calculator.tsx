"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign } from "lucide-react"

export function ValueCalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [hourlyRate, setHourlyRate] = useState(75)
  const [hoursPerWeek, setHoursPerWeek] = useState(15)

  const weeklySavings = hourlyRate * hoursPerWeek
  const annualSavings = weeklySavings * 52

  return (
    <section id="calculator" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Calcolatore ROI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Calcola i Tuoi Risparmi Potenziali
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vedi quanto tempo e denaro potresti risparmiare automatizzando compiti ripetitivi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-10">
            {/* Hourly Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-medium">Tariffa Oraria Media del Tempo Risparmiato</label>
                <span className="text-2xl font-bold text-primary">€{hourlyRate}/ora</span>
              </div>
              <Slider
                value={[hourlyRate]}
                onValueChange={(value) => setHourlyRate(value[0])}
                min={25}
                max={200}
                step={5}
                className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>€25/ora</span>
                <span>€200/ora</span>
              </div>
            </div>

            {/* Hours Per Week Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-medium">Ore di Lavoro Manuale Eliminate Settimanalmente</label>
                <span className="text-2xl font-bold text-primary">{hoursPerWeek} ore</span>
              </div>
              <Slider
                value={[hoursPerWeek]}
                onValueChange={(value) => setHoursPerWeek(value[0])}
                min={5}
                max={40}
                step={1}
                className="[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>5 ore/settimana</span>
                <span>40 ore/settimana</span>
              </div>
            </div>

            {/* Results */}
            <div className="pt-8 border-t border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <p className="text-muted-foreground mb-2">Risparmi Settimanali</p>
                  <p className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-1">
                    <DollarSign className="w-8 h-8" />
                    {weeklySavings.toLocaleString()}
                  </p>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/30">
                  <p className="text-muted-foreground mb-2">Risparmi Annuali</p>
                  <p className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-1">
                    <DollarSign className="w-8 h-8" />
                    {annualSavings.toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Basato su {hoursPerWeek} ore/settimana a €{hourlyRate}/ora in 52 settimane
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
