const path = require('path'); // 拿到路径
const CracoLessPlugin = require('craco-less'); // antd

const resolve = (dir) => path.resolve(__dirname, dir); // 拼接

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'), // 配置别名
    },
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
