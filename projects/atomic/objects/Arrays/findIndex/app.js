const log = require('lekrans_code_helper');

const appName = 'findIndex';
log.header(appName);

log.subHeader1('Return the index of the first element that pass the test');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];

log.subHeader2('get index of first person under 50');
log.log(objAry.findIndex(value => value.age < 50));

log.footer(appName);
