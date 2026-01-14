import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Building2, Scale, Globe, Lock, ArrowRight, Layers, Recycle } from "lucide-react"

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Our Business Model
            </h1>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto text-balance">
              A hybrid impact organisation grounded in Doughnut Economics principles
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Hybrid Impact Organisation</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Valtreon operates as a two-tier hybrid that satisfies the {">"}€50M Doughnut Economics rule, which
              requires mission-primacy legal structures for large enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur border border-blue-500/30 rounded-2xl p-8">
              <Building2 className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Valtreon Foundation</h2>
              <p className="text-zinc-300 mb-4">Non-profit parent organisation</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Holds mission lock and governance rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Owns all intellectual property</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Ensures alignment with Doughnut Economics principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Reinvests all surpluses into public-benefit research</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur border border-white/10 rounded-2xl p-8">
              <Building2 className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Valtreon Technologies Ltd</h2>
              <p className="text-zinc-300 mb-4">For-profit, mission-locked subsidiary</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Licences Bhramavora OS platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Generates £55M annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">Cannot divert profits to private shareholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-zinc-300">All surplus flows back to the Foundation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4 mb-4">
              <Layers className="w-10 h-10 text-blue-400 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">From Products to Services</h2>
                <p className="text-lg text-blue-100/90 leading-relaxed mb-4">
                  Drawing on Kaldrack and Leeker's assertion that "there is no software, there are just services,"
                  Valtreon avoids static product licensing in favour of adaptive, service-based systems.
                </p>
                <p className="text-lg text-blue-100/90 leading-relaxed">
                  This supports continuous improvement but introduces risks of dependency, lock-in, and centralised
                  control. Valtreon mitigates these through decentralised architecture and user data ownership rights,
                  including export, audit, and deletion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Revenue Streams</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Bhramavora OS SaaS Licensing</h3>
                  <p className="text-zinc-400">Primary revenue generator</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Valtreon Impact Index</h3>
                  <p className="text-zinc-400">Institutional subscription service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Data Verification Services</h3>
                  <p className="text-zinc-400">For governments and public sector</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Consulting & Training</h3>
                  <p className="text-zinc-400">Ethical investment strategies and education</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Workshops & Literacy Tools</h3>
                  <p className="text-zinc-400">Civic-finance education programs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Open-Source Modules</h3>
                  <p className="text-zinc-400">Partially funded by grants</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Tiered Access Model</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              As a partially open-source platform, Valtreon addresses the challenge of sustaining free innovation
              without undermining economic viability through a tiered access model:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Open Tier</h3>
                <p className="text-blue-100/90">
                  Community developers access APIs and open data for research and non-profit projects
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Ethical Tier</h3>
                <p className="text-blue-100/90">Small businesses and NGOs receive subsidised enterprise tools</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Institutional Tier</h3>
                <p className="text-blue-100/90">
                  Banks and asset managers pay for premium analytics, which fund the open tiers
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-4">
              <Recycle className="w-10 h-10 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Sustainability & Circular Growth</h2>
                <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                  Grounded in Doughnut Economics, Valtreon positions profitability within ecological ceilings and social
                  foundations. Revenue growth is reinvested into:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">Community innovation grants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">Renewable data infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">Accessible financial education</span>
                  </li>
                </ul>
                <p className="text-lg text-zinc-300 leading-relaxed mt-4">
                  Scalability is treated as a contested value rather than an unquestioned goal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-950/20 backdrop-blur border border-red-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Critical Limitations & Future Risks</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">
                  As a mission-primacy organisation, we cannot pursue unrestricted private profit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">The governance model slows rapid, purely commercial expansion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">
                  We must turn away clients whose practices contradict regenerative criteria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">
                  Ethical oversight requires continual independent funding, creating vulnerability to institutional
                  capture
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-zinc-300">
                  Localised infrastructure increases costs, limiting competitiveness against extractive incumbents
                </span>
              </li>
            </ul>
            <p className="text-lg text-red-200/80 mt-6 leading-relaxed">
              Valtreon accepts slower growth as an ethical boundary rather than a failure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Reflection</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-4">
              Valtreon aims to reimagine financial technology through decentralised ethics. Our model stands at the
              intersection of technology and trust — where data is treated as a public good, algorithms as shared tools,
              and profit as a by-product of purpose.
            </p>
            <p className="text-lg text-blue-100/90 leading-relaxed">
              By critically engaging with both open-source philosophy and global financial practice, Valtreon
              demonstrates that fintech can evolve beyond efficiency — toward empathy, participation, and planetary
              accountability.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              View Our Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
