import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Shield, Users, TrendingUp, Heart, Sprout, CheckCircle } from "lucide-react"

export default function MissionPage() {
  const values = [
    {
      icon: Shield,
      title: "Custodians of Trust",
      description:
        "Our clients' interests come first, but accountability extends beyond investors to the communities and ecosystems affected by capital flows. Legitimacy is earned through structured participation mechanisms.",
    },
    {
      icon: Users,
      title: "One Valtreon",
      description:
        "We operate as a connected organisation blending finance, technology, and ethics across regions. Innovation thrives when disciplinary and cultural boundaries are crossed.",
    },
    {
      icon: TrendingUp,
      title: "Driven by Insight",
      description:
        "We pursue excellence through analytical rigour and creative experimentation. Performance results from continuous research, critical evaluation, and purposeful risk-taking.",
    },
    {
      icon: Heart,
      title: "Ethical Ownership",
      description:
        "Every member is responsible for the social and environmental consequences of their decisions. Accountability extends beyond profit to the impacts of our technology.",
    },
    {
      icon: Sprout,
      title: "Better Financial Future",
      description:
        "Our long-term commitment is to regenerative finance. We reinvest in education, digital inclusion, and sustainable infrastructure to expand opportunity.",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Our Mission & Values
            </h1>
            <p className="text-xl text-blue-200/80 max-w-4xl mx-auto text-balance leading-relaxed">
              Valtreon's vision is to rebuild trust in global finance by embedding ethical intelligence into every
              financial decision. We believe that investment flows should nurture society and respect planetary
              boundaries rather than extract from them.
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision for 2030</h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              By 2030, Valtreon has become a trusted civic technology institution supporting governments, mid-sized
              investment houses, cooperatives, and community organisations in evaluating the full social and ecological
              consequences of their financial choices.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Through our flagship platform, <span className="text-blue-400 font-semibold">Bhramavora OS</span>, we
              enable institutions to assess investment pathways against indicators of climate resilience, labour
              justice, community wellbeing, and long-term sustainability.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Our vision is a financial ecosystem where transparency is the norm, ethics are measurable, and
              regenerative outcomes guide capital allocation. Valtreon exists to demonstrate that return on investment
              and return to society can be structurally aligned through technology, governance, and participation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
                >
                  <value.icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Trust Beyond Technology</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-6">
              Valtreon recognises that trust cannot be engineered through technical systems alone. Financial harm is
              often historical, relational, and political rather than purely informational. Even transparent models can
              reproduce injustice if they are designed, interpreted, or governed by elite actors.
            </p>
            <p className="text-lg text-blue-100/90 leading-relaxed">
              Our mission treats ethical intelligence not as a neutral optimisation problem but as a contested social
              process that must remain open to scrutiny, dissent, and revision. Rebuilding trust requires ongoing
              negotiation with the communities affected by financial decisions, not simply better data or faster
              algorithms.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              Explore Our Business Model
              <CheckCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
