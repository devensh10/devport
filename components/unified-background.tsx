"use client"

import { useEffect, useRef } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function UnifiedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const stars: Star[] = []
    const lights: Light[] = []
    const lines: Line[] = []
    const heroParticles: HeroParticle[] = []

    // Hero-style floating particles
    class HeroParticle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.6 + 0.2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.updateColor()
      }

      updateColor() {
        const colorMap: { [key: string]: string } = {
          purple: theme === "dark" ? "rgba(168, 85, 247, 0.4)" : "rgba(139, 92, 246, 0.3)",
          blue: theme === "dark" ? "rgba(96, 165, 250, 0.4)" : "rgba(59, 130, 246, 0.3)",
          emerald: theme === "dark" ? "rgba(52, 211, 153, 0.4)" : "rgba(16, 185, 129, 0.3)",
          rose: theme === "dark" ? "rgba(251, 113, 133, 0.4)" : "rgba(244, 63, 94, 0.3)",
          orange: theme === "dark" ? "rgba(251, 146, 60, 0.4)" : "rgba(249, 115, 22, 0.3)",
          cyan: theme === "dark" ? "rgba(34, 211, 238, 0.4)" : "rgba(6, 182, 212, 0.3)",
          indigo: theme === "dark" ? "rgba(129, 140, 248, 0.4)" : "rgba(99, 102, 241, 0.3)",
          pink: theme === "dark" ? "rgba(244, 114, 182, 0.4)" : "rgba(236, 72, 153, 0.3)",
        }
        this.color = colorMap[currentColor.name] || colorMap.purple
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Pulse effect
        this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.01
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity))

        this.updateColor()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 8
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    class Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkleSpeed = Math.random() * 0.02 + 0.01
        this.updateColor()
      }

      updateColor() {
        const colorMap: { [key: string]: string } = {
          purple: theme === "dark" ? "rgba(168, 85, 247, 0.8)" : "rgba(139, 92, 246, 0.6)",
          blue: theme === "dark" ? "rgba(96, 165, 250, 0.8)" : "rgba(59, 130, 246, 0.6)",
          emerald: theme === "dark" ? "rgba(52, 211, 153, 0.8)" : "rgba(16, 185, 129, 0.6)",
          rose: theme === "dark" ? "rgba(251, 113, 133, 0.8)" : "rgba(244, 63, 94, 0.6)",
          orange: theme === "dark" ? "rgba(251, 146, 60, 0.8)" : "rgba(249, 115, 22, 0.6)",
          cyan: theme === "dark" ? "rgba(34, 211, 238, 0.8)" : "rgba(6, 182, 212, 0.6)",
          indigo: theme === "dark" ? "rgba(129, 140, 248, 0.8)" : "rgba(99, 102, 241, 0.6)",
          pink: theme === "dark" ? "rgba(244, 114, 182, 0.8)" : "rgba(236, 72, 153, 0.6)",
        }
        this.color = colorMap[currentColor.name] || colorMap.purple
      }

      update() {
        this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01
        this.opacity = Math.max(0.2, Math.min(1, this.opacity))
        this.updateColor()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw star points
        ctx.beginPath()
        ctx.moveTo(this.x - this.size * 2, this.y)
        ctx.lineTo(this.x + this.size * 2, this.y)
        ctx.moveTo(this.x, this.y - this.size * 2)
        ctx.lineTo(this.x, this.y + this.size * 2)
        ctx.strokeStyle = this.color
        ctx.lineWidth = 0.5
        ctx.stroke()
        ctx.restore()
      }
    }

    class Light {
      x: number
      y: number
      radius: number
      intensity: number
      pulseSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 60 + 30
        this.intensity = Math.random() * 0.3 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.updateColor()
      }

      updateColor() {
        const colorMap: { [key: string]: string } = {
          purple: theme === "dark" ? "139, 92, 246" : "139, 92, 246",
          blue: theme === "dark" ? "96, 165, 250" : "59, 130, 246",
          emerald: theme === "dark" ? "52, 211, 153" : "16, 185, 129",
          rose: theme === "dark" ? "251, 113, 133" : "244, 63, 94",
          orange: theme === "dark" ? "251, 146, 60" : "249, 115, 22",
          cyan: theme === "dark" ? "34, 211, 238" : "6, 182, 212",
          indigo: theme === "dark" ? "129, 140, 248" : "99, 102, 241",
          pink: theme === "dark" ? "244, 114, 182" : "236, 72, 153",
        }
        this.color = colorMap[currentColor.name] || colorMap.purple
      }

      update() {
        this.intensity += Math.sin(Date.now() * this.pulseSpeed) * 0.01
        this.intensity = Math.max(0.05, Math.min(0.4, this.intensity))
        this.updateColor()
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `rgba(${this.color}, ${this.intensity})`)
        gradient.addColorStop(1, `rgba(${this.color}, 0)`)

        ctx.save()
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    class Line {
      x1: number
      y1: number
      x2: number
      y2: number
      opacity: number
      speed: number
      color: string
      type: "diagonal" | "horizontal" | "vertical" | "curved"

      constructor() {
        this.type = ["diagonal", "horizontal", "vertical", "curved"][Math.floor(Math.random() * 4)] as any
        this.opacity = Math.random() * 0.2 + 0.05
        this.speed = Math.random() * 0.3 + 0.1
        this.initPosition()
        this.updateColor()
      }

      initPosition() {
        switch (this.type) {
          case "diagonal":
            this.x1 = Math.random() * canvas.width
            this.y1 = Math.random() * canvas.height
            this.x2 = this.x1 + (Math.random() * 200 - 100)
            this.y2 = this.y1 + (Math.random() * 200 - 100)
            break
          case "horizontal":
            this.x1 = Math.random() * canvas.width
            this.y1 = Math.random() * canvas.height
            this.x2 = this.x1 + (Math.random() * 300 + 100)
            this.y2 = this.y1
            break
          case "vertical":
            this.x1 = Math.random() * canvas.width
            this.y1 = Math.random() * canvas.height
            this.x2 = this.x1
            this.y2 = this.y1 + (Math.random() * 300 + 100)
            break
          case "curved":
            this.x1 = Math.random() * canvas.width
            this.y1 = Math.random() * canvas.height
            this.x2 = this.x1 + (Math.random() * 200 - 100)
            this.y2 = this.y1 + (Math.random() * 200 - 100)
            break
        }
      }

      updateColor() {
        const colorMap: { [key: string]: string } = {
          purple: theme === "dark" ? "rgba(168, 85, 247, 0.1)" : "rgba(139, 92, 246, 0.08)",
          blue: theme === "dark" ? "rgba(96, 165, 250, 0.1)" : "rgba(59, 130, 246, 0.08)",
          emerald: theme === "dark" ? "rgba(52, 211, 153, 0.1)" : "rgba(16, 185, 129, 0.08)",
          rose: theme === "dark" ? "rgba(251, 113, 133, 0.1)" : "rgba(244, 63, 94, 0.08)",
          orange: theme === "dark" ? "rgba(251, 146, 60, 0.1)" : "rgba(249, 115, 22, 0.08)",
          cyan: theme === "dark" ? "rgba(34, 211, 238, 0.1)" : "rgba(6, 182, 212, 0.08)",
          indigo: theme === "dark" ? "rgba(129, 140, 248, 0.1)" : "rgba(99, 102, 241, 0.08)",
          pink: theme === "dark" ? "rgba(244, 114, 182, 0.1)" : "rgba(236, 72, 153, 0.08)",
        }
        this.color = colorMap[currentColor.name] || colorMap.purple
      }

      update() {
        this.x1 += Math.sin(Date.now() * 0.001) * this.speed
        this.y1 += Math.cos(Date.now() * 0.001) * this.speed
        this.x2 += Math.sin(Date.now() * 0.001 + 1) * this.speed
        this.y2 += Math.cos(Date.now() * 0.001 + 1) * this.speed

        if (this.x1 > canvas.width + 100) this.x1 = -100
        if (this.x1 < -100) this.x1 = canvas.width + 100
        if (this.y1 > canvas.height + 100) this.y1 = -100
        if (this.y1 < -100) this.y1 = canvas.height + 100

        this.updateColor()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1
        ctx.beginPath()

        if (this.type === "curved") {
          const cpX = (this.x1 + this.x2) / 2 + Math.sin(Date.now() * 0.002) * 50
          const cpY = (this.y1 + this.y2) / 2 + Math.cos(Date.now() * 0.002) * 50
          ctx.moveTo(this.x1, this.y1)
          ctx.quadraticCurveTo(cpX, cpY, this.x2, this.y2)
        } else {
          ctx.moveTo(this.x1, this.y1)
          ctx.lineTo(this.x2, this.y2)
        }

        ctx.stroke()
        ctx.restore()
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      stars.length = 0
      lights.length = 0
      lines.length = 0
      heroParticles.length = 0

      // Create hero particles
      for (let i = 0; i < 40; i++) {
        heroParticles.push(new HeroParticle())
      }

      // Create stars
      for (let i = 0; i < 100; i++) {
        stars.push(new Star())
      }

      // Create lights
      for (let i = 0; i < 12; i++) {
        lights.push(new Light())
      }

      // Create lines
      for (let i = 0; i < 20; i++) {
        lines.push(new Line())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw lights (background layer)
      lights.forEach((light) => {
        light.update()
        light.draw()
      })

      // Update and draw lines
      lines.forEach((line) => {
        line.update()
        line.draw()
      })

      // Update and draw hero particles
      heroParticles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Update and draw stars (foreground layer)
      stars.forEach((star) => {
        star.update()
        star.draw()
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
