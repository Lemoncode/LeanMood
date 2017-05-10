const commonConfig = require('./karma.conf.common');
const webpackConfig = require('../webpack/webpack.config.test');

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
