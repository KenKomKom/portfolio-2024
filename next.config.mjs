/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/KenKomKom/portfolio/blob/main/img/**',
          },
        ],
      },
};

export default nextConfig;
