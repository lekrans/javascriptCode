const util = require('util');

exports.obsoleteFunction = util.deprecate(() => {
  console.log('in the module');
}, 'this function is obsolete and deprecated, Use myShinyFunction instead');
