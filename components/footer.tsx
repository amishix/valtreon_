import Link from "next/link"
import { GeometricLogo } from "./geometric-logo"

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GeometricLogo />
              <span className="text-xl font-bold text-white">Valtreon</span>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Rebuilding trust in global finance through regenerative principles and ethical intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mission" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Business Model
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  People & Culture
                </Link>
              </li>
              <li>
                <Link href="/operations" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Global Operations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Portfolio Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#bhramavora"
                  className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Bhramavora OS
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#certifi"
                  className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Certifi
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#edify"
                  className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Edify
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/analysis" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Critical Analysis
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  References
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200/70 hover:text-blue-400 text-sm transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200/50">© {new Date().getFullYear()} Valtreon. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-blue-200/50 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-blue-200/50 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-blue-200/50 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </footer>
  )
}
