/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // Use the new Tailwind CSS PostCSS plugin
    autoprefixer: {}, // Add other PostCSS plugins if needed
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: "default" } }
      : {}),
  },
};
