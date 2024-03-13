// import redirects from './config/redirects.json'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  images: {
    domains: ['cdn.sanity.io'],
  },

  // redirects,
  redirects: [
    {
      "source": "/github",
      "destination": "https://github.com/LiCharis",
      "permanent": true
    },
    {
      "source": "csdn",
      "destination": "https://blog.csdn.net/m0_67207209?spm=1010.2135.3001.5343",
      "permanent": true
    }
  ],

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
