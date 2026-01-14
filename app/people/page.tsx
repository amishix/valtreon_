import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { User, Heart, MessageCircle, ArrowRight } from "lucide-react"

export default function PeoplePage() {
  const employees = [
    {
      name: "Amina Yusuf",
      role: "Community Data Steward",
      location: "Nairobi",
      image: "/professional-african-woman.png",
      description:
        "Amina trained in environmental economics and previously worked with informal settlement organisations on climate adaptation finance. She collaborates with engineers and policy teams to contextualise local data and challenge reductive modelling assumptions.",
    },
    {
      name: "Rohan Mehta",
      role: "Algorithmic Audit Engineer",
      location: "Bangalore",
      image: "/professional-indian-man-portrait.png",
      description:
        "Rohan specialises in algorithmic accountability and open-source auditing. He works cross-functionally to identify bias, automation risk, and unintended consequences in financial models.",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Our People & Culture
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance">
              Diversity as infrastructure for ethical intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {employees.map((employee, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
              >
                <img
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-white/20"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{employee.name}</h3>
                <p className="text-zinc-300 text-lg mb-1">{employee.role}</p>
                <p className="text-zinc-500 mb-4">{employee.location}</p>
                <p className="text-zinc-400 leading-relaxed">{employee.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Cultural Philosophy</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Valtreon's organisational culture is intentionally shaped by socioeconomic, geographic, and disciplinary
              diversity rather than technical homogeneity. Employees do not originate from a single elite educational or
              professional pipeline.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The workforce includes individuals from different income backgrounds, regions of the Global North and
              South, and career trajectories spanning grassroots organising, public policy, academia, and commercial
              technology. This diversity is not symbolic; it materially influences how financial intelligence is
              designed, interpreted, and governed.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                <Heart className="w-8 h-8 text-white mb-3" />
                <h3 className="font-semibold text-white mb-2">Productive Friction</h3>
                <p className="text-zinc-400">
                  Disagreement is treated as valuable labour, embedding equity into practice
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                <MessageCircle className="w-8 h-8 text-white mb-3" />
                <h3 className="font-semibold text-white mb-2">Distributed Voice</h3>
                <p className="text-zinc-400">
                  Cross-functional teams ensure technical expertise doesn't dominate ethical judgement
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                <User className="w-8 h-8 text-white mb-3" />
                <h3 className="font-semibold text-white mb-2">Reflective Labour</h3>
                <p className="text-zinc-400">Valuing thoughtful deliberation alongside technical output</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Impact on Product Design</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Differences in lived experience directly affect product decisions. Teams including members from regions
              affected by climate vulnerability or informal economies consistently challenge assumptions embedded in
              conventional financial datasets, such as risk neutrality or short-term optimisation.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              This results in modelling frameworks that prioritise resilience, distribution, and long-term stability
              over purely extractive growth. While this pluralism slows decision-making and increases internal debate,
              Valtreon treats this friction as a safeguard against epistemic bias and algorithmic overreach.
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Sustainable Work Practices</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Hiring and team structures are designed to redistribute voice and authority. Employees from lower-income
              or non-traditional backgrounds are supported through transparent pay bands, mentorship pathways, and
              decision-making forums that grant meaningful influence rather than token representation.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              By embedding participation and disagreement into everyday practice, Valtreon operationalises
              sustainability not only as an environmental goal but as an organisational principle. Cultural
              sustainability is achieved by resisting burnout-driven productivity norms and valuing reflective labour
              alongside technical output.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/analysis"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              View Critical Analysis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
