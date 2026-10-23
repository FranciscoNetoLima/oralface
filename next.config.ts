import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  agentRules: false,
  devIndicators: false,
  experimental: {
    cpus: 1
  }
};

export default nextConfig;
