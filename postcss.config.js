/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {}, // Use Tailwind CSS plugin
    autoprefixer: {}, // Add vendor prefixes for better browser support
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: "default" } } // Minify CSS in production
      : {}),
  },
};
