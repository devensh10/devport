"use client"

import { useEffect, useRef } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const { theme, colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = "1"
      cursorDot.style.opacity = "1"
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"
      cursorDot.style.opacity = "0"
    }

    const handleMouseDown = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(0.8)`
      cursorDot.style.transform = `translate(-50%, -50%) scale(1.5)`
    }

    const handleMouseUp = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`
      cursorDot.style.transform = `translate(-50%, -50%) scale(1)`
    }

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      cursor.style.left = `${cursorX}px`
      cursor.style.top = `${cursorY}px`

      cursorDot.style.left = `${mouseX}px`
      cursorDot.style.top = `${mouseY}px`

      requestAnimationFrame(animateCursor)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    animateCursor()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const getColorValue = () => {
    const colorMap: { [key: string]: { light: string; dark: string } } = {
      purple: { light: "139, 92, 246", dark: "168, 85, 247" },
      blue: { light: "59, 130, 246", dark: "96, 165, 250" },
      emerald: { light: "16, 185, 129", dark: "52, 211, 153" },
      rose: { light: "244, 63, 94", dark: "251, 113, 133" },
      orange: { light: "249, 115, 22", dark: "251, 146, 60" },
      cyan: { light: "6, 182, 212", dark: "34, 211, 238" },
      indigo: { light: "99, 102, 241", dark: "129, 140, 248" },
      pink: { light: "236, 72, 153", dark: "244, 114, 182" },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  const colorValue = getColorValue()
  const rgbColor = theme === "dark" ? colorValue.dark : colorValue.light

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 opacity-0 transition-all duration-300 ease-out mix-blend-difference"
        style={{
          background: `rgba(${rgbColor}, 0.2)`,
          border: `2px solid rgba(${rgbColor}, 0.8)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none z-50 opacity-0 transition-all duration-100 ease-out"
        style={{
          background: `rgba(${rgbColor}, 1)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 10px rgba(${rgbColor}, 0.5)`,
        }}
      />
    </>
  )
}
