/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'
const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true
    }),
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
