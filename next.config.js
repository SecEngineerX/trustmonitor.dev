/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => config, //

  // SEO & Performance
  poweredByHeader: false,
  
  // Image optimization disabled (no images used)
  images: {
    unoptimized: true,
  },
  
  // Enhanced security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Clickjacking protection
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // MIME type sniffing prevention
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions policy (formerly Feature Policy)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // HSTS (Strict-Transport-Security)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://formspree.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://formspree.io https://api.trustmonitor.dev; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formspree.io;",
          },
          // X-XSS-Protection (legacy, but still useful)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/#waitlist',
        permanent: false,
      },
      {
        source: '/security',
        destination: '/#waitlist',
        permanent: false,
      },
      {
        source: '/sla-preview.pdf',
        destination: '/download-sla',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
