import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // https:// 프로토콜 명시
        hostname: "ghchart.rshah.org", // 호스트네임
        pathname: "/**", // 모든 경로 허용
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
