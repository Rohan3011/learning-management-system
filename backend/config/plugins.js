module.exports = () => ({
  "custom-welcome": {
    enabled: true,
    resolve: "./src/plugins/custom-welcome",
  },

  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      hooks: {
        preResponseTransform: (ctx) =>
          console.log("hello from the preResponseTransform hook!"),
        postResponseTransform: (ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
    },
  },
});
