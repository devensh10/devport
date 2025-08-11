"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { useTheme, colors } from "@/contexts/theme-context"

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sanskriti College",
    university: "Rajasthan University",
    year: "2022-2025",
    description: "Focused on computer science fundamentals, programming, and software development",
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "Tagore Vidya Bhawan",
    university: "RBSE",
    year: "2022",
    description: "Science stream with Mathematics, Physics, and Chemistry",
  },
  {
    degree: "10th Grade (Secondary)",
    institution: "Tagore Vidya Bhawan",
    university: "RBSE",
    year: "2020",
    description: "Strong foundation in mathematics and science subjects",
  },
]

export default function Education() {
  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: { [key: string]: { accent: string; icon: string; timeline: string; dot: string } } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        icon: "text-purple-600 dark:text-purple-400",
        timeline: "bg-purple-200 dark:bg-purple-700",
        dot: "bg-purple-600 dark:bg-purple-400",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        icon: "text-blue-600 dark:text-blue-400",
        timeline: "bg-blue-200 dark:bg-blue-700",
        dot: "bg-blue-600 dark:bg-blue-400",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        icon: "text-emerald-600 dark:text-emerald-400",
        timeline: "bg-emerald-200 dark:bg-emerald-700",
        dot: "bg-emerald-600 dark:bg-emerald-400",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        icon: "text-rose-600 dark:text-rose-400",
        timeline: "bg-rose-200 dark:bg-rose-700",
        dot: "bg-rose-600 dark:bg-rose-400",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        icon: "text-orange-600 dark:text-orange-400",
        timeline: "bg-orange-200 dark:bg-orange-700",
        dot: "bg-orange-600 dark:bg-orange-400",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        icon: "text-cyan-600 dark:text-cyan-400",
        timeline: "bg-cyan-200 dark:bg-cyan-700",
        dot: "bg-cyan-600 dark:bg-cyan-400",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        icon: "text-indigo-600 dark:text-indigo-400",
        timeline: "bg-indigo-200 dark:bg-indigo-700",
        dot: "bg-indigo-600 dark:bg-indigo-400",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        icon: "text-pink-600 dark:text-pink-400",
        timeline: "bg-pink-200 dark:bg-pink-700",
        dot: "bg-pink-600 dark:bg-pink-400",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">🎓 Education</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            My educational journey that shaped my technical foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-8 top-0 bottom-0 w-0.5 transition-colors ${getColorClasses().timeline}`}
            ></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 ${getColorClasses().dot} rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-125 transition-all duration-300`}
                ></div>

                {/* Content */}
                <div className="ml-16 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full border border-gray-100 dark:border-gray-700 animate-glowing-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <GraduationCap className={`${getColorClasses().icon} transition-colors`} size={24} />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 transition-colors">
                      <Calendar size={16} />
                      {edu.year}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{edu.university}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 transition-colors">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div
              className={`${getColorClasses().accent.replace("bg-", "bg-").replace("-600", "-50").replace("dark:bg-", "dark:bg-").replace("-400", "-900/20")} p-6 rounded-xl border ${getColorClasses().accent.replace("bg-", "border-").replace("-600", "-100").replace("dark:bg-", "dark:border-").replace("-400", "-800")} transition-colors`}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 italic transition-colors">
                "My educational journey has helped shape my logical thinking and technical foundation. Each step
                strengthened my passion for DevOps, Cloud, and Software Development."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
