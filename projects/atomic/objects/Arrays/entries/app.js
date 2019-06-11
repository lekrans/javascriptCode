const log = require('lekrans_code_helper');

const appName = 'entries';
log.header(appName);

log.subHeader1(
  `create an iterator object with key/value pairs from each entry in the array
  NOTE this is an iterator OBJECT that you navigate with next`,
);

const iterator = ['banana', 'apple', 'lemon', 'mango', 'orange'].entries();

let result = iterator.next(); // <== next
while (!result.done) {
  log.log(result.value); // <== value = the key/value pair
  result = iterator.next();
}

log.footer(appName);
