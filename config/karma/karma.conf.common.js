module.exports = {
  basePath: '',
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    './spec.bundle.js',
  ],
  exclude: [
  ],
  preprocessors: {
    './spec.bundle.js': ['webpack', 'sourcemap'],
  },
  webpackMiddleware: {
    // webpack-dev-middleware configuration
    noInfo: true,
  },
  reporters: ['mocha'],
  mochaReporter: {
    showDiff: true,
  },
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  concurrency: Infinity,
};
