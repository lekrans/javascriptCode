const log = require('lekrans_code_helper');

const appName = 'indexOf';
log.header(appName);

log.subHeader1(
  `Searches the array for the specified item and returns its index or -1

  array.indexOf(item, start)

Parameter	  Description
item	      Required. The item to search for
start	      Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.`,
);

// the test object
const obj = { name: 'Micke', age: 54 };

log.subHeader1(`Check if an array includes a specified element.
array.includes(element, start)

Parameter	  Description
element	    Required. The element to search for
start	      Optional. Default 0. At which position in the array to start the search`);

const objAry = [obj, { name: 'Jesper', age: 32 }, { name: 'Stefan', age: 46 }]; // <= test object included

log.subHeader2(
  'Checking to see if the array includes a specified object NOTE that it has to be the SAME object',
);
log.log(objAry.includes(obj)); // <== look for obj

log.subHeader2(
  'Same look but starts at position 1 (second element) should not find it because the searchd for object is pos 0',
);
log.log(objAry.includes(obj, 1)); // <== look for obj

log.footer(appName);
