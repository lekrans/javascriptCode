var cmd = require("node-cmd");
const fs = require("fs");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");

const path = require("path");
const inquirer = require("inquirer");

function removeFromDir(name, directories) {
  const index = directories.indexOf(name);
  if (index !== -1) {
    directories.splice(index, 1);
  }
}

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

    removeFromDir("node_modules", directories);
    removeFromDir("utils", directories);
    const selectedProject = await chooseDirectory("", directories);
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
