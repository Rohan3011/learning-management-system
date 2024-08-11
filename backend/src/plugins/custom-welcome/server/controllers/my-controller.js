'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-welcome')
      .service('myService')
      .getWelcomeMessage();
  },
});
