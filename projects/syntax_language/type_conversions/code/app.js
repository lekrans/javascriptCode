const log = require('lekrans_code_helper');

const appName = 'Type Conversions';
log.clear();
log.header(appName);

log.subHeader1(`Some conversions.. NOTE that parseInt and parseFloat actually parse and stop if it
finds something that is not a number and RETURNS what it got`);

log.subHeader2('foo.toString()');
const foo = { id: 1, name: 'Michael' };
log.log(foo.toString());

log.subHeader2('Number.parseInt("55");');
log.log(Number.parseInt('55'));

log.subHeader2('Number.parseInt("55APA");');
log.log(Number.parseInt('55APA'));

log.subHeader2('Number.parseInt("Q55APA");');
log.log(Number.parseInt('Q55APA'));

log.subHeader2('Number. parseFloat("55.88");');
log.log(Number.parseFloat('55.88'));

log.subHeader2('Number. parseFloat("55.88APA");');
log.log(Number.parseFloat('55.88APA'));

log.subHeader2('Number. parseFloat("Q55.88APA");');
log.log(Number.parseFloat('Q55.88APA'));

log.footer(appName);
