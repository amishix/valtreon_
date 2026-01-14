import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Server, TrendingUp, Vote, Shield, Wrench, ArrowRight } from "lucide-react"
import { BhramavoraSimulator } from "@/components/bhramavora-simulator"

export default function PortfolioPage() {
  const coreProducts = [
    {
      icon: Server,
      name: "Bhramavora OS",
      tagline: "Ethical Finance Operating System",
      audience: "Governments, funds, cities, universities",
      features: [
        "Impact modelling",
        "Planetary boundary scoring",
        "Ethical decision engine",
        "Real-time ESG audit",
        "Supply chain evaluation",
      ],
      impact: "Primary revenue generator ensuring investments remain regenerative",
    },
    {
      icon: TrendingUp,
      name: "Valtreon Impact Index (VII)",
      tagline: "Regenerative Finance Metrics",
      audience: "Institutional investors, ESG teams",
      features: [
        "Proprietary regenerative finance index",
        "Real-time tracking of ethical metrics",
        "Market-wide impact assessment",
        "Comparative portfolio analysis",
      ],
      impact: "Shifts market incentives toward distributive outcomes",
    },
  ]

  const supportiveProducts = [
    {
      icon: Vote,
      name: "Proxy-Voice Engine",
      description: "Aggregates ethical voting recommendations for shareholder meetings",
      audience: "Investment firms, pension funds",
      impact: "Democratises corporate governance",
    },
    {
      icon: Shield,
      name: "Just Transition Bond Validator",
      description: "Validates whether climate bonds truly meet social justice criteria",
      audience: "Governments, public banks",
      impact: "Ensures authentic climate justice in green finance",
    },
    {
      icon: Wrench,
      name: "Bhramavora Lite",
      description: "Scaled-down ethical finance toolkit for SMEs",
      audience: "Co-ops, community banks",
      impact: "Expands access to ethical finance tools",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">Our Portfolio</h1>
            <p className="text-xl text-zinc-300/80 max-w-3xl mx-auto text-balance">
              Products and services enabling ethical, regenerative finance
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Try Bhramavora OS</h2>
            <BhramavoraSimulator />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Core Products</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {coreProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900/60 to-zinc-950/40 backdrop-blur border border-zinc-700/50 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
                >
                  <product.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-zinc-300 text-lg mb-4">{product.tagline}</p>
                  <p className="text-zinc-400 mb-4">
                    <span className="font-semibold text-zinc-300">Audience:</span> {product.audience}
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-zinc-300 mb-2">Features:</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                          <span className="text-zinc-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-zinc-200/90">
                      <span className="font-semibold">Impact:</span> {product.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Supportive Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportiveProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all hover:scale-[1.02]"
                >
                  <product.icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-zinc-400 mb-4">{product.description}</p>
                  <p className="text-sm text-zinc-500 mb-3">
                    <span className="font-semibold">Audience:</span> {product.audience}
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold">Impact:</span> {product.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 backdrop-blur border border-zinc-700/50 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Value Proposition</h2>
            <p className="text-lg text-zinc-200/90 leading-relaxed mb-6">
              Valtreon transforms financial decision-making into a transparent, ethical, and regenerative process. For
              clients, Bhramavora OS reveals the social and ecological consequences of investment choices, translating
              complex ESG data into actionable ethical guidance.
            </p>
            <p className="text-lg text-zinc-200/90 leading-relaxed">
              Unlike competitors who treat ESG as reputation management, Valtreon frames ethical metrics as contested
              sites of negotiation rather than objective truths. Grounded in Doughnut Economics, our work supports
              transitions toward distributive and regenerative futures.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/operations"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-zinc-100 transition-all"
            >
              View Our Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
