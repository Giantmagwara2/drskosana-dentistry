import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode via class
  content: [
    "./src/**/*.{ts,tsx}", // Include all files in the `src` directory
    "./app/**/*.{ts,tsx}", // Include files in the `app` directory (for Next.js 13+)
    "./components/**/*.{ts,tsx}", // Include component files
    "./pages/**/*.{ts,tsx}", // Include legacy `pages` directory if needed
    "./src/styles/**/*.{css}", // Include global CSS files
    "./public/**/*.html", // Include static HTML files (if applicable)
  ],
  prefix: "shadcn-", // Add a prefix to avoid class name conflicts
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px", // Define a custom max-width for large screens
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Ensure this is defined
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
        "brand-primary": "#144a8c",
        "brand-secondary": "#9a5b4f",
        "brand-light": "#f0f2f4",
        "brand-accent": "#55b7df",
        "brand-neutral": "#95aebe",
        "brand-warm": "#c18b6b",
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        "dark-background": "#121212",
        "dark-text": "#e0e0e0",
        "dark-border": "#333333",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
};

export default config;
