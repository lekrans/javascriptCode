var cmd = require("node-cmd");
const fs = require("fs");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");
var Choices = require("prompt-choices");
var choices = new Choices(["foo", "bar", "baz"]);

marked.setOptions({
  renderer: new TerminalRenderer()
});

const text = fs.readFileSync(`${__dirname}/${process.argv[2]}/README.md`);

console.log(marked(text.toString()));

cmd.get(`node ${process.argv[2]}/app.js`, function(err, data, stderr) {
  console.log(data);
});

/*    cmd.get(
        `
            git clone https://github.com/RIAEvangelist/node-cmd.git
            cd node-cmd
            ls
        `,
        function(err, data, stderr){
            if (!err) {
               console.log('the node-cmd cloned dir contains these files :\n\n',data)
            } else {
               console.log('error', err)
            }

        }
    );
 */
