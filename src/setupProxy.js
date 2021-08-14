// verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/cross', createProxyMiddleware({
    target: 'https://api.glassnode.com/v1/metrics',
    changeOrigin: true,
    pathRewrite: { '^/cross': '' },
  }));
};

