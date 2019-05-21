const util = require('util');
const fs = require('fs');

const path = require('path');
const inquirer = require('inquirer');

function chooseDirectory(defaultDirectory, directories) {
  return new Promise((resolve, reject) => {
    console.log('');
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
        // return the outputfile, the name is defined in the object above
        resolve(answers.outputfile);
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
