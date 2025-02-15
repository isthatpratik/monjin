/** @type {import('next').NextConfig} */
const nextConfig = {
  bundlePagesRouterDependencies: true,
  images: {
    domains: ["monjindoc.blob.core.windows.net"], 
  },
}
 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)