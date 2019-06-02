const log = require('lekrans_code_helper');

const appName = 'typeof';
log.clear();
log.header(appName);

log.subHeader1(
  `show the type of something.. NOTE that null returns "object" and "NaN" returns number
  ALSO NOTE that typeof is NOT a function.. it is an operator and that is why you can write
  typeof('hello)  and typeof 'hello'`,
);
log.subHeader2('typeof(1)');
log.log(typeof 1);

log.subHeader2('typeof(true)');
log.log(typeof true);

log.subHeader2('typeof("Hello")');
log.log(typeof 'Hello');

log.subHeader2('typeof(function(){})');
log.log(typeof function () {});

log.subHeader2('typeof(() => {})');
log.log(typeof (() => {}));

log.subHeader2('typeof({})');
log.log(typeof {});

log.subHeader2('typeof(null)');
log.log(typeof null);

log.subHeader2('typeof(undefined)');
log.log(typeof undefined);

log.subHeader2('typeof(NaN)');
log.log(typeof NaN);

log.footer(appName);
