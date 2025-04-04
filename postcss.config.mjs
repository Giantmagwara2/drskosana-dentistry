/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'), // Processes Tailwind CSS classes and utilities
    require('autoprefixer'), // Adds vendor prefixes for better cross-browser compatibility
    ...(process.env.NODE_ENV === 'production'
      ? [require('cssnano')({ preset: 'default' })] // Minifies CSS in production builds
      : []),
  ],
};

export default config;