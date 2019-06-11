const log = require('lekrans_code_helper');

const appName = 'array copyWithin';
log.header(appName);

log.subHeader1(`Copy array elements from one place to another within an array.
syntax: array.copyWithin(target, start, end)

Parameter	  Description
target	    Required. The index position to copy the elements to
start	      Optional. The index position to start copying elements from  (default is 0)
end	        Optional. The index position to stop copying elements from (default is array.length)

cannot really se what this is for except maybe in sorting algorithms
NOTE: the length of the array will NOT change.. so if you try to copy some elements
beyond the length of the array .. they wont appear`);

log.subHeader2('copy element 5, 6 to element position 1');

const copyTOPosition = 1;
const copyFROMStartPosition = 5;
const copyFROMENDPosition = 7; // NOTE that it will copy up TIL this position not including this position
log.log(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(
    copyTOPosition,
    copyFROMStartPosition,
    copyFROMENDPosition,
  ),
);

log.subHeader2(
  'if you omit the copy to position it will copy from your start position to the end',
);

log.log(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(
    copyTOPosition,
    copyFROMStartPosition,
  ),
);

log.footer(appName);
