module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        floaty: "0 25px 60px rgba(190, 24, 93, 0.10)",
        soft: "0 15px 40px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        blush: "radial-gradient(circle at top left, rgba(251, 207, 232, 0.72), transparent 30%), radial-gradient(circle at bottom right, rgba(253, 224, 71, 0.16), transparent 24%), linear-gradient(180deg, #fffafc 0%, #fff7fb 45%, #ffffff 100%)"
      }
    }
  },
  plugins: []
};
