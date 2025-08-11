"use client"

import { useEffect, useRef } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function BackgroundAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, colorIndex } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const currentColor = colors[colorIndex]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.3 + 0.1
        this.updateColor()
      }

      updateColor() {
        const colorMap: { [key: string]: string } = {
          purple: theme === "dark" ? "rgba(168, 85, 247, 0.2)" : "rgba(139, 92, 246, 0.1)",
          blue: theme === "dark" ? "rgba(96, 165, 250, 0.2)" : "rgba(59, 130, 246, 0.1)",
          emerald: theme === "dark" ? "rgba(52, 211, 153, 0.2)" : "rgba(16, 185, 129, 0.1)",
          rose: theme === "dark" ? "rgba(251, 113, 133, 0.2)" : "rgba(244, 63, 94, 0.1)",
          orange: theme === "dark" ? "rgba(251, 146, 60, 0.2)" : "rgba(249, 115, 22, 0.1)",
          cyan: theme === "dark" ? "rgba(34, 211, 238, 0.2)" : "rgba(6, 182, 212, 0.1)",
          indigo: theme === "dark" ? "rgba(129, 140, 248, 0.2)" : "rgba(99, 102, 241, 0.1)",
          pink: theme === "dark" ? "rgba(244, 114, 182, 0.2)" : "rgba(236, 72, 153, 0.1)",
        }
        this.color = colorMap[currentColor.name] || colorMap.purple
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        this.updateColor()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme, colorIndex])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
