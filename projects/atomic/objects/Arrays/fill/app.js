const log = require('lekrans_code_helper');

const appName = 'fill';
log.header(appName);

log.subHeader1(`Fills an array with a static object.. but ONLY the existing elements.
if the array is empty.. the fill will not do anything
syntax: array.fill(value, start, end)

Parameter	  Description
value	      Required. The value to fill the array with
start	      Optional. The index to start filling the array (default is 0)
end	        Optional. The index to stop filling the array (default is array.length)`);

const o = { name: 'unknown' };
log.subHeader2('fill an array EMPTY array with an object {name: "unknown"}');
log.log([].fill(o));

log.subHeader2(
  'fill an array with 2 elements with an object {name: "unknown"}',
);
log.log([1, 2].fill(o));

log.subHeader2(
  'fill an array with 6 elements with an object {name: "unknown"} from POS 1 to 3',
);
log.log([0, 1, 2, 3, 4, 5, 6].fill(o, 1, 3));

log.footer(appName);
