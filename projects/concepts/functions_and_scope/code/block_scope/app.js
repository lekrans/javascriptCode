const log = require('lekrans_code_helper');

const appName = 'Block Scope';

log.header(appName);

log.subHeader1(
  'Block scope means that a variable is in scope within a block (curly braces) and ONLY aplies to "let"',
);

log.subHeader2(`we declare 2 variables outside let message, and var message2
redeclare them in a block and then log them outside again.. the var message2 has changed`);
const message = 'Outside';
var message2 = 'Outside';
if (5 === 5) {
  const message = 'Equal';
  var message2 = 'Equal';
  log.log('inside message ', message);
  log.log('inside message2', message2);
}
log.log('outside message: ', message);
log.log('outside message2: ', message2);

log.footer(appName);
