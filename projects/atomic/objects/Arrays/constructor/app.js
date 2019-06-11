const log = require('lekrans_code_helper');

const appName = 'Arrays constructor';
log.header(appName);

log.subHeader1(`The conststructor property returns the constructor FUNCTION.. the function USED to create the array
In the case of an array .. it is the Array() constructor function`);

log.subHeader2('Show the constructor function');
log.log([1, 2, 3].constructor); // <====

log.subHeader2('Test if someObject is an array');
const someObject = [1, 2, 3];
log.log(someObject.constructor === Array); // <====

log.footer(appName);
