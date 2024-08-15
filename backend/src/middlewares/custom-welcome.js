// ./src/middlewares/custom-welcome.js

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.path === "/admin") {
      ctx.redirect("/plugins/custom-welcome");
    } else {
      await next();
    }
  };
};
