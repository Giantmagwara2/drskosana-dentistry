/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for deployment to platforms like GitHub Pages, Vercel, etc.
  distDir: 'out', // Specifies the output directory for the static build files.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        port: '',
        pathname: '/**', // Allows all paths under this domain.
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**', // Restricts to specific API endpoints.
      },
    ],
    unoptimized: true, // Disables image optimization for static export (required for `output: 'export'`).
  },
  experimental: {
    appDir: true, // Enables the new App Router (if you're using Next.js 13+).
  },
  reactStrictMode: true, // Enables React Strict Mode for better debugging and performance checks.
  trailingSlash: true, // Ensures URLs end with a trailing slash for SEO consistency.
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint during builds to speed up the process (optional).
  },
  typescript: {
    ignoreBuildErrors: true, // Skips TypeScript errors during builds (use with caution).
  },
};

export default nextConfig;