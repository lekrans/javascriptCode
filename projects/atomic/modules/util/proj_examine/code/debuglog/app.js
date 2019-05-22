const util = require('util');

const debuglog = util.debuglog('lekrans');

console.log();
console.log(
  'YOU HAVE TO RUN THIS APP MANUALLY TO SET THE NODE_DEBUG ENVIRONMENT!!!!!',
);
console.log('NODE_DEBUG=lekrans node ./debuglog/app.js');
debuglog('hello from the app [%d]', 123);
console.log('ordinary log AFTER');
