/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      // Straight from the logo: white is the primary ground, the deep green of
      // the "KRISHNA SURABHI" wordmark is the secondary, and the gold of the sun
      // arc plus the espresso of the cow silhouette are the accents.
      colors: {
        // The logo is white first. Its ink is the espresso of the cow
        // silhouette — that carries every dark surface, heading and button —
        // and the gold of the sun arc is the one accent. (The `forest` keys are
        // kept as names so the whole site keeps routing through them.)
        forest: {
          DEFAULT: '#3B2A1B',   // espresso — buttons, links, dark type
          dark: '#231A12',      // deepest espresso — dark surfaces & headings
          light: '#6B543E',
        },
        mint: '#EFEBE3',
        cream: '#FFFFFF',       // primary ground
        beige: '#F3F1EC',
        sand: '#F8F7F4',        // alternating section ground — warm, neutral
        brown: '#4A3323',       // espresso — body copy
        gold: {
          DEFAULT: '#9C6B20',
          dark: '#7A5216',
          light: '#E0BC7A',
        },
        // Legacy alias — the accent is the logo's antique gold.
        saffron: '#9C6B20',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
