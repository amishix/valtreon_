import { Navbar } from "@/components/navbar"
import { Target, Eye, TrendingUp, Shield, Network, Database, CheckCircle, BarChart3, FileText } from "lucide-react"

export default function AboutPage() {
  const differentiators = [
    {
      icon: Eye,
      title: "Transparency as Infrastructure",
      description: "Not marketing—embedded in every layer of our platform",
    },
    {
      icon: Target,
      title: "Human Oversight Built In",
      description: "Automated decisions always include human verification loops",
    },
    {
      icon: TrendingUp,
      title: "Designed for Turbulence",
      description: "Postnormal operating model ready for unpredictable futures",
    },
    {
      icon: Shield,
      title: "Evidence-Led Reporting",
      description: "Every claim backed by traceable, verifiable data",
    },
    {
      icon: Network,
      title: "Governance That Scales",
      description: "From startups to institutions, consistent oversight",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">About Valtreon</h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance">
              Redefining what financial transparency means in practice
            </p>
          </div>

          {/* How It Works Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="relative bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-zinc-400 font-semibold text-sm mb-2">STEP 1</div>
                  <h3 className="text-xl font-bold text-white mb-3">Input</h3>
                  <p className="text-zinc-400">Organizational and financial disclosures</p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-zinc-400 font-semibold text-sm mb-2">STEP 2</div>
                  <h3 className="text-xl font-bold text-white mb-3">Verification</h3>
                  <p className="text-zinc-400">Consistency and integrity checks</p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-zinc-400 font-semibold text-sm mb-2">STEP 3</div>
                  <h3 className="text-xl font-bold text-white mb-3">Scoring</h3>
                  <p className="text-zinc-400">Impact and risk signals</p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-zinc-400 font-semibold text-sm mb-2">STEP 4</div>
                  <h3 className="text-xl font-bold text-white mb-3">Outputs</h3>
                  <p className="text-zinc-400">Investor-ready reporting and traceability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Valtreon Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Valtreon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="relative group bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory & Trust Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Regulatory & Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Regulatory Posture</h3>
                <div className="space-y-4 text-zinc-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Fictional coursework organization.</span> Regulatory
                    design aligned with FCA expectations.
                  </p>
                  <p className="leading-relaxed">
                    Built as a fintech concept for academic purposes, designed to operate in line with regulatory style
                    expectations for governance, risk, and transparency.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Operational Controls</h3>
                <div className="space-y-4">
                  {[
                    "Audit trails for all transactions",
                    "Documented governance frameworks",
                    "Tiered access with role-based permissions",
                    "Risk reporting by default",
                    "Data integrity verification",
                    "Transparent decision-making processes",
                  ].map((control, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
