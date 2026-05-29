/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: "#E07B00", light: "#FFF3E0", dark: "#B85E00", 50: "#FFF8F0", 100: "#FFE8C4" },
        burgundy: { DEFAULT: "#8B1A1A", light: "#FFEBEE", dark: "#5C0000", 50: "#FFF0F0" },
        gold: { DEFAULT: "#F5C518", light: "#FFFDE7", dark: "#C49A00", 50: "#FFFBEB" },
        cream: { DEFAULT: "#FFF8F0", dark: "#F5EDE0" },
        telangana: { green: "#2E7D32", greenLight: "#E8F5E9" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Poppins'", "sans-serif"],
        telugu: ["'Noto Sans Telugu'", "'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1a0a00 0%, #3d1a00 30%, #6b2d00 60%, #8B1A1A 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,248,240,0.95), rgba(255,243,224,0.9))",
        "gold-gradient": "linear-gradient(135deg, #F5C518, #E07B00)",
        "saffron-gradient": "linear-gradient(135deg, #E07B00, #8B1A1A)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(139, 26, 26, 0.08), 0 1px 4px rgba(224, 123, 0, 0.06)",
        "card-hover": "0 12px 40px rgba(139, 26, 26, 0.15), 0 4px 12px rgba(224, 123, 0, 0.12)",
        "gold": "0 4px 20px rgba(245, 197, 24, 0.3)",
        "nav": "0 2px 20px rgba(26, 10, 0, 0.12)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        "pulse-gold": { "0%,100%": { boxShadow: "0 0 0 0 rgba(245,197,24,0.4)" }, "50%": { boxShadow: "0 0 0 12px rgba(245,197,24,0)" } },
        "slide-up": { "0%": { transform: "translateY(30px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};
