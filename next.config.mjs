/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
      "@ant-design/icons": {
        transform: '@ant-design/icons/lib/icons/{{member}}',
        skipMember: /^[a-z]/,
      },
    },
  }

export default nextConfig;
