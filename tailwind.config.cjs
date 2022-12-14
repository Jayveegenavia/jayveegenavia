/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#303030",
        primary: "#ff914d",
        textColor: "white",
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
        qwitcher: "Qwitcher Grypen, sans-serif",
      },
      backgroundImage: {
        bgImg: "url('/src/assets/img/bgImg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
