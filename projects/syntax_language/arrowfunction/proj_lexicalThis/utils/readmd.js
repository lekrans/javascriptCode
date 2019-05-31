const fs = require('fs');
const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
  renderer: new TerminalRenderer(),
});

const text = fs.readFileSync(`${__dirname}/../README.md`);

console.log(marked(text.toString()));
