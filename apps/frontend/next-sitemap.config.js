/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fc-puentet.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (isIgnorePath(path)) {
      return null; // nullを返すとサイトマップから除外できる
    }

    return {
      loc: encodeURI(path), // エンコードしたURLを返す
      lastmod: customLastmod(path), // パスを元に、ページ毎の最終更新日を返す
    };
  },
};

const isIgnorePath = (path) => {
  return false;
};

const customLastmod = (path) => {
  return '2022-12-05';
};
