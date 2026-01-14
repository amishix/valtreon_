"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Activity, Leaf, Users, Zap, TrendingUp, AlertTriangle } from "lucide-react"

interface MetricScore {
  name: string
  score: number
  icon: React.ElementType
  description: string
}

export function BhramavoraSimulator() {
  const [carbonEmissions, setCarbonEmissions] = useState(50)
  const [socialImpact, setSocialImpact] = useState(50)
  const [governance, setGovernance] = useState(50)
  const [regenerativeScore, setRegenerativeScore] = useState(50)
  const [metrics, setMetrics] = useState<MetricScore[]>([])
  const [recommendation, setRecommendation] = useState("")

  useEffect(() => {
    // Calculate regenerative score based on inputs
    const score = Math.round((100 - carbonEmissions) * 0.35 + socialImpact * 0.35 + governance * 0.3)
    setRegenerativeScore(score)

    // Update metrics
    setMetrics([
      {
        name: "Carbon Neutrality",
        score: 100 - carbonEmissions,
        icon: Leaf,
        description: "Environmental impact score",
      },
      {
        name: "Social Equity",
        score: socialImpact,
        icon: Users,
        description: "Community wellbeing index",
      },
      {
        name: "Ethical Governance",
        score: governance,
        icon: Activity,
        description: "Transparency & accountability",
      },
      {
        name: "Energy Transition",
        score: Math.round((100 - carbonEmissions + governance) / 2),
        icon: Zap,
        description: "Renewable energy adoption",
      },
    ])

    // Generate recommendation
    if (score >= 80) {
      setRecommendation("Excellent: Investment aligns with regenerative principles")
    } else if (score >= 60) {
      setRecommendation("Good: Minor improvements needed for optimal impact")
    } else if (score >= 40) {
      setRecommendation("Moderate: Significant ethical concerns identified")
    } else {
      setRecommendation("Alert: Investment conflicts with regenerative goals")
    }
  }, [carbonEmissions, socialImpact, governance])

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    if (score >= 40) return "text-orange-500"
    return "text-red-500"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-600">Regenerative</Badge>
    if (score >= 60) return <Badge className="bg-yellow-600">Transitional</Badge>
    if (score >= 40) return <Badge className="bg-orange-600">Concerning</Badge>
    return <Badge className="bg-red-600">Extractive</Badge>
  }

  return (
    <div className="space-y-6">
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center gap-2">
            <Activity className="w-6 h-6" />
            Bhramavora OS Simulator
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Interactive ethical finance decision engine - adjust parameters to see real-time impact assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-zinc-300">Carbon Emissions Level</label>
                <span className="text-sm text-zinc-400">{carbonEmissions}%</span>
              </div>
              <Slider
                value={[carbonEmissions]}
                onValueChange={(value) => setCarbonEmissions(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-zinc-500 mt-1">Higher values indicate more emissions</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-zinc-300">Social Impact Score</label>
                <span className="text-sm text-zinc-400">{socialImpact}%</span>
              </div>
              <Slider
                value={[socialImpact]}
                onValueChange={(value) => setSocialImpact(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-zinc-500 mt-1">Community wellbeing and equity measures</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-zinc-300">Governance Quality</label>
                <span className="text-sm text-zinc-400">{governance}%</span>
              </div>
              <Slider
                value={[governance]}
                onValueChange={(value) => setGovernance(value[0])}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-zinc-500 mt-1">Transparency and ethical decision-making</p>
            </div>
          </div>

          {/* Overall Score */}
          <div className="bg-black/40 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-1">Regenerative Finance Score</h3>
                <div className="flex items-center gap-3">
                  <span className={`text-5xl font-bold ${getScoreColor(regenerativeScore)}`}>{regenerativeScore}</span>
                  <div>{getScoreBadge(regenerativeScore)}</div>
                </div>
              </div>
              <TrendingUp className={`w-12 h-12 ${getScoreColor(regenerativeScore)}`} />
            </div>
            <div className="flex items-start gap-2 bg-zinc-900/50 rounded p-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300">{recommendation}</p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-zinc-900/30 rounded-lg p-4 border border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <metric.icon className="w-5 h-5 text-zinc-400" />
                  <h4 className="font-medium text-white">{metric.name}</h4>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-3xl font-bold ${getScoreColor(metric.score)}`}>{metric.score}</span>
                  <span className="text-sm text-zinc-500">/100</span>
                </div>
                <p className="text-xs text-zinc-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
