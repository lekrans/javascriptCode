const log = require('lekrans_code_helper');

const appName = 'keys';
log.header(appName);

log.subHeader1('Create an Array Iterator object, with keys for each item');

const iterator = ['banana', 'apple', 'lemon', 'mango', 'orange'].keys();

let result = iterator.next(); // <== next
while (!result.done) {
  log.log(result.value); // <== value = the key/value pair
  result = iterator.next();
}

log.footer(appName);
