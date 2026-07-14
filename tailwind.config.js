import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        lab: {
          gold: '#9E7E38',       // Official WFU Old Gold
          'gold-dark': '#866B30', // 15% darker — hover states
          'gold-light': '#ECE5D7', // 20% tint toward white — card backgrounds

          black: '#111111',
          charcoal: '#2D2D2D',
          white: '#ffffff',
          'off-white': '#F7F7F5',
          'warm-gray': '#E8E4DB',
          'medium-gray': '#9E9E9E',
          // Slightly warmer than off-white — for alternating section surfaces
          'warm-surface': '#F5F1EB',
        },
      },
      boxShadow: {
        // Layered shadow for resting card state
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
        // Lifted shadow for card hover state
        'card-hover': '0 4px 12px rgba(0,0,0,0.09), 0 12px 32px rgba(0,0,0,0.07)',
      },
      letterSpacing: {
        // Wider than Tailwind's "widest" (0.1em) — used for eyebrow labels
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [daisyui({ themes: ['light --default'] })],
}
