const fs = require("fs");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");

marked.setOptions({
  renderer: new TerminalRenderer()
});

const text = fs.readFileSync(`${__dirname}/../${process.argv[2]}/README.md`);

console.log(marked(text.toString()));
