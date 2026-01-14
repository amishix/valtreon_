import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 to-blue-950/30 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-3xl blur-3xl" />
          <div className="relative bg-blue-950/60 backdrop-blur-xl border border-blue-700/40 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">See the Model in Action</h2>
            <p className="text-lg text-blue-200/80 mb-10 max-w-2xl mx-auto">
              Explore our platform, understand our business model, or get in touch to learn how Valtreon can transform
              your financial operations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors group"
              >
                Explore the Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/business"
                className="inline-flex items-center rounded-full border-2 border-blue-400/50 bg-blue-950/30 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-blue-950/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
              >
                View Business Model
              </Link>
              <Link
                href="/operations"
                className="inline-flex items-center rounded-full border-2 border-blue-400/50 bg-blue-950/30 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-blue-950/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
