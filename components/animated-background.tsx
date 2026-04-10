"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const isMobile = window.innerWidth < 768
    const cols = isMobile ? 6 : 15
    const rows = isMobile ? 8 : 6
    const cellW = canvas.width / cols
    const cellH = canvas.height / rows
    particlesRef.current = []

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        particlesRef.current.push({
          x: col * cellW + Math.random() * cellW,
          y: row * cellH + Math.random() * cellH,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2.2 + 1.2,
          opacity: Math.random() * 0.35 + 0.5,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener("mousemove", handleMouseMove)

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx -= (dx / dist) * force * 0.015
          p.vy -= (dy / dist) * force * 0.015
        }

        const maxVel = 1.8
        p.vx = Math.max(-maxVel, Math.min(maxVel, p.vx))
        p.vy = Math.max(-maxVel, Math.min(maxVel, p.vy))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 139, 104, ${p.opacity})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34, 139, 104, ${(1 - dist / 160) * 0.45})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }

        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mDist < 200) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(196, 160, 84, ${(1 - mDist / 200) * 0.55})`
          ctx.lineWidth = 1.1
          ctx.stroke()
        }
      }

      const t = timestamp * 0.001
      const symbols = ["$", "%", "+", "^"]
      ctx.font = "20px Inter, sans-serif"
      for (let i = 0; i < symbols.length; i++) {
        const x = canvas.width * (0.15 + i * 0.25) + Math.sin(t + i) * 18
        const y = canvas.height * 0.3 + Math.cos(t * 0.5 + i) * 25
        ctx.fillStyle = `rgba(196, 160, 84, ${0.18 + Math.sin(t + i) * 0.06})`
        ctx.fillText(symbols[i], x, y)
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("mousemove", handleMouseMove)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
