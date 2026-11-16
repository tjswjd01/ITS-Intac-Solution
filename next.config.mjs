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
      // Paycor's feed, and job boards that copy it, link to a job as
      // /join-us?gnk=job&gni=<Paycor job id>. Send those to the job's own page.
      // Not permanent: job pages come and go. Must stay above the plain
      // /join-us rule, because the first match wins.
      {
        source: "/join-us",
        has: [{ type: "query", key: "gni", value: "(?<jobId>[0-9a-f]{32})" }],
        destination: "/careers/:jobId",
        permanent: false,
      },
      { source: "/join-us", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
