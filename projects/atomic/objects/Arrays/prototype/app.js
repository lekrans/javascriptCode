const log = require('lekrans_code_helper');

const appName = 'prototype';
log.header(appName);

log.subHeader1(
  `The prototype constructor allows you to add new properties and methods to the Array() object.
  Note: Prototype is a global object constructor which is available for all JavaScript objects.
`,
);

log.subHeader2(
  `We create an Array.prototype.makeMonkey = function()...... NOTE we must use NORMAL functions because
  this have to be the caller`,
);

Array.prototype.makeMonkey = function () {
  for (let index = 0; index < this.length; index++) {
    this[index] = `Apa-${this[index]}`;
  }
};
const ary = ['first', 'second', 'third', 'fourth'];

log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.comment('ary.makeMonkey()');
const value = ary.makeMonkey();
log.log(`array: ${ary}`);

log.footer(appName);
