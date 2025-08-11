"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function DoctorStrangeLoader() {
  const [showText, setShowText] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Show text after 1 second
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 1000)

    // Show profile after 2.5 seconds
    const profileTimer = setTimeout(() => {
      setShowProfile(true)
    }, 2500)

    // Animate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(profileTimer)
      clearInterval(progressInterval)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const runes = [
      "ᚠ",
      "ᚢ",
      "ᚦ",
      "ᚨ",
      "ᚱ",
      "ᚲ",
      "ᚷ",
      "ᚹ",
      "ᚺ",
      "ᚾ",
      "ᛁ",
      "ᛃ",
      "ᛇ",
      "ᛈ",
      "ᛉ",
      "ᛊ",
      "ᛏ",
      "ᛒ",
      "ᛖ",
      "ᛗ",
      "ᛚ",
      "ᛜ",
      "ᛞ",
      "ᛟ",
    ]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      type: "spark" | "rune"
      rune?: string
      angle: number
      distance: number
      orbitSpeed: number

      constructor() {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        this.type = Math.random() > 0.7 ? "rune" : "spark"
        this.angle = Math.random() * Math.PI * 2
        this.distance = Math.random() * 300 + 100
        this.orbitSpeed = (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1)

        this.x = centerX + Math.cos(this.angle) * this.distance
        this.y = centerY + Math.sin(this.angle) * this.distance

        this.size = this.type === "rune" ? Math.random() * 20 + 15 : Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.color = this.type === "rune" ? "#10B981" : "#F59E0B"
        this.rune = this.type === "rune" ? runes[Math.floor(Math.random() * runes.length)] : undefined
      }

      update() {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Orbit around center
        this.angle += this.orbitSpeed
        this.x = centerX + Math.cos(this.angle) * this.distance
        this.y = centerY + Math.sin(this.angle) * this.distance

        // Add some random movement
        this.x += this.speedX
        this.y += this.speedY

        // Fade in and out
        this.opacity += Math.sin(Date.now() * 0.003) * 0.01
        this.opacity = Math.max(0.1, Math.min(1, this.opacity))
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity

        if (this.type === "rune" && this.rune) {
          ctx.fillStyle = this.color
          ctx.font = `${this.size}px serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.shadowBlur = 10
          ctx.shadowColor = this.color
          ctx.fillText(this.rune, this.x, this.y)
        } else {
          ctx.fillStyle = this.color
          ctx.shadowBlur = 5
          ctx.shadowColor = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Background Mystical Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-emerald-500/20 rounded-full animate-spin-slow"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-amber-500/20 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-emerald-400/30 rounded-full animate-spin-slow"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Eye of Agamotto Pendant */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 border-4 border-emerald-500/60 rounded-full animate-spin-slow shadow-2xl shadow-emerald-500/30">
              <div
                className="absolute inset-4 border-2 border-amber-400/40 rounded-full animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "8s" }}
              >
                <div
                  className="absolute inset-4 border border-emerald-300/30 rounded-full animate-spin-slow"
                  style={{ animationDuration: "4s" }}
                >
                  {/* Inner Eye */}
                  <div className="absolute inset-6 bg-gradient-to-br from-emerald-400 to-amber-500 rounded-full flex items-center justify-center shadow-inner animate-pulse">
                    {showProfile && (
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50 animate-fade-in">
                        <Image
                          src="/images/profile.jpg"
                          alt="Devensh Sain"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {!showProfile && <div className="w-8 h-8 bg-white rounded-full animate-pulse shadow-lg"></div>}
                  </div>
                </div>
              </div>
            </div>

            {/* Mystical Runes around the pendant */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "20s" }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                <div
                  key={index}
                  className="absolute w-6 h-6 text-emerald-400 text-xl font-bold animate-pulse"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  ᚱ
                </div>
              ))}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Animated Text */}
        {showText && (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 animate-slide-up glow-text">
              Opening the Portal...
            </h1>
            <p className="text-lg text-amber-300 animate-slide-up animation-delay-300 glow-text">
              Entering the DevOps Multiverse
            </p>

            {/* Typewriter effect text */}
            <div className="text-sm text-gray-300 animate-slide-up animation-delay-600">
              <span className="inline-block animate-pulse">Initializing magical systems...</span>
            </div>
          </div>
        )}
      </div>

      {/* Loading Progress */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-80">
        <div className="relative">
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-300 ease-out shadow-lg shadow-emerald-400/50"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-emerald-300 text-sm font-medium">{loadingProgress}% Complete</div>
        </div>
      </div>

      {/* Mystical Symbols in corners */}
      <div className="absolute top-10 left-10 text-4xl text-emerald-500/30 animate-pulse">ᛟ</div>
      <div className="absolute top-10 right-10 text-4xl text-amber-500/30 animate-pulse animation-delay-300">ᚦ</div>
      <div className="absolute bottom-10 left-10 text-4xl text-emerald-500/30 animate-pulse animation-delay-600">ᚱ</div>
      <div className="absolute bottom-10 right-10 text-4xl text-amber-500/30 animate-pulse animation-delay-200">ᚨ</div>
    </div>
  )
}
