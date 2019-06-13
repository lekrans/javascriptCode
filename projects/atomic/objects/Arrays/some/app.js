const log = require('lekrans_code_helper');

const appName = 'every';
log.header(appName);

log.subHeader1(
  'Check if SOME element in the array pass the test.. like are some elements less than 50',
);

log.comment(
  " let objAry = [{ name: 'Micke', age: 54 }, { name: 'Jesper', age: 35 }, { name: 'Stefan', age: 45 }];",
);
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 35 },
  { name: 'Stefan', age: 45 },
];
log.subHeader2('Check if some ppl are younger than 60');
log.log(objAry.some(obj => obj.age < 50));

log.subHeader2('Check if some ppl are younger than 50');
log.log(objAry.some(obj => obj.age < 50));

log.subHeader2('Check if some ppl are younger than 40');
log.log(objAry.some(obj => obj.age < 40));

log.subHeader2('Check if some ppl are younger than 30');
log.log(objAry.some(obj => obj.age < 30));

log.footer(appName);
