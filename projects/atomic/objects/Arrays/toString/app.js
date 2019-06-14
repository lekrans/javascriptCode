const log = require('lekrans_code_helper');

const appName = 'toString';
log.header(appName);

log.subHeader1('Return a commaseparated string with the array values');
log.log([1, 2, 3, 4, 5].toString());

log.subHeader2('the ppl ary');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
  { name: 'Peter', age: 45 },
];
log.log(objAry.toString());
log.footer(appName);
