// verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://8.210.151.35:8081',
    changeOrigin: true,
  }));

  app.use('/cross', createProxyMiddleware({
    target: 'http://8.210.151.35:8081',
    changeOrigin: true,
    pathRewrite: { '^/cross': '' },
  }));
};
