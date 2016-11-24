// require all modules ending in ".spec" from the
// current directory and all subdirectories

var testsContext = require.context("../src", true, /.spec$/);
testsContext.keys().forEach(testsContext);

//require all `project/src/components/**/index.js`
//Just to get all files analyzed (codecoverage)
const componentsContext = require.context('../src', true, /.ts$/);

componentsContext.keys().forEach(componentsContext);
