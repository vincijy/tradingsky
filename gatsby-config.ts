import type { GatsbyConfig } from 'gatsby';
// verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');

const config:GatsbyConfig = {
  siteMetadata: {
    title: 'Tokenaly',
    siteUrl: 'https://www.yourdomain.tld',
    author: 'JK.Mes',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  developMiddleware: function(app) {

    // 含有数据接口的测试服务器
    app.use('/api', createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }));


    // // 生产服务器的 python backend
    // app.use('/bpi', createProxyMiddleware({
    //   target: 'http://paynotify.lianshucha.com',
    //   changeOrigin: true,
    //   pathRewrite: { '^/bpi/': '/api/' },
    // }));

    app.use('/bpi', createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/bpi/': '/api/' },
    }));
  },


  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@assets': 'src/assets',
          '@store': 'src/store',
          '@service': 'src/service',
          '@section': 'src/section',
          '@router': 'src/router',
          '@pages': 'src/pages',
          '@indices': 'src/indices',
          '@config': 'src/config',
          '@utils': 'src/utils',
          '@hooks': 'src/hooks',
          '@def': 'src/def',
          '@oss': 'src/oss.ts',
          '@style': 'src/style.ts',
          '@src': 'src',
        },
        extensions: [
          'js',
          'tsx',
          'ts',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        loaderOptions: {
        },
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#2962FF' }, // 定义主题
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'babel-preset-gatsby',
    },

    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     'trackingId': 'XXXXXX',
    //   },
    // },
    // 'gatsby-plugin-image',
    // 'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     'icon': 'src/images/icon.png',
    //   },
    // },
    // 'gatsby-plugin-mdx',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     'name': 'images',
    //     'path': './src/images/',
    //   },
    //   __key: 'images',
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'posts',
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     'name': 'pages',
    //     'path': './src/pages/',
    //   },
    //   __key: 'pages',
    // },
  ],

};

export default config;
