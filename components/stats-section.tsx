"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Globe2, Shield } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  label: string
  getValue: () => number
  suffix: string
  prefix?: string
}

export function StatsSection() {
  const [stats, setStats] = useState({
    investments: 1247,
    users: 8934,
    countries: 45,
    secured: 2.8,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        investments: prev.investments + Math.floor(Math.random() * 3),
        users: prev.users + Math.floor(Math.random() * 5),
        countries: Math.min(prev.countries + (Math.random() > 0.95 ? 1 : 0), 67),
        secured: Number((prev.secured + Math.random() * 0.1).toFixed(1)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const statsData: Stat[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Regenerative Investments",
      getValue: () => stats.investments,
      suffix: "+",
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Active Users",
      getValue: () => stats.users,
      suffix: "+",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      label: "Countries Reached",
      getValue: () => stats.countries,
      suffix: "",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      label: "Capital Secured",
      getValue: () => stats.secured,
      suffix: "B",
      prefix: "$",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-blue-950/30 to-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real-Time Impact</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Watch our regenerative finance ecosystem grow in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.prefix}
                  <span className="tabular-nums">{stat.getValue()}</span>
                  {stat.suffix}
                </div>
                <div className="text-sm text-blue-200/70">{stat.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
