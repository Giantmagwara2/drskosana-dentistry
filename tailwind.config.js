// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Scan the `app` directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Scan components
    "./src/lib/**/*.{js,ts,jsx,tsx}", // Scan utility files
    "./src/styles/**/*.{css}", // Include global CSS files
    "./public/**/*.html", // Include any static HTML files
  ],
  plugins: [],
  // Other configurations...
};
