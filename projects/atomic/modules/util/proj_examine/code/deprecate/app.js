const amodule = require('./amodule.js');

console.log('RUN THIS ONE MANUALLY.. THE CHILDPROCESS WONT SHOW THE WARNING');
console.log('node ./deprecate/app.js');
amodule.obsoleteFunction();
