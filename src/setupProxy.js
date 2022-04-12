// verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  // 含有数据接口的测试服务器
  app.use('/api', createProxyMiddleware({
    target: 'http://121.43.176.46:8081',
    changeOrigin: true,
  }));


  // 生产服务器的 python backend
  app.use('/bpi', createProxyMiddleware({
    target: 'http://paynotify.lianshucha.com',
    changeOrigin: true,
    pathRewrite: { '^/bpi/': '/api/' },
  }));

  // // 本地开发的 python backend
  // app.use('/bpi', createProxyMiddleware({
  //   target: 'http://localhost:5000',
  //   changeOrigin: true,
  //   pathRewrite: { '^/bpi/': '/api/' },
  // }));
};
