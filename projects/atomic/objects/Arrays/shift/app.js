const log = require('lekrans_code_helper');

const appName = 'shift';
log.header(appName);

log.subHeader1('Remove first element of array (to remove last use pop()');
const ary = ['first', 'second', 'third', 'fourth'];

log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.comment('let value = ary.shift();');
const value = ary.shift();
log.log(`value: ${value}`);
log.log(`array: ${ary}`);

log.footer(appName);
