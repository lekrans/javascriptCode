const cmd = require('node-cmd');
const fs = require('fs');
const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

const path = require('path');
const inquirer = require('inquirer');

function removeFromDir(name, directories) {
  const index = directories.indexOf(name);
  if (index !== -1) {
    directories.splice(index, 1);
  }
}

function chooseDirectory(defaultDirectory, directories) {
  // for some reason the inquirer promise seem to return immediately if I add a .catch() so I have no place for a reject
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'outputfile',
          message: 'Choose PRIME project?',
          choices: [defaultDirectory, new inquirer.Separator(), ...directories],
        },
      ])
      .then((answers) => {
        resolve(answers.outputfile);
      });
  });
}

async function getDirectory() {
  let selectedProject;
  try {
    const directories = fs
      .readdirSync(__dirname)
      .filter(f => fs.statSync(path.join(__dirname, f)).isDirectory());

    removeFromDir('node_modules', directories);
    removeFromDir('utils', directories);
    selectedProject = await chooseDirectory('', directories);
  } catch (e) {
    console.log('error');
  }
  return selectedProject;
}

marked.setOptions({
  renderer: new TerminalRenderer(),
});

getDirectory()
  .then((dir) => {
    const text = fs.readFileSync(`${__dirname}/${dir}/README.md`);

    console.log(marked(text.toString()));
    cmd.get(`node ${dir}/app.js`, (err, data) => {
      console.log(data);
    });
  })
  .catch((e) => {
    console.log(e);
  });
