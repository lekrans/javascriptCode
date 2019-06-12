const log = require('lekrans_code_helper');

const appName = 'join';
log.header(appName);

log.subHeader1(`joins the elements of an array into a string and returns the string

array.join(separator)
`);

log.log(['a', 'b', 'c', 'd'].join());

log.subHeader2('with a separator **"**');
log.log(['a', 'b', 'c', 'd'].join(' **"** '));

const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];
log.subHeader2(' the same with objects');
log.log(objAry.join(' **"** '));
log.footer(appName);
