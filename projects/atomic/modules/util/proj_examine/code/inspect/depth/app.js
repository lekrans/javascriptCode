const util = require('util');
const log = require('../helpFile.js');

// log.clear();
log.header('Depth');
log.subHeader1(`depth <number> Specifies the number of times to recurse while formatting object. This is useful for inspecting large objects.
To recurse up to the maximum call stack size pass Infinity or null. Default: 2.`);
log.subHeader2('Depth: 0');
console.log(util.inspect(util, { showHidden: true, depth: 0 }));
log.subHeader2('Depth: 1');
console.log(util.inspect(util, { showHidden: true, depth: 1 }));
log.subHeader2('Depth: 2');
console.log(util.inspect(util, { showHidden: true, depth: 2 }));
log.subHeader2('Depth: 3');
console.log(util.inspect(util, { showHidden: true, depth: 3 }));
