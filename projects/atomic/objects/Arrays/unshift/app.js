const log = require('lekrans_code_helper');

const appName = 'shift';
log.header(appName);

log.subHeader1(
  'Adds elements at the START of array.. it will return the length of the array',
);
const ary = ['first', 'second', 'third', 'fourth'];

log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.comment('ary.unshift("before first", "before that");');
ary.unshift('before first', 'before that');
log.log(ary);

log.footer(appName);
