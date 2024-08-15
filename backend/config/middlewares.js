module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",

  {
    resolve: "./src/middlewares/spa-middleware",
    config: {},
  },
  {
    resolve: "./src/middlewares/custom-welcome",
    config: {},
  },
];
