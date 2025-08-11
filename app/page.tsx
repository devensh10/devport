"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

const DoctorStrangeLoader = dynamic(() => import("@/components/doctor-strange-loader"), { ssr: false })
const Moving3DBackground = dynamic(() => import("@/components/moving-3d-background"), { ssr: false })
const UnifiedBackground = dynamic(() => import("@/components/unified-background"), { ssr: false })
const MouseFollower = dynamic(() => import("@/components/mouse-follower"), { ssr: false })

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // 5 seconds for the mystical experience

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      {loading ? (
        <DoctorStrangeLoader />
      ) : (
        <div className="min-h-screen bg-linen dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
          <Moving3DBackground />
          <UnifiedBackground />
          <MouseFollower />
          <div className="relative z-10">
            <Navigation />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Education />
              <Blog />
              <Contact />
            </main>
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}
