const log = require('lekrans_code_helper');

const appName = 'from';
log.header(appName);

log.subHeader1(`Create an array from a string
syntax: Array.from(object, mapFunction, thisValue)
Parameter     Description
object        Required. The object to convert to an array
mapFunction   Optional. A map function to call on each item of the array
thisValue     Optional. A value to use as this when executing the mapFunction
`);
const s = 'ABCDEFG';

log.subHeader2('Create an array of the string ABCDEFG');
log.log(Array.from(s));

log.subHeader2(
  'Create an array of the string ABCDEFG with a map function to create an object and set name to the Char',
);
log.log(Array.from(s, char => ({ name: char })));

log.subHeader2(
  `Create an array of the string ABCDEFG with a map function to create an object and set name to the 
  Char and with a this object
  NOTE!!! that I had to use a normal function to be able to change THIS`,
);
log.log(
  Array.from(
    s,
    function (char) {
      return { name: char, human: this.human };
    },
    { human: true },
  ),
);

log.footer(appName);
