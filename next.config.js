/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "pechinchou.com.br"
    ]
  },
}

module.exports = nextConfig
