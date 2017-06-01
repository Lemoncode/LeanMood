module.exports = {
  basePath: '',
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    './spec.bundle.js',
  ],
  webpackMiddleware: {
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
  singleRun: true,
  concurrency: Infinity,
};
