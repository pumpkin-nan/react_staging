const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    })
  );
};
