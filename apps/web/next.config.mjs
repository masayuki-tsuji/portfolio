import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  compiler: { removeConsole: { exclude: ['error', 'warn', 'info'] } },
  experimental: {
    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

export default nextConfig;
