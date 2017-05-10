const commonConfig = require('./karma.conf.common');
const webpackConfig = require('../webpack/webpack.config.coverage');
const helpers = require('../helpers');

module.exports = (config) => {
  const karmaConfig = Object.assign({}, commonConfig, {
    files: [
      './spec.bundle.js',
    ],
    preprocessors: {
      './spec.bundle.js': 'webpack',
    },
    webpack: webpackConfig,
    logLevel: config.LOG_DISABLE,
    reporters: [...commonConfig.reporters, 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: helpers.root('test', 'coverage'),
      reports: ['html', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    // coverageReporter: {
    //   reporters: [
        // { type: 'html', subdir: 'report-html' },
    //     // { type: 'text', subdir: 'report-txt', file: 'index.txt' },
    //     // { type: 'text' },
    //     { type: 'text-summary', subdir: '.', file: 'summary.txt' },
    //   ]
    // },
  });

  config.set(karmaConfig);
};
