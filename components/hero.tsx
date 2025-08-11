"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTheme, colors } from "@/contexts/theme-context"

export default function Hero() {
  const { theme, colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = (type: "primary" | "secondary" | "accent") => {
    const colorMap: { [key: string]: { [key in typeof type]: string } } = {
      purple: {
        primary: "text-purple-600 dark:text-purple-400",
        secondary: "from-purple-400 to-cyan-400",
        accent: "text-purple-600 dark:text-purple-400",
      },
      blue: {
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "from-blue-400 to-cyan-400",
        accent: "text-blue-600 dark:text-blue-400",
      },
      emerald: {
        primary: "text-emerald-600 dark:text-emerald-400",
        secondary: "from-emerald-400 to-teal-400",
        accent: "text-emerald-600 dark:text-emerald-400",
      },
      rose: {
        primary: "text-rose-600 dark:text-rose-400",
        secondary: "from-rose-400 to-pink-400",
        accent: "text-rose-600 dark:text-rose-400",
      },
      orange: {
        primary: "text-orange-600 dark:text-orange-400",
        secondary: "from-orange-400 to-red-400",
        accent: "text-orange-600 dark:text-orange-400",
      },
      cyan: {
        primary: "text-cyan-600 dark:text-cyan-400",
        secondary: "from-cyan-400 to-blue-400",
        accent: "text-cyan-600 dark:text-cyan-400",
      },
      indigo: {
        primary: "text-indigo-600 dark:text-indigo-400",
        secondary: "from-indigo-400 to-purple-400",
        accent: "text-indigo-600 dark:text-indigo-400",
      },
      pink: {
        primary: "text-pink-600 dark:text-pink-400",
        secondary: "from-pink-400 to-rose-400",
        accent: "text-pink-600 dark:text-pink-400",
      },
      brown: {
        primary: "text-brown-600 dark:text-brown-400",
        secondary: "from-brown-400 to-brown-400",
        accent: "text-brown-600 dark:text-brown-400",
      },
    }
    return colorMap[currentColor.name]?.[type] || colorMap.purple[type]
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-linen via-orange-50/30 to-amber-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 pt-20 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Hero-specific animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-current opacity-20 rounded-full animate-pulse"
          style={{ color: getColorClasses("primary").split(" ")[0].replace("text-", "") }}
        ></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-current opacity-30 rounded-full animate-bounce"
          style={{ color: getColorClasses("primary").split(" ")[0].replace("text-", "") }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-current opacity-25 rounded-full animate-pulse"
          style={{ color: getColorClasses("primary").split(" ")[0].replace("text-", "") }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up transition-colors">
              Devensh Sain
            </h1>

            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 animate-slide-up animation-delay-200 transition-colors ${getColorClasses("primary")}`}
            >
              DevOps & Cloud Engineer
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up animation-delay-400 transition-colors">
              Passionate about building secure, scalable systems and exploring the infinite possibilities of cloud
              technology
            </p>

            {/* Profile Cards */}
            <div className="grid md:grid-cols-1 gap-4 animate-slide-up animation-delay-600">
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 animate-glowing-border">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🎓</div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                      BCA Student
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                      Cloud, Security, Linux, Python
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 animate-glowing-border">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">⚙️</div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                      DevOps Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                      Docker, AWS, CI/CD, Infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 animate-glowing-border">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">♟️</div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                      Chess Enthusiast
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                      Strategic Thinking & Problem Solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/70 dark:border-gray-700/70 shadow-2xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm animate-glowing-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Devensh Sain"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="animate-bounce">
            <ChevronDown className={`mx-auto transition-colors ${getColorClasses("accent")}`} size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
