const path = require('path'); // 拿到路径
const CracoLessPlugin = require('craco-less'); // antd
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir); // 拼接

const isProductionBuild = process.env.NODE_ENV === 'production';
const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE ?
  'server' :
  'json';

const plugins = [];

// https://zhuanlan.zhihu.com/p/370663645

// https://tjaddison.com/blog/2020/12/analyze-your-create-react-app-bundle-size-without-ejecting/
if (isProductionBuild) {
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode }));
  // https://selvaganesh93.medium.com/how-to-serve-webpack-gzipped-file-in-production-using-nginx-692eadbb9f1c
  plugins.push(new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp(
      `\\.(${
        ['js', 'css'].join('|')
      })$`,
    ),
    threshold: 1024,
    minRatio: 0.8,
  }));
}


module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'), // 配置别名
    },
    plugins: plugins,
  },
  babel: {
    plugins: [
      [
        'import',
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true, // antd按需载入
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'black' }, // 定义主题
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
