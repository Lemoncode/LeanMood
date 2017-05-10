const commonConfig = require('./karma.common');
const webpackConfig = require('../webpack/webpack.test.js');

module.exports = (config) => {
  const karmaConfig = Object.assign({}, commonConfig, {
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
