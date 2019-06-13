const log = require('lekrans_code_helper');

const appName = 'reverse';
log.header(appName);

log.subHeader1('Reverse the order of the array');
const ary = ['first', 'second', 'third', 'fourth'];

log.subHeader2('first reverse an array of strings');
log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.log(
  ary.reverse((total, currentValue, currentIndex, arr) => total + currentValue),
);

log.subHeader2('Reverse the array of objects');
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
  { name: 'Peter', age: 45 },
];
log.log(objAry.reverse());

log.footer(appName);
