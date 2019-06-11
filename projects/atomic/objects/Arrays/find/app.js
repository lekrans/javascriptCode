const log = require('lekrans_code_helper');

const appName = 'find';
log.header(appName);

log.subHeader1('REturn the first element that pass the test');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];

log.subHeader2('get first person under 50');
log.log(objAry.find(value => value.age < 50));

log.footer(appName);
