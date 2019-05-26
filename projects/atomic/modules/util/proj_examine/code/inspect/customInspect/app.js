const util = require('util');
const log = require('../helpFile.js');

// log.clear();
log.header('customInspect');
log.subHeader1(`customInspect <boolean>
If false, [util.inspect.custom](depth, opts) functions are not invoked. Default: true`);
log.subHeader2(
  'SEE util.inspect.custom for examples with and without customInspect',
);
