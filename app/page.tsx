"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import MouseFollower from "@/components/mouse-follower"
import UnifiedBackground from "@/components/unified-background"
import Moving3DBackground from "@/components/moving-3d-background"
import DoctorStrangeLoader from "@/components/doctor-strange-loader"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

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
