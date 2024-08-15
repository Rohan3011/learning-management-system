// path: ./src/middlewares/spa-middleware.js

const fs = require("fs");
const path = require("path");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.path === "/") {
      const indexPath = path.resolve(strapi.dirs.static.public, "index.html");

      if (fs.existsSync(indexPath)) {
        ctx.type = "html";
        ctx.body = fs.createReadStream(indexPath);
      }
    }

    await next();

    if (ctx.status === 404 && ctx.request.method === "GET") {
      const indexPath = path.resolve(strapi.dirs.static.public, "index.html");

      if (fs.existsSync(indexPath)) {
        ctx.type = "html";
        ctx.body = fs.createReadStream(indexPath);
      }
    }
  };
};
