const log = require('lekrans_code_helper');

const appName = 'every';
log.header(appName);

log.subHeader1(
  'Check if EVERY element in the array pass the test.. like are all elements greater than 100',
);

log.comment(
  " let objAry = [{ name: 'Micke', age: 54 }, { name: 'Jesper', age: 35 }, { name: 'Stefan', age: 45 }];",
);
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 35 },
  { name: 'Stefan', age: 45 },
];
log.subHeader2('Check if all ppl are older than 40');
log.log(objAry.every(obj => obj.age > 40));

log.subHeader2('Check if all ppl are older than 30');
log.log(objAry.every(obj => obj.age > 30));

log.footer(appName);
