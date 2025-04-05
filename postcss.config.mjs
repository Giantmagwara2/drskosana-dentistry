/** @type {import('postcss-load-config').Config} */
import tailwindcss from 'tailwindcss'; // Replace `require` with `import`
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano'; // Import cssnano for minification

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production'
      ? [cssnano({ preset: 'default' })] // Use imported cssnano
      : []),
  ],
};