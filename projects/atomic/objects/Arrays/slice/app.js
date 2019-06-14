const log = require('lekrans_code_helper');

const appName = 'slice';
log.header(appName);

log.subHeader1(`The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.  USE splice if you want to remove the elements from the original array`);

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);
log.log(`citrus: ${citrus}`);
log.log(`arr: ${fruits}`);

log.footer(appName);
