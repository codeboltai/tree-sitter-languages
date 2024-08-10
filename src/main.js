const myTreeSitter = require('./build/Release/my_tree_sitter.node');

const jsParser = myTreeSitter.parsers.javascript;
const jsonParser = myTreeSitter.parsers.json;

console.log(jsParser);
console.log(jsonParser);