const base = require('./karma.config.base');
const webpackConfig = require('../webpack/test/webpack.config.test');

module.exports = (config) => {
  const karmaConfig = Object.assign({}, base, {
    preprocessors: {
      './spec.bundle.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    logLevel: config.LOG_INFO,
  });

  if (process.env.TRAVIS) {
    karmaConfig.customLaunchers = {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    karmaConfig.browsers = ['Chrome_travis_ci'];
  }

  config.set(karmaConfig);
};
