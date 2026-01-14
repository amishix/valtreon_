import { Target, Eye, TrendingUp, Shield, Network } from "lucide-react"

export function WhyValtreon() {
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
    <section className="relative bg-zinc-950 py-24 px-6 lg:px-8 border-y border-blue-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">Why Valtreon</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            We're redefining what financial transparency means in practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-800/30 rounded-2xl p-6 hover:border-blue-600/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-200/70 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
