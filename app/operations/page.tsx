import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { MapPin, Building, Globe2, Users, ArrowRight } from "lucide-react"

export default function OperationsPage() {
  const nodes = [
    {
      city: "London",
      icon: MapPin,
      color: "blue",
      focus: "Regulation & Governance",
      responsibilities: [
        "Regulatory compliance",
        "Institutional partnerships",
        "Transparency audits",
        "Annual impact reports",
      ],
    },
    {
      city: "Nairobi",
      icon: MapPin,
      color: "emerald",
      focus: "Impact & Community Data Trusts",
      responsibilities: [
        "Ecosystem metrics & biodiversity data",
        "Capacity-building for Indigenous communities",
        "Place-based modelling for African cities",
        "Community wealth-building partnerships",
      ],
    },
    {
      city: "Bangalore",
      icon: MapPin,
      color: "violet",
      focus: "Core Engineering & AI Architecture",
      responsibilities: [
        "Bhramavora development",
        "Climate modelling infrastructure",
        "Algorithmic auditing systems",
        "Open-source tooling",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">Our Operations</h1>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto text-balance">
              A poly-nodal structure distributing authority and expertise globally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
              <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">£55M</div>
              <p className="text-zinc-400">Annual Revenue</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">310</div>
              <p className="text-zinc-400">Employees</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
              <Globe2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <p className="text-zinc-400">Global Nodes</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Poly-Nodal Structure</h2>
            <p className="text-lg text-zinc-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Authority, expertise, and decision-making are distributed across three global hubs rather than centralised
              in one headquarters. This structure deliberately reduces epistemic bias and operationalises Doughnut
              Economics as an organisational design principle.
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all"
                >
                  <node.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{node.city}</h3>
                  <p className="text-blue-300 text-lg mb-6">{node.focus}</p>
                  <ul className="space-y-3">
                    {node.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-zinc-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stewardship Council</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              A rotating democratically elected council oversees mission adherence, ethical alignment, and long-term
              planning. The Council consists of:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Worker Representatives</h3>
                  <p className="text-zinc-400">Ensuring distributed power and employee voice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">User/Client Representatives</h3>
                  <p className="text-zinc-400">Bringing institutional perspective</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Community Data Trust Delegates</h3>
                  <p className="text-zinc-400">Representing affected communities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Independent Ethics Reviewers</h3>
                  <p className="text-zinc-400">Providing external oversight</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why This Structure?</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-4">
              This structure deliberately deviates from hierarchical, profit-driven models common in traditional fintech
              and asset management. By decentralising authority, Valtreon:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100/90">Prevents concentration of economic or algorithmic power</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100/90">Embeds community oversight at every level</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100/90">
                  Ensures financial intelligence remains a shared, transparent public good
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100/90">Creates modelling tools shaped by diverse lived experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100/90">Supports cross-border equity and knowledge sharing</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/people"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              Meet Our People
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
