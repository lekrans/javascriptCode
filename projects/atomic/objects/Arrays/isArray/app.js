const log = require('lekrans_code_helper');

const appName = 'isArray';
log.header(appName);

log.subHeader1(
  'determines if an object is an array .. compare to .constructor = Array',
);

log.log(Array.isArray([1, 2, 3, 4]));

log.footer(appName);
