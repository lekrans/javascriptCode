var cmd = require("node-cmd");
const fs = require("fs");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");

const path = require("path");
const inquirer = require("inquirer");

function chooseDirectory(defaultDirectory, directories) {
  return new Promise((resolve, reject) => {
    console.log("");
    inquirer
      .prompt([
        {
          type: "list",
          name: "outputfile",
          message: "Choose PRIME project?",
          choices: [defaultDirectory, new inquirer.Separator(), ...directories]
        }
      ])
      .then(answers => {
        resolve(answers.outputfile);
      });
  });
}

async function getDirectory() {
  try {
    const directories = fs
      .readdirSync(__dirname)
      .filter(f => fs.statSync(path.join(__dirname, f)).isDirectory());

    const selectedProject = await chooseDirectory("dir2", directories);
    return selectedProject;
  } catch (e) {}
}

marked.setOptions({
  renderer: new TerminalRenderer()
});

const dir = getDirectory().then(dir => {
  const text = fs.readFileSync(`${__dirname}/${dir}/README.md`);

  console.log(marked(text.toString()));

  cmd.get(`node ${dir}/app.js`, function(err, data, stderr) {
    console.log(data);
  });
});
