const log = require('lekrans_code_helper');

const appName = 'findIndex';
log.header(appName);

log.subHeader1(`Call a method for each element of the array
NOTE: This will CHANGE the original array
NOTE: the method is not called for elements without value

Compare to .map() that do the same thing but will create a NEW array`);
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
