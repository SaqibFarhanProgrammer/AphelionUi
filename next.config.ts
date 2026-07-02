import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Aap yahan remark ya rehype plugins (like syntax highlighters) add kar sakte hain
});

export default withMDX(nextConfig);
