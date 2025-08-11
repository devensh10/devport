"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Linkedin, MapPin, Send } from 'lucide-react'
import { useTheme, colors } from "@/contexts/theme-context"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: {
      [key: string]: { accent: string; iconBg: string; linkText: string; button: string; focusRing: string }
    } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        iconBg: "bg-purple-600 dark:bg-purple-500",
        linkText: "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300",
        button: "bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600",
        focusRing: "focus:ring-purple-600 dark:focus:ring-purple-400",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        iconBg: "bg-blue-600 dark:bg-blue-500",
        linkText: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
        button: "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600",
        focusRing: "focus:ring-blue-600 dark:focus:ring-blue-400",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        iconBg: "bg-emerald-600 dark:bg-emerald-500",
        linkText: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300",
        button: "bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600",
        focusRing: "focus:ring-emerald-600 dark:focus:ring-emerald-400",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        iconBg: "bg-rose-600 dark:bg-rose-500",
        linkText: "text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300",
        button: "bg-rose-600 dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-600",
        focusRing: "focus:ring-rose-600 dark:focus:ring-rose-400",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        iconBg: "bg-orange-600 dark:bg-orange-500",
        linkText: "text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300",
        button: "bg-orange-600 dark:bg-orange-500 hover:text-orange-700 dark:hover:bg-orange-600",
        focusRing: "focus:ring-orange-600 dark:focus:ring-orange-400",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        iconBg: "bg-cyan-600 dark:bg-cyan-500",
        linkText: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300",
        button: "bg-cyan-600 dark:bg-cyan-500 hover:text-cyan-700 dark:hover:bg-cyan-600",
        focusRing: "focus:ring-cyan-600 dark:focus:ring-cyan-400",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        iconBg: "bg-indigo-600 dark:bg-indigo-500",
        linkText: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300",
        button: "bg-indigo-600 dark:bg-indigo-500 hover:text-indigo-700 dark:hover:bg-indigo-600",
        focusRing: "focus:ring-indigo-600 dark:focus:ring-indigo-400",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        iconBg: "bg-pink-600 dark:bg-pink-500",
        linkText: "text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300",
        button: "bg-pink-600 dark:bg-pink-500 hover:text-pink-700 dark:hover:bg-pink-600",
        focusRing: "focus:ring-pink-600 dark:focus:ring-pink-400",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">📬 Get in Touch</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Let's connect and discuss opportunities, projects, or just have a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
                  <div
                    className={`w-12 h-12 ${getColorClasses().iconBg} rounded-full flex items-center justify-center transition-colors`}
                  >
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors">Phone</p>
                    <a href="tel:+918448495989" className={`${getColorClasses().linkText} transition-colors`}>
                      +91 8448495989
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
                  <div
                    className={`w-12 h-12 ${getColorClasses().iconBg} rounded-full flex items-center justify-center transition-colors`}
                  >
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors">Email</p>
                    <a
                      href="mailto:saindevensh@gmail.com"
                      className={`${getColorClasses().linkText} transition-colors`}
                    >
                      saindevensh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
                  <div
                    className={`w-12 h-12 ${getColorClasses().iconBg} rounded-full flex items-center justify-center transition-colors`}
                  >
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/devensh-sain-538226255"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${getColorClasses().linkText} transition-colors`}
                    >
                      linkedin.com/in/devensh-sain-538226255
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
                  <div
                    className={`w-12 h-12 ${getColorClasses().iconBg} rounded-full flex items-center justify-center transition-colors`}
                  >
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors">Location</p>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg ${getColorClasses().focusRing} focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg ${getColorClasses().focusRing} focus:border-transparent transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className={`w-full ${getColorClasses().button} text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group`}
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
