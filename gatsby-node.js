exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
  });
  // if (stage === 'build-html' || stage === 'develop-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /bad-module/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   });
  // }
};
