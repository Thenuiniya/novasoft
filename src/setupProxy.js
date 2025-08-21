const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/wallet",
    createProxyMiddleware({
      target: "https://64.227.189.27",
      changeOrigin: true,
      secure: false, // ❌ ignore invalid SSL
    })
  );
};
