import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        linen: "#faf0e6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "loading-bar": "loadingBar 4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 15s ease infinite",
        twinkle: "twinkle 2s ease-in-out infinite alternate",
        "mystical-glow": "mysticalGlow 3s ease-in-out infinite alternate",
        "portal-spin": "portalSpin 20s linear infinite",
        "3d-float": "float3D 8s ease-in-out infinite",
        "3d-rotate": "rotate3D 12s linear infinite",
        "glowing-border": "glowing-border 3s ease-in-out infinite alternate",
        "glowing-border-dark": "glowing-border-dark 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loadingBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float3D: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "translate3d(20px, -30px, 50px) rotateX(90deg) rotateY(45deg)" },
          "50%": { transform: "translate3d(-20px, -60px, 100px) rotateX(180deg) rotateY(90deg)" },
          "75%": { transform: "translate3d(-40px, -30px, 50px) rotateX(270deg) rotateY(135deg)" },
        },
        rotate3D: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg) rotateZ(360deg)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        twinkle: {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.2)" },
        },
        mysticalGlow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3), 0 0 15px rgba(16, 185, 129, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 10px rgba(245, 158, 11, 0.5), 0 0 20px rgba(245, 158, 11, 0.3), 0 0 30px rgba(245, 158, 11, 0.2)",
          },
        },
        portalSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glowing-border": {
          "0%, 100%": { boxShadow: "0 0 0px rgba(var(--accent-rgb-light), 0)" },
          "50%": {
            boxShadow: "0 0 15px rgba(var(--accent-rgb-light), 0.6), 0 0 30px rgba(var(--accent-rgb-light), 0.4)",
          },
        },
        "glowing-border-dark": {
          "0%, 100%": { boxShadow: "0 0 0px rgba(var(--accent-rgb-dark), 0)" },
          "50%": {
            boxShadow: "0 0 15px rgba(var(--accent-rgb-dark), 0.6), 0 0 30px rgba(var(--accent-rgb-dark), 0.4)",
          },
        },
      },
      backgroundSize: {
        "400%": "400%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
