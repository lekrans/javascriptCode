const log = require('lekrans_code_helper');

const appName = 'push';
log.header(appName);

log.subHeader1('push one or more items to an array');
const ary = ['first', 'second', 'third', 'fourth'];

log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.comment('ary.push("fifth", "sixth");');
ary.push('fifth', 'sixth');
log.log(`array: ${ary}`);

log.footer(appName);
