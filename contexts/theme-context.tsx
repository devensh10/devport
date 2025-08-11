"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  currentColor: string
  colorIndex: number
}

const colors = [
  {
    name: "purple",
    primary: "purple-600",
    secondary: "purple-400",
    accent: "purple-500",
    accentRgbLight: "139, 92, 246",
    accentRgbDark: "168, 85, 247",
  },
  {
    name: "blue",
    primary: "blue-600",
    secondary: "blue-400",
    accent: "blue-500",
    accentRgbLight: "59, 130, 246",
    accentRgbDark: "96, 165, 250",
  },
  {
    name: "emerald",
    primary: "emerald-600",
    secondary: "emerald-400",
    accent: "emerald-500",
    accentRgbLight: "16, 185, 129",
    accentRgbDark: "52, 211, 153",
  },
  {
    name: "rose",
    primary: "rose-600",
    secondary: "rose-400",
    accent: "rose-500",
    accentRgbLight: "244, 63, 94",
    accentRgbDark: "251, 113, 133",
  },
  {
    name: "orange",
    primary: "orange-600",
    secondary: "orange-400",
    accent: "orange-500",
    accentRgbLight: "249, 115, 22",
    accentRgbDark: "251, 146, 60",
  },
  {
    name: "cyan",
    primary: "cyan-600",
    secondary: "cyan-400",
    accent: "cyan-500",
    accentRgbLight: "6, 182, 212",
    accentRgbDark: "34, 211, 238",
  },
  {
    name: "indigo",
    primary: "indigo-600",
    secondary: "indigo-400",
    accent: "indigo-500",
    accentRgbLight: "99, 102, 241",
    accentRgbDark: "129, 140, 248",
  },
  {
    name: "pink",
    primary: "pink-600",
    secondary: "pink-400",
    accent: "pink-500",
    accentRgbLight: "236, 72, 153",
    accentRgbDark: "244, 114, 182",
  },
]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }

    // Change color every 10 seconds
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 10000)

    return () => clearInterval(colorInterval)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    const currentAccent = colors[colorIndex]
    root.style.setProperty("--accent-rgb-light", currentAccent.accentRgbLight)
    root.style.setProperty("--accent-rgb-dark", currentAccent.accentRgbDark)
  }, [colorIndex, theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        currentColor: colors[colorIndex].name,
        colorIndex,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { colors }
