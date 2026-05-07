"use client"

import { Sparkles } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-semibold">Cerbo Solutions</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#calculator" className="hover:text-foreground transition-colors">
              Calcolatore ROI
            </a>
            <a href="#lead-form" className="hover:text-foreground transition-colors">
              Inizia Ora
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Cerbo Solutions. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
