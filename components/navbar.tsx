"use client"

import Link from "next/link"
import { GeometricLogo } from "./geometric-logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <GeometricLogo />
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Valtreon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/mission"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              Mission
            </Link>
            <Link
              href="/business"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              Business
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              Products
            </Link>
            <Link
              href="/operations"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              Operations
            </Link>
            <Link
              href="/people"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              People
            </Link>
            <Link
              href="/analysis"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              Analysis
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              About
            </Link>
            <Link
              href="/references"
              className="text-sm font-medium text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              References
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-white/10">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/mission"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mission
            </Link>
            <Link
              href="/business"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              href="/portfolio"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/operations"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Operations
            </Link>
            <Link
              href="/people"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              People
            </Link>
            <Link
              href="/analysis"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Analysis
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/references"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              References
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
