import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Leaf, Shield, Users, AlertCircle, Home } from "lucide-react"

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Critical Analysis
            </h1>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto text-balance">
              Ethics, sustainability, and access in regenerative finance
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <div className="bg-gradient-to-br from-green-950/40 to-green-900/20 backdrop-blur border border-green-500/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Leaf className="w-12 h-12 text-green-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Sustainability</h2>
                  <p className="text-lg text-green-100/90 leading-relaxed mb-4">
                    Valtreon's sustainability strategy is evaluated across environmental, social, and financial
                    dimensions. Environmentally, we acknowledge that data centres, cloud computing, and continuous model
                    training carry non-trivial energy and material costs.
                  </p>
                  <p className="text-lg text-green-100/90 leading-relaxed mb-4">
                    While Valtreon invests in renewable-powered infrastructure and regionally distributed hosting to
                    reduce carbon intensity, we recognise that ethical finance platforms are not dematerialised
                    solutions. Computational ethics still consumes resources, and sustainability is therefore framed as
                    harm reduction and directional improvement rather than net-zero absolution.
                  </p>
                  <p className="text-lg text-green-100/90 leading-relaxed">
                    Socially, we prioritise stable employment, regional knowledge hubs, and community partnerships over
                    short-term outsourcing. Financially, we adopt a conservative growth strategy, reinvesting surplus
                    into infrastructure, education, and open tools rather than maximising expansion.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 backdrop-blur border border-red-500/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-12 h-12 text-red-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Ethical Considerations</h2>
                  <p className="text-lg text-red-100/90 leading-relaxed mb-4">
                    Valtreon faces three primary ethical challenges: data governance, algorithmic bias, and
                    institutional power asymmetry.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-red-950/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">Data Governance</h3>
                      <p className="text-red-100/80">
                        Handling sensitive social and ecological data introduces risks of misuse, surveillance, or
                        re-identification. We enforce data minimisation, regional data stewardship, and community
                        consent protocols.
                      </p>
                    </div>
                    <div className="bg-red-950/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">Algorithmic Bias</h3>
                      <p className="text-red-100/80">
                        Even transparent models can encode historical inequalities. We mitigate this through
                        human-in-the-loop auditing, interdisciplinary review teams, and treating models as provisional
                        and contestable.
                      </p>
                    </div>
                    <div className="bg-red-950/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">Power Asymmetry</h3>
                      <p className="text-red-100/80">
                        Tension exists between serving institutional clients and remaining accountable to affected
                        communities. We separate commercial authority from ethical oversight and grant veto rights to
                        independent councils.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/40 to-purple-900/20 backdrop-blur border border-purple-500/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Access & Participation</h2>
                  <p className="text-lg text-purple-100/90 leading-relaxed mb-4">
                    Access to Valtreon's services is uneven by design and by constraint. While open-source tools, public
                    dashboards, and subsidised tiers expand participation for NGOs, cooperatives, and researchers,
                    advanced analytical capabilities remain more accessible to well-resourced institutions.
                  </p>
                  <p className="text-lg text-purple-100/90 leading-relaxed mb-4">
                    Rather than claiming universal accessibility, Valtreon adopts a differentiated participation model.
                    Communities and smaller organisations engage through advisory roles, data trusts, and governance
                    councils, while institutions access full platforms under conditions of transparency and
                    accountability.
                  </p>
                  <p className="text-lg text-purple-100/90 leading-relaxed">
                    However, participation remains limited by broader structural inequalities beyond our control.
                    Valtreon therefore frames access as a negotiated process rather than a guaranteed outcome,
                    acknowledging that ethical design must coexist with structural constraint.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-12 h-12 text-blue-400 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Limitations & Constraints</h2>
                  <p className="text-lg text-blue-100/90 leading-relaxed mb-4">
                    Despite its ambition, Valtreon remains structurally constrained. Ethical oversight requires
                    continual independent funding, creating vulnerability to institutional capture. Open systems do not
                    eliminate inequalities in interpretation or participation.
                  </p>
                  <p className="text-lg text-blue-100/90 leading-relaxed">
                    Localised infrastructure increases costs, limiting competitiveness against extractive incumbents.
                    Valtreon accepts slower growth as an ethical boundary rather than a failure, treating sustainability
                    as an ongoing governance problem rather than a solved technical condition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Concluding Statement</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              This organisation reflects the belief that computer science is inseparable from questions of power,
              responsibility, and social consequence. Designing Valtreon allows critical examination of how algorithms,
              data infrastructures, and organisational models can either reinforce extractive systems or be reoriented
              toward more equitable and regenerative outcomes.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Valtreon represents an organisation that accepts complexity, resists purely profit-driven optimisation,
              and treats technological systems as embedded within social and ecological realities rather than abstract
              tools. It positions technology work at the intersection of engineering, policy, and public interest, where
              efficiency must be balanced against justice and inclusion.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
