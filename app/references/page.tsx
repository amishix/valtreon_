import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Book, Home } from "lucide-react"

export default function ReferencesPage() {
  const references = [
    {
      author: "Kaldrack, Irina, and Martina Leeker, eds.",
      title: "There Is No Software, There Are Just Services",
      publication: "Lüneburg: meson press, 2015.",
    },
    {
      author: "McGee, Patrick.",
      title: "Apple in China: The Capture of the World's Greatest Company",
      publication: "New York: Scribner, 2025.",
    },
    {
      author: "Raworth, Kate.",
      title: "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist",
      publication: "London: Random House Business, 2017.",
    },
    {
      author: "Gonzalez-Barahona, Jesús M.",
      title: "A Brief History of Free, Open Source Software and Its Communities",
      publication: "Computer 54, no. 2 (2021): 75–87.",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Book className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">References</h1>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto text-balance">
              Theoretical foundations and critical frameworks
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="space-y-8">
              {references.map((reference, index) => (
                <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                  <p className="text-zinc-400 mb-2">{reference.author}</p>
                  <p className="text-xl font-semibold text-white mb-2">{reference.title}</p>
                  <p className="text-zinc-500">{reference.publication}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 backdrop-blur border border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Theoretical Frameworks</h2>
            <div className="space-y-4 text-blue-100/90">
              <p className="leading-relaxed">
                <span className="font-semibold">FOSS Principles:</span> Collaboration and transparency principles shape
                our open metrics libraries
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Doughnut Economics:</span> Kate Raworth's framework guides our mission
                to operate within planetary boundaries and social foundations
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Services Regime Critique:</span> Kaldrack & Leeker's analysis informs
                our approach to avoiding SaaS dependency and maintaining open-source alternatives
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Ethical Globalisation:</span> Lessons from supply chain ethics guide our
                commitment to transparent, non-exploitative operations
              </p>
            </div>
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
