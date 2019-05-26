const util = require('util');
const log = require('../helpFile.js');

// log.clear();
log.header('Colors');
log.subHeader1(`colors <boolean> If true, the output is styled with ANSI color codes.
Colors are customizable.
See Customizing util.inspect colors. Default: false.`);

log.subHeader2('Without color');
console.log(util.inspect(util, { showHidden: true, depth: 2, colors: false }));

log.subHeader2('With color');
console.log(util.inspect(util, { showHidden: true, depth: 2, colors: true }));

log.subHeader2('the util.inspect.styles array');
console.log(util.inspect(util.inspect.styles));

log.subHeader2('the util.inspect.color array');
console.log(util.inspect(util.inspect.colors));

log.subHeader2('With Changed colors, setting name = red');
util.inspect.styles.name = 'red';
console.log(util.inspect(util, { showHidden: true, depth: 2, colors: true }));
