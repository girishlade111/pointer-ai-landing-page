/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set for GitHub Pages project-site deploy (https://girishlade111.github.io/pointer-ai-landing-page/).
  // Remove basePath (or set to '') when deploying to a custom domain or a root host like Vercel/Netlify.
  basePath: '/pointer-ai-landing-page',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
