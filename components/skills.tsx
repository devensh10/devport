"use client"

import { useState } from "react"
import { useTheme, colors } from "@/contexts/theme-context"

const skills = [
  { name: "Kubernetes", description: "Container Orchestration", icon: "⚙️", level: 88 },
  { name: "Jenkins", description: "CI/CD Automation", icon: "🔧", level: 85 },
  { name: "Terraform", description: "Infrastructure as Code", icon: "🏗️", level: 90 },
  { name: "Python", description: "Automation & Scripting", icon: "🐍", level: 85 },
  { name: "Docker", description: "Containerization", icon: "🐳", level: 90 },
  { name: "AWS", description: "EC2, S3, Lambda", icon: "☁️", level: 80 },
  { name: "Git & GitHub", description: "Version Control", icon: "📚", level: 85 },
  { name: "Linux", description: "CLI, Bash Scripting", icon: "🐧", level: 88 },
  { name: "CI/CD", description: "GitHub Actions, Jenkins", icon: "🔄", level: 82 },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: { [key: string]: { accent: string; gradient: string; text: string } } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        gradient: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        gradient: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        gradient: "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
        text: "text-emerald-600 dark:text-emerald-400",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        gradient: "from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500",
        text: "text-rose-600 dark:text-rose-400",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        gradient: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        gradient: "from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500",
        text: "text-cyan-600 dark:text-cyan-400",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        gradient: "from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
        text: "text-indigo-600 dark:text-indigo-400",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        gradient: "from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500",
        text: "text-pink-600 dark:text-pink-400",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section
      id="skills"
      className="py-20 bg-orange-50/30 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Technical Skills</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Here are the technologies and tools I work with to build amazing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border border-gray-200/50 dark:border-gray-700/50 hover:border-current animate-glowing-border"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                borderColor:
                  hoveredSkill === skill.name ? getColorClasses().text.split(" ")[0].replace("text-", "") : undefined,
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                {skill.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">{skill.description}</p>

              <div className="w-full bg-gray-200/70 dark:bg-gray-700/70 rounded-full h-2 transition-colors backdrop-blur-sm">
                <div
                  className={`bg-gradient-to-r ${getColorClasses().gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>

              <div className="text-right mt-2">
                <span className={`text-sm font-medium transition-colors ${getColorClasses().text}`}>
                  {hoveredSkill === skill.name ? `${skill.level}%` : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
