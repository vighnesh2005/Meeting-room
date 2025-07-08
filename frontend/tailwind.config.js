/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@clerk/**/*.{js,ts,jsx,tsx}", // for Clerk styling
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",      // near black
        surface: "#1a1a1a",         // card surface
        border: "#2a2a2a",          // border around inputs/cards
        primary: "#6366f1",         // indigo-500 (buttons/links)
        primaryHover: "#4f46e5",    // indigo-600
        secondary: "#94a3b8",       // slate-400 (less prominent text)
        text: "#e5e7eb",            // text-gray-200
        muted: "#9ca3af",           // placeholder and hint text
        danger: "#ef4444",          // red-500
        success: "#22c55e",
      },
    },
  },
  plugins: [],
};
