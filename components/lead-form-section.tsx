"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  role: string
  challenge: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
}

export function LeadFormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    challenge: ""
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Il nome è obbligatorio"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Per favore inserisci un email valida"
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Il nome dell'azienda è obbligatorio"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      challenge: ""
    })
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <>
      <section id="lead-form" className="py-24 px-4 bg-secondary/30" ref={ref}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Solo 2 Posti Disponibili</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Richiedi la Tua Diagnosi Premium
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Raccontaci le tue sfide. Ti contatteremo entro 24 ore per programmare la tua sessione strategica.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Giovanni Rossi"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email di Lavoro *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="giovanni@azienda.it"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Nome Azienda *</Label>
                <Input
                  id="company"
                  placeholder="Acme S.r.l."
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && (
                  <p className="text-sm text-destructive">{errors.company}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Il Tuo Ruolo</Label>
                <Input
                  id="role"
                  placeholder="CEO, COO, VP Operazioni..."
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge">Quale è la tua più grande sfida operativa?</Label>
              <Textarea
                id="challenge"
                placeholder="Raccontaci i processi manuali, i colli di bottiglia, o le inefficienze che stanno ostacolando il tuo team..."
                value={formData.challenge}
                onChange={(e) => handleChange("challenge", e.target.value)}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
            >
              {isSubmitting ? (
                "Invio in corso..."
              ) : (
                <>
                  Richiedi la Tua Diagnosi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Inviando il modulo accetti la nostra Politica sulla Privacy. Non condivideremo mai le tue informazioni.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Grazie!</DialogTitle>
            <DialogDescription className="text-base">
              La tua richiesta è stata ricevuta. Esamineremo il tuo modulo e ti contatteremo entro 24 ore per programmare la tua sessione di Diagnosi Premium.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 space-y-4">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm font-medium mb-1">Cosa succede ora?</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>1. Esamineremo il tuo modulo</li>
                <li>2. Un membro del team ti contatterà via email</li>
                <li>3. Programmeremo la tua chiamata strategica</li>
              </ul>
            </div>
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Chiudi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
