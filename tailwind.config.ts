import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D0D1A",
        surface: "#151524",
        "surface-2": "#1C1C2E",
        text: "#FFFFFF",
        muted: "#8B8B9A",
        purple: {
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
        },
        magenta: "#D946EF",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(168,85,247,0.3)",
        "glow-md": "0 0 40px rgba(168,85,247,0.5)",
        "glow-lg": "0 0 80px rgba(168,85,247,0.6)",
        "glow-magenta": "0 0 60px rgba(217,70,239,0.5)",
        "inner-glow": "inset 0 0 30px rgba(168,85,247,0.2)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-magenta":
          "linear-gradient(135deg, #D946EF 0%, #A855F7 50%, #7E22CE 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-40px) translateX(20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 30px rgba(168,85,247,0.4)",
            opacity: "0.8",
          },
          "50%": {
            boxShadow: "0 0 60px rgba(168,85,247,0.8)",
            opacity: "1",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "32px 32px" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "grid-drift": "grid-drift 20s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
