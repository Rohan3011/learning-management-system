// const fs = require("fs");
// const path = require("path");

// module.exports = (config, { strapi }) => {
//   return async (ctx, next) => {
//     // List all Strapi's backend routes
//     const backendRoutes = [
//       "/admin",
//       "/upload",
//       "/uploads",
//       "/content-manager",
//       "/content-type-builder",
//       "/drag-drop-content-types",
//       "/v1",
//       "/documentation",
//       "/i18n",
//       "/seo",
//       "/users-permissions",
//     ]; // Add other backend routes as needed

//     // Check if the request matches any backend routes
//     if (backendRoutes.some((route) => ctx.request.path.startsWith(route))) {
//       await next();
//     } else {
//       // Serve React's index.html for all other requests
//       const indexPath = path.resolve(strapi.dirs.static.public, "index.html");
//       if (fs.existsSync(indexPath)) {
//         ctx.type = "html";
//         ctx.body = fs.createReadStream(indexPath);
//       } else {
//         await next();
//       }
//     }
//   };
// };
