const log = require('lekrans_code_helper');

const appName = 'findIndex';
log.header(appName);

log.subHeader1('List each item of an array, instead of a for loop');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];

log.subHeader2('create a long name of all names in the array');
let longName = '';
objAry.forEach((value) => {
  longName += value.name;
});

log.log(longName);

log.footer(appName);
