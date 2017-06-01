const path = require('path');

const rootPath = path.resolve(__dirname, '..');

const root = (...args) => path.join(rootPath, ...args);

function sortChunks(chunks) {
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

exports.root = root;
exports.sortChunks = sortChunks;
