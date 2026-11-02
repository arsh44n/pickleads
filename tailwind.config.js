/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        court: {
          bg: "#F8F9FA",          // Crisp Off-White
          charcoal: "#1E2229",    // Deep Court Charcoal
          dark: "#14171C",        // Elevated Dark Surfaces
          green: "#1A4332",       // Rich Forest Green
          greenDark: "#123024",   // Deep Lawn Green
          lime: "#D4F03C",        // Electric Pickle / Neon Lime Accent
          limeHover: "#C2DE32",   // Electric Lime Hover
          border: "rgba(30, 34, 41, 0.12)",
          borderLight: "rgba(255, 255, 255, 0.15)",
          muted: "#6B7280",
          silver: "#E5E7EB",
        }
      },
      fontFamily: {
        display: ['PERANDORY', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Didact Gothic"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'lime-glow': '0 0 25px rgba(212, 240, 60, 0.45)',
        'court-card': '0 10px 30px -5px rgba(30, 34, 41, 0.08), 0 4px 6px -2px rgba(30, 34, 41, 0.04)',
        'court-elevated': '0 20px 45px -10px rgba(30, 34, 41, 0.14)',
      }
    },
  },
  plugins: [],
}
