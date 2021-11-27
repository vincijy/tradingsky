// verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://121.43.176.46:8081',
    changeOrigin: true,
  }));

  // 线上另一台生产服务器
  app.use('/bpi', createProxyMiddleware({
    target: 'http://43.129.253.147',
    changeOrigin: true,
    pathRewrite: { '^/bpi/': '/api/' },
  }));

  app.use('/cross', createProxyMiddleware({
    target: 'http://121.43.176.46:8081',
    changeOrigin: true,
    pathRewrite: { '^/cross': '' },
  }));
};
