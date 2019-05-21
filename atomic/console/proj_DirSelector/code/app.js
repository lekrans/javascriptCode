const util = require('util');

const fs = require('fs');

const path = require('path');
const inquirer = require('inquirer');

const directories = [];

function chooseDirectory(defaultDirectory, directories) {
  return new Promise((resolve, reject) => {
    console.log('');
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'primeFile',
          message: 'Choose PRIME project?',
          choices: [defaultDirectory, new inquirer.Separator(), ...directories],
        },
      ])
      .then((answers) => {
        resolve(answers.primeFile);
      });
  });
}

async function getDirectories() {
  try {
    const directories = fs
      .readdirSync(__dirname)
      .filter(f => fs.statSync(path.join(__dirname, f)).isDirectory());

    const selectedProject = await chooseDirectory('dir2', directories);
    console.log(selectedProject);
    exit(0);
  } catch (e) {}
}

getDirectories();
