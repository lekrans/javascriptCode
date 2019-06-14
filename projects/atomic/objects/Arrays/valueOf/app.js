const log = require('lekrans_code_helper');

const appName = 'valueOf';
log.header(appName);

log.subHeader1('DEFAULT method of Array. will return the array');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
  { name: 'Peter', age: 45 },
];

log.subHeader2('array.valueOf');
log.log(objAry.valueOf());

log.subHeader2('array');
log.log(objAry);

log.footer(appName);
