const commonConfig = require('./karma.conf.common');
const webpackConfig = require('../webpack/webpack.config.coverage');
const helpers = require('../helpers');

module.exports = (config) => {
  const karmaConfig = Object.assign({}, commonConfig, {
    preprocessors: {
      './spec.bundle.js': ['webpack', 'sourcemap', 'coverage'],
    },
    webpack: webpackConfig,
    logLevel: config.LOG_DISABLE,
    reporters: [...commonConfig.reporters, 'coverage'],
    coverageReporter: {
      dir: helpers.root('test', 'coverage'),
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text', subdir: 'report-txt', file: 'index.txt' },
        { type: 'text' },
        { type: 'text-summary', subdir: '.', file: 'summary.txt' },
      ]
    },
  });

  config.set(karmaConfig);
};
