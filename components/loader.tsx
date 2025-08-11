"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Loader() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Moving Lines */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,400 Q300,200 600,400 T1200,400;M0,400 Q300,600 600,400 T1200,400;M0,400 Q300,200 600,400 T1200,400"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,300 Q400,100 800,300 T1200,300"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,300 Q400,100 800,300 T1200,300;M0,300 Q400,500 800,300 T1200,300;M0,300 Q400,100 800,300 T1200,300"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0,500 Q200,300 400,500 T800,500"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0,500 Q200,300 400,500 T800,500;M0,500 Q200,700 400,500 T800,500;M0,500 Q200,300 400,500 T800,500"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Profile Image with Rolling Animation */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl animate-spin-slow relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse opacity-20"></div>
            <Image
              src="/images/profile.jpg"
              alt="Devensh Sain"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-30 blur-xl animate-pulse"></div>
        </div>

        {/* Animated Text */}
        {showText && (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-slide-up">Welcome to My Portfolio</h1>
            <p className="text-xl text-purple-200 animate-slide-up animation-delay-300">
              Devensh Sain - DevOps & Cloud Engineer
            </p>
            <div className="flex justify-center mt-6">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Loading Progress */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
