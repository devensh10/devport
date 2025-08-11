"use client"

import { useEffect, useRef } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement>(null)
  const { theme, colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Update SVG size on window resize
    const updateSize = () => {
      svg.setAttribute("width", window.innerWidth.toString())
      svg.setAttribute("height", window.innerHeight.toString())
      svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`)
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const getColorValues = () => {
    const colorMap: { [key: string]: { light: string; dark: string } } = {
      purple: { light: "rgba(139, 92, 246, 0.08)", dark: "rgba(139, 92, 246, 0.12)" },
      blue: { light: "rgba(59, 130, 246, 0.08)", dark: "rgba(96, 165, 250, 0.12)" },
      emerald: { light: "rgba(16, 185, 129, 0.08)", dark: "rgba(52, 211, 153, 0.12)" },
      rose: { light: "rgba(244, 63, 94, 0.08)", dark: "rgba(251, 113, 133, 0.12)" },
      orange: { light: "rgba(249, 115, 22, 0.08)", dark: "rgba(251, 146, 60, 0.12)" },
      cyan: { light: "rgba(6, 182, 212, 0.08)", dark: "rgba(34, 211, 238, 0.12)" },
      indigo: { light: "rgba(99, 102, 241, 0.08)", dark: "rgba(129, 140, 248, 0.12)" },
      pink: { light: "rgba(236, 72, 153, 0.08)", dark: "rgba(244, 114, 182, 0.12)" },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  const colorValues = getColorValues()
  const strokeColor = theme === "dark" ? colorValues.dark : colorValues.light

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="100" height="100">
            <path d="M0,100 L100,0" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.6">
              <animate
                attributeName="stroke-dasharray"
                values="0,200;100,100;0,200"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0,50 L50,0" stroke={strokeColor} strokeWidth="0.5" fill="none" opacity="0.4">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;0,100" dur="6s" repeatCount="indefinite" />
            </path>
            <path d="M50,100 L100,50" stroke={strokeColor} strokeWidth="0.5" fill="none" opacity="0.4">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;0,100" dur="10s" repeatCount="indefinite" />
            </path>
          </pattern>

          <pattern id="movingLines" patternUnits="userSpaceOnUse" width="200" height="200">
            <path d="M0,200 L200,0" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.3">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,50;0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M-50,150 L150,-50" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.2">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-30,-30;0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M50,250 L250,50" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;25,25;0,0"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
          </pattern>

          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.1" />
            <stop offset="50%" stopColor={strokeColor} stopOpacity="0.05" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Main diagonal pattern */}
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />

        {/* Moving lines overlay */}
        <rect width="100%" height="100%" fill="url(#movingLines)" />

        {/* Subtle gradient overlay */}
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />

        {/* Floating geometric shapes */}
        <circle cx="20%" cy="30%" r="2" fill={strokeColor} opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;30,20;0,0"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="8s" repeatCount="indefinite" />
        </circle>

        <circle cx="80%" cy="70%" r="1.5" fill={strokeColor} opacity="0.3">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-25,-15;0,0"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="10s" repeatCount="indefinite" />
        </circle>

        <circle cx="60%" cy="20%" r="1" fill={strokeColor} opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;15,25;0,0"
            dur="18s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="6s" repeatCount="indefinite" />
        </circle>

        <circle cx="30%" cy="80%" r="1.2" fill={strokeColor} opacity="0.35">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-20,10;0,0"
            dur="22s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.35;0.75;0.35" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
