import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/Hero"
import { TrustStrip } from "@/components/trust-strip"
import { ProductPreview } from "@/components/product-preview"
import { StatsSection } from "@/components/stats-section"
import { InteractiveGlobe } from "@/components/interactive-globe"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProductPreview />
      <StatsSection />
      <InteractiveGlobe />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
