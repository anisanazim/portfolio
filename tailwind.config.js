/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Authentic Northern Lights Colors
        'aurora-green': '#00CF52',        // Bright aurora green
        'aurora-teal': '#0EF3C5',         // Electric cyan-green
        'aurora-blue': '#025385',         // Deep polar blue
        'aurora-purple': '#8A2BE2',       // Cosmic purple
        'aurora-pink': '#FF69B4',         // Rare pink aurora
        'aurora-yellow': '#FFFF00',       // Golden aurora tips
        'space-black': '#000000',         // Pure space black
        'deep-space': '#0B0B1A',         // Very dark navy
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #00CF52, #0EF3C5, #025385)',
        'space-gradient': 'radial-gradient(ellipse at center, #0B0B1A 0%, #000000 100%)',
      },
      animation: {
        'aurora-shimmer': 'aurora 10s ease infinite',
        'aurora-drift': 'aurora-drift 20s ease-in-out infinite',
        'shimmer': 'shimmer-sweep 3s infinite',
        'aurora-pulse': 'aurora-pulse 4s ease-in-out infinite',
      },
      backgroundSize: {
        'aurora': '400% 400%',
      },
    },
  },
  plugins: [],
}