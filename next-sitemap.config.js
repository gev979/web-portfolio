/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXTAUTH_URL,
  changefreq: "daily",
  priority: 0.9,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => [await config.transform(config, "/")],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
