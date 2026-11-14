/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/services-4", destination: "/services", permanent: true },
      { source: "/production-operation", destination: "/services/mobile-refurbishment", permanent: true },
      { source: "/quality-assurance", destination: "/services/operations", permanent: true },
      { source: "/quality-inspection", destination: "/services/operations", permanent: true },
      { source: "/join-us", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
