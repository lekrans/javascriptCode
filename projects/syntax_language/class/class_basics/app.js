const log = require('lekrans_code_helper');

const appName = 'class basics';
log.header(appName);

log.subHeader1(
  'This is the most basic version of a class.. just an empty class',
);

class Car {}

const car = new Car();
log.log(car);

log.footer(appName);
