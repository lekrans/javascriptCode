const log = require('lekrans_code_helper');

const appName = 'splice';
log.header(appName);

log.subHeader1(`The splice() method returns the selected elements in an array, as a new array object.

The splice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array WILL be changed. use slice() if you do not want to change the original array`);

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.splice(1, 3);
log.log(`citrus: ${citrus}`);
log.log(`arr: ${fruits}`);

log.footer(appName);
