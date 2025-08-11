"use client"

import { useTheme, colors } from "@/contexts/theme-context"

export default function About() {
  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getAccentClass = () => {
    const colorMap: { [key: string]: string } = {
      purple: "bg-purple-600 dark:bg-purple-400",
      blue: "bg-blue-600 dark:bg-blue-400",
      emerald: "bg-emerald-600 dark:bg-emerald-400",
      rose: "bg-rose-600 dark:bg-rose-400",
      orange: "bg-orange-600 dark:bg-orange-400",
      cyan: "bg-cyan-600 dark:bg-cyan-400",
      indigo: "bg-indigo-600 dark:bg-indigo-400",
      pink: "bg-pink-600 dark:bg-pink-400",
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section
      id="about"
      className="py-20 bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">About Me</h2>
          <div className={`w-24 h-1 mx-auto transition-colors ${getAccentClass()}`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 animate-glowing-border">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
              I'm a passionate DevOps and Cloud Engineer with a strong foundation in modern infrastructure technologies.
              Currently pursuing my BCA from Sanskriti College, I combine academic learning with hands-on experience in
              cloud platforms, containerization, and automation.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
              My journey in technology is driven by curiosity and a desire to build scalable, secure systems. I
              specialize in Docker, AWS, CI/CD pipelines, and have a keen interest in Linux systems and Python
              development.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              When I'm not coding or managing infrastructure, you'll find me playing chess, which has taught me
              strategic thinking and problem-solving skills that I apply to my technical work every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
