const log = require('lekrans_code_helper');

const appName = 'length';
log.header(appName);

log.subHeader1(`Search an array from the back to find the specified element

syntax: array.lastIndexOf(item, start)

Parameter	  Description
item	      Required. The item to search for
start	      Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
`);

log.comment('[1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2)');
log.log([1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2));

log.comment('[1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, 5)');
log.log([1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, 5));

log.comment(
  '[1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, 8) <= this will start at the last element',
);
log.log([1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, 8));

log.comment(
  '[1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, -3) <= this will start at the last 1',
);
log.log([1, 2, 3, 4, 5, 6, 1, 2, 3].lastIndexOf(2, -3));

log.footer(appName);
