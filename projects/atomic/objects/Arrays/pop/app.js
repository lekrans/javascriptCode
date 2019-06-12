const log = require('lekrans_code_helper');

const appName = 'pop';
log.header(appName);

log.subHeader1('Remove last element of array (to remove first use shift()');
const ary = ['first', 'second', 'third', 'fourth'];

log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.comment('let value = ary.pop();');
const value = ary.pop();
log.log(`value: ${value}`);
log.log(`array: ${ary}`);

log.footer(appName);
