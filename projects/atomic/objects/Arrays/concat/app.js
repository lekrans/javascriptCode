const log = require('lekrans_code_helper');

const appName = 'concat()';

log.header(appName);
log.subHeader1(`Joins two or MORE arrays.
does not change the existing arrays but returns a NEW array`);
const ary1 = [1, 2, 3];
const ary2 = [4, 5, 6];
const ary3 = [7, 8, 9];

const ary4 = ary1.concat(ary2, ary3);
log.log(ary4);
log.footer(appName);
