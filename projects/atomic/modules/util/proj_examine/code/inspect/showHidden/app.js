const util = require('util');
const log = require('../helpFile.js');

// log.clear();
log.header('showHidden');
log.subHeader1(`showHidden <boolean> If true, object's non-enumerable symbols and properties are
included in the formatted result. WeakMap and WeakSet entries are also included. Default: false.`);
log.subHeader2('First without options');
console.log(util.inspect(util));
log.subHeader2('And now with showhidde, depth: null');
console.log(util.inspect(util, { showHidden: true, depth: null }));
