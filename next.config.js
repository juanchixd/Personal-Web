/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/public',
  reactStrictMode: true,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/wpp',
        destination: 'https://wa.me/+5493454087690',
        permanent: true,
      },
    ]
  },
}
//module.exports = nextConfig
