import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { ValueCalculator } from "@/components/value-calculator"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ProcessSection } from "@/components/process-section"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <ValueCalculator />
      <PricingSection />
      <TestimonialSection />
      <ProcessSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
