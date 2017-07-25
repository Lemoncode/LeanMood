const path = require('path');

const rootPath = path.resolve(__dirname, '..');

exports.resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.sortChunks = function (chunks) {
  return function sort(left, right) {
    var leftIndex = chunks.indexOf(left.names[0]);
    var rightindex = chunks.indexOf(right.names[0]);

    if (leftIndex < 0 || rightindex < 0) {
      throw "unknown package";
    }

    if (leftIndex > rightindex) {
      return 1;
    }

    return -1;
  }
};
