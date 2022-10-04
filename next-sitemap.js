const logScreen = message => {
  console.log(`[SITEMAP-GENERATOR] "${message}"`);
};

const siteUrl = process.env.HOST_FRONTEND || "";
logScreen(`Start generate at HOST: ${siteUrl}`);

module.exports = {
  siteUrl,
  sourceDir: "build",
  sitemapSize: 7000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/public/sitemap.xml`],
  },
};
