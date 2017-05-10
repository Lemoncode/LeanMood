const path = require('path');

const rootPath = path.resolve(__dirname, '..');

const root = (...args) => path.join(rootPath, ...args);

exports.root = root;
