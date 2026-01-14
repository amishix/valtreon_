"use client"

import { useEffect, useRef, useState } from "react"

interface Node {
  lat: number
  lng: number
  label: string
  color: string
}

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const nodes: Node[] = [
    { lat: 51.5074, lng: -0.1278, label: "London", color: "#3b82f6" },
    { lat: -1.2921, lng: 36.8219, label: "Nairobi", color: "#60a5fa" },
    { lat: 12.9716, lng: 77.5946, label: "Bangalore", color: "#93c5fd" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let rotation = 0

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.35

      // Draw globe outline
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw latitude lines
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath()
        const y = centerY + (i * radius) / 2.5
        const width = Math.sqrt(radius * radius - ((i * radius) / 2.5) ** 2) * 2
        ctx.ellipse(centerX, y, width / 2, radius / 8, 0, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        const angle = (i * Math.PI) / 4 + rotation / 100
        ctx.ellipse(centerX, centerY, radius / 4, radius, angle, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw nodes
      nodes.forEach((node) => {
        const nodeRotation = (node.lng / 180) * Math.PI + rotation / 100
        const x = centerX + Math.cos(nodeRotation) * radius * 0.8
        const y = centerY + Math.sin((node.lat / 90) * (Math.PI / 2)) * radius * 0.8

        // Draw glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20)
        gradient.addColorStop(0, node.color + "88")
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fillRect(x - 20, y - 20, 40, 40)

        // Draw node
        ctx.beginPath()
        ctx.arc(x, y, hoveredNode === node.label ? 8 : 6, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw pulse
        ctx.beginPath()
        ctx.arc(x, y, 6 + Math.sin(Date.now() / 500 + nodes.indexOf(node)) * 3, 0, Math.PI * 2)
        ctx.strokeStyle = node.color + "44"
        ctx.lineWidth = 2
        ctx.stroke()
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i]
          const node2 = nodes[j]

          const rotation1 = (node1.lng / 180) * Math.PI + rotation / 100
          const x1 = centerX + Math.cos(rotation1) * radius * 0.8
          const y1 = centerY + Math.sin((node1.lat / 90) * (Math.PI / 2)) * radius * 0.8

          const rotation2 = (node2.lng / 180) * Math.PI + rotation / 100
          const x2 = centerX + Math.cos(rotation2) * radius * 0.8
          const y2 = centerY + Math.sin((node2.lat / 90) * (Math.PI / 2)) * radius * 0.8

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      rotation += 0.5

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [hoveredNode])

  return (
    <section className="relative bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Global Operations Network</h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Our three-node structure spans continents to serve regenerative finance worldwide
          </p>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-[500px] rounded-2xl"
            style={{ background: "radial-gradient(circle at center, #1e3a8a15, transparent)" }}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 flex-wrap justify-center">
            {nodes.map((node) => (
              <div
                key={node.label}
                className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 cursor-pointer hover:border-blue-400/50 transition-all"
                onMouseEnter={() => setHoveredNode(node.label)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color }} />
                <span className="text-sm font-medium text-white">{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
