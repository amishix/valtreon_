"use client"

import { useRef } from "react"
import { Database, CheckCircle, BarChart3, FileText } from "lucide-react"

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative bg-zinc-950 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">How It Works</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            A seamless workflow from data input to investor-ready reporting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/50 backdrop-blur border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-white mb-3">Input</h3>
              <p className="text-blue-200/70">Organizational and financial disclosures</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/50 backdrop-blur border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-white mb-3">Verification</h3>
              <p className="text-blue-200/70">Consistency and integrity checks</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/50 backdrop-blur border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-white mb-3">Scoring</h3>
              <p className="text-blue-200/70">Impact and risk signals</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-blue-950/50 backdrop-blur border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-2">STEP 4</div>
              <h3 className="text-xl font-bold text-white mb-3">Outputs</h3>
              <p className="text-blue-200/70">Investor-ready reporting and traceability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
