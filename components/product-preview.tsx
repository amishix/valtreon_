import Link from "next/link"
import { Shield, Users, FileSearch } from "lucide-react"

export function ProductPreview() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 to-blue-950/20 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">Our Platform</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Three interconnected products designed to transform financial transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/60 backdrop-blur-xl border border-blue-700/40 rounded-3xl p-8 hover:border-blue-500/60 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bhramavora OS</h3>
              <p className="text-blue-200/70 mb-6 flex-grow">
                Verification layer that ensures consistency and integrity across all financial disclosures
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                Explore
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/60 backdrop-blur-xl border border-blue-700/40 rounded-3xl p-8 hover:border-blue-500/60 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proxy Voice</h3>
              <p className="text-blue-200/70 mb-6 flex-grow">
                Governance engine that scales oversight across all stakeholders with human-in-the-loop design
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                Explore
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/60 backdrop-blur-xl border border-blue-700/40 rounded-3xl p-8 hover:border-blue-500/60 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <FileSearch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Audit & Risk Intelligence</h3>
              <p className="text-blue-200/70 mb-6 flex-grow">
                Evidence-led reporting with audit trails and traceability built into every transaction
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                Explore
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
