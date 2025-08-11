"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useTheme, colors } from "@/contexts/theme-context"

const projects = [
  {
    name: "CI/CD Pipeline Automation",
    description: "Automated deployment pipeline using GitHub Actions and Docker",
    tech: ["GitHub Actions", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Cloud Infrastructure Setup",
    description: "Scalable AWS infrastructure with Terraform and monitoring",
    tech: ["AWS", "Terraform", "CloudWatch"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Containerized Web App",
    description: "Full-stack application with Docker containerization",
    tech: ["Docker", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Monitoring Dashboard",
    description: "Real-time monitoring with Prometheus and Grafana",
    tech: ["Prometheus", "Grafana", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Kubernetes Deployment",
    description: "Microservices deployment on Kubernetes cluster",
    tech: ["Kubernetes", "Docker", "Helm"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Infrastructure as Code",
    description: "AWS resources managed with Terraform modules",
    tech: ["Terraform", "AWS", "GitLab CI"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: { [key: string]: { accent: string; gradient: string; tagBg: string; tagText: string } } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        gradient: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
        tagBg: "bg-purple-100 dark:bg-purple-900",
        tagText: "text-purple-600 dark:text-purple-300",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        gradient: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
        tagBg: "bg-blue-100 dark:bg-blue-900",
        tagText: "text-blue-600 dark:text-blue-300",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        gradient: "from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
        tagBg: "bg-emerald-100 dark:bg-emerald-900",
        tagText: "text-emerald-600 dark:text-emerald-300",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        gradient: "from-rose-500 to-rose-600 dark:from-rose-600 dark:to-rose-700",
        tagBg: "bg-rose-100 dark:bg-rose-900",
        tagText: "text-rose-600 dark:text-rose-300",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        gradient: "from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700",
        tagBg: "bg-orange-100 dark:bg-orange-900",
        tagText: "text-orange-600 dark:text-orange-300",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        gradient: "from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700",
        tagBg: "bg-cyan-100 dark:bg-cyan-900",
        tagText: "text-cyan-600 dark:text-cyan-300",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        gradient: "from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700",
        tagBg: "bg-indigo-100 dark:bg-indigo-900",
        tagText: "text-indigo-600 dark:text-indigo-300",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        gradient: "from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700",
        tagBg: "bg-pink-100 dark:bg-pink-900",
        tagText: "text-pink-600 dark:text-pink-300",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Projects</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Here are some of my recent projects showcasing my DevOps and Cloud expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative h-64 perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br ${getColorClasses().gradient} rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 animate-glowing-border`}
                >
                  <h3 className="text-xl font-bold text-white text-center px-4">{project.name}</h3>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-100 dark:border-gray-700 animate-glowing-border">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 ${getColorClasses().tagBg} ${getColorClasses().tagText} text-xs rounded-full transition-colors`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className={`flex-1 ${getColorClasses().accent.replace("dark:bg-", "dark:bg-").replace("-400", "-500")} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors flex items-center justify-center gap-2`}
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
