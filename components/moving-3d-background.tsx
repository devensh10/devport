"use client"

import { useEffect, useRef } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function Moving3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create 3D shapes
    const shapes: HTMLDivElement[] = []
    const shapeCount = 15

    // Clear existing shapes
    container.innerHTML = ""

    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement("div")
      const shapeType = Math.random() > 0.5 ? "cube" : "sphere"

      // Random size
      const size = Math.random() * 60 + 20

      // Random position
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const z = Math.random() * 1000 - 500

      // Random rotation speeds
      const rotateX = Math.random() * 360
      const rotateY = Math.random() * 360
      const rotateZ = Math.random() * 360

      // Random movement speeds
      const moveSpeed = Math.random() * 2 + 0.5
      const rotateSpeed = Math.random() * 2 + 0.5

      shape.className = `absolute pointer-events-none transition-all duration-1000 ease-linear ${
        shapeType === "cube" ? "3d-cube" : "3d-sphere"
      }`

      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.left = `${x}px`
      shape.style.top = `${y}px`
      shape.style.transform = `translateZ(${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      shape.style.opacity = "0.1"

      // Set color based on current theme
      const getShapeColor = () => {
        const colorMap: { [key: string]: { light: string; dark: string } } = {
          purple: {
            light: "rgba(139, 92, 246, 0.15)",
            dark: "rgba(168, 85, 247, 0.2)",
          },
          blue: {
            light: "rgba(59, 130, 246, 0.15)",
            dark: "rgba(96, 165, 250, 0.2)",
          },
          emerald: {
            light: "rgba(16, 185, 129, 0.15)",
            dark: "rgba(52, 211, 153, 0.2)",
          },
          rose: {
            light: "rgba(244, 63, 94, 0.15)",
            dark: "rgba(251, 113, 133, 0.2)",
          },
          orange: {
            light: "rgba(249, 115, 22, 0.15)",
            dark: "rgba(251, 146, 60, 0.2)",
          },
          cyan: {
            light: "rgba(6, 182, 212, 0.15)",
            dark: "rgba(34, 211, 238, 0.2)",
          },
          indigo: {
            light: "rgba(99, 102, 241, 0.15)",
            dark: "rgba(129, 140, 248, 0.2)",
          },
          pink: {
            light: "rgba(236, 72, 153, 0.15)",
            dark: "rgba(244, 114, 182, 0.2)",
          },
        }
        return colorMap[currentColor.name] || colorMap.purple
      }

      const shapeColor = getShapeColor()
      shape.style.backgroundColor = theme === "dark" ? shapeColor.dark : shapeColor.light
      shape.style.border = `1px solid ${theme === "dark" ? shapeColor.dark : shapeColor.light}`

      if (shapeType === "sphere") {
        shape.style.borderRadius = "50%"
      }

      // Add wireframe effect for cubes
      if (shapeType === "cube") {
        shape.style.background = `linear-gradient(45deg, ${theme === "dark" ? shapeColor.dark : shapeColor.light} 25%, transparent 25%), 
                                  linear-gradient(-45deg, ${theme === "dark" ? shapeColor.dark : shapeColor.light} 25%, transparent 25%), 
                                  linear-gradient(45deg, transparent 75%, ${theme === "dark" ? shapeColor.dark : shapeColor.light} 75%), 
                                  linear-gradient(-45deg, transparent 75%, ${theme === "dark" ? shapeColor.dark : shapeColor.light} 75%)`
        shape.style.backgroundSize = "10px 10px"
        shape.style.backgroundPosition = "0 0, 0 5px, 5px -5px, -5px 0px"
      }

      // Store animation properties
      shape.dataset.moveSpeed = moveSpeed.toString()
      shape.dataset.rotateSpeed = rotateSpeed.toString()
      shape.dataset.initialX = x.toString()
      shape.dataset.initialY = y.toString()
      shape.dataset.initialZ = z.toString()

      container.appendChild(shape)
      shapes.push(shape)
    }

    // Animation loop
    let animationId: number
    const startTime = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = (currentTime - startTime) / 1000

      shapes.forEach((shape, index) => {
        const moveSpeed = Number.parseFloat(shape.dataset.moveSpeed || "1")
        const rotateSpeed = Number.parseFloat(shape.dataset.rotateSpeed || "1")
        const initialX = Number.parseFloat(shape.dataset.initialX || "0")
        const initialY = Number.parseFloat(shape.dataset.initialY || "0")
        const initialZ = Number.parseFloat(shape.dataset.initialZ || "0")

        // Calculate new positions
        const newX = initialX + Math.sin(elapsed * moveSpeed + index) * 100
        const newY = initialY + Math.cos(elapsed * moveSpeed + index) * 50
        const newZ = initialZ + Math.sin(elapsed * moveSpeed * 0.5 + index) * 200

        // Calculate rotations
        const rotateX = elapsed * rotateSpeed * 30 + index * 45
        const rotateY = elapsed * rotateSpeed * 45 + index * 30
        const rotateZ = elapsed * rotateSpeed * 60 + index * 60

        // Apply transformations
        shape.style.transform = `
          translate3d(${newX}px, ${newY}px, ${newZ}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          rotateZ(${rotateZ}deg)
          scale(${1 + Math.sin(elapsed + index) * 0.2})
        `

        // Wrap around screen
        if (newX > window.innerWidth + 100) {
          shape.dataset.initialX = (-100).toString()
        }
        if (newX < -100) {
          shape.dataset.initialX = (window.innerWidth + 100).toString()
        }
        if (newY > window.innerHeight + 100) {
          shape.dataset.initialY = (-100).toString()
        }
        if (newY < -100) {
          shape.dataset.initialY = (window.innerHeight + 100).toString()
        }

        // Update colors based on current theme
        const getShapeColor = () => {
          const colorMap: { [key: string]: { light: string; dark: string } } = {
            purple: {
              light: "rgba(139, 92, 246, 0.15)",
              dark: "rgba(168, 85, 247, 0.2)",
            },
            blue: {
              light: "rgba(59, 130, 246, 0.15)",
              dark: "rgba(96, 165, 250, 0.2)",
            },
            emerald: {
              light: "rgba(16, 185, 129, 0.15)",
              dark: "rgba(52, 211, 153, 0.2)",
            },
            rose: {
              light: "rgba(244, 63, 94, 0.15)",
              dark: "rgba(251, 113, 133, 0.2)",
            },
            orange: {
              light: "rgba(249, 115, 22, 0.15)",
              dark: "rgba(251, 146, 60, 0.2)",
            },
            cyan: {
              light: "rgba(6, 182, 212, 0.15)",
              dark: "rgba(34, 211, 238, 0.2)",
            },
            indigo: {
              light: "rgba(99, 102, 241, 0.15)",
              dark: "rgba(129, 140, 248, 0.2)",
            },
            pink: {
              light: "rgba(236, 72, 153, 0.15)",
              dark: "rgba(244, 114, 182, 0.2)",
            },
          }
          return colorMap[currentColor.name] || colorMap.purple
        }

        const shapeColor = getShapeColor()
        shape.style.backgroundColor = theme === "dark" ? shapeColor.dark : shapeColor.light
        shape.style.borderColor = theme === "dark" ? shapeColor.dark : shapeColor.light
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      // Update positions on resize
      shapes.forEach((shape) => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        shape.dataset.initialX = x.toString()
        shape.dataset.initialY = y.toString()
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme, colorIndex])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
      }}
    />
  )
}
