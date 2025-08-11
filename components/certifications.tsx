"use client"

import { ExternalLink, Award } from "lucide-react"
import { useTheme, colors } from "@/contexts/theme-context"

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "#",
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2024",
    url: "#",
  },
  {
    title: "Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    url: "#",
  },
  {
    title: "GitHub Actions Certification",
    issuer: "GitHub",
    date: "2023",
    url: "#",
  },
  {
    title: "Linux Professional Institute",
    issuer: "LPI",
    date: "2023",
    url: "#",
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2024",
    url: "#",
  },
]

export default function Certifications() {
  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: { [key: string]: { accent: string; icon: string; button: string } } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        icon: "text-purple-600 dark:text-purple-400",
        button: "bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        icon: "text-blue-600 dark:text-blue-400",
        button: "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        icon: "text-emerald-600 dark:text-emerald-400",
        button: "bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        icon: "text-rose-600 dark:text-rose-400",
        button: "bg-rose-600 dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-600",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        icon: "text-orange-600 dark:text-orange-400",
        button: "bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        icon: "text-cyan-600 dark:text-cyan-400",
        button: "bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        icon: "text-indigo-600 dark:text-indigo-400",
        button: "bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        icon: "text-pink-600 dark:text-pink-400",
        button: "bg-pink-600 dark:bg-pink-500 hover:bg-pink-700 dark:hover:bg-pink-600",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">🎓 Certifications</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Professional certifications that validate my expertise in cloud and DevOps technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100 dark:border-gray-700 animate-glowing-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${getColorClasses().icon} group-hover:scale-110 transition-all duration-300`}>
                  <Award size={32} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full transition-colors">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                {cert.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">{cert.issuer}</p>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${getColorClasses().button} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors group-hover:scale-105`}
              >
                <ExternalLink size={16} />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
