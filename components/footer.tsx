"use client"

import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <a href="#" className="flex items-center">
            <Image
              src="/cerbo-solutions-logo.png"
              alt="Cerbo Solutions"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </a>

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
