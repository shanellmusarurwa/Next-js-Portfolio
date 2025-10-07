const config = {
  plugins: ["@tailwindcss/postcss"],
  colors: {
    lightHover: "#fcf4ff",
    darkHover: "#2a004a",
    darkTheme: "11001F",
  },
  fontFmily: {
    Outfit: ["Outfit", "sans-serif"],
    Ovo: ["Ovo", "serif"],
  },
  boxShadow: {
    black: "4px 4px 0 #000",
    white: "4px 4px 0 #fff",
  },
  gridTemplateColumns: {
    auto: "repeat(auto-fit, minmax(200px, 1fr))",
  },
};

export default config;
