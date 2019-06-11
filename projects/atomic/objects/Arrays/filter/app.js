const log = require('lekrans_code_helper');

const appName = 'filter';
log.header(appName);

log.subHeader1('Create a new array of all elements that pass the test');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];

log.subHeader2('get an array of all under 50');
log.log(objAry.filter(value => value.age < 50));

log.footer(appName);
