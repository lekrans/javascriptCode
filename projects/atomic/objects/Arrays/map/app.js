const log = require('lekrans_code_helper');

const appName = 'findIndex';
log.header(appName);

log.subHeader1(`Call a method for each element of the array
syntax: array.map(function(currentValue, index, arr), thisValue)


NOTE: This will CREATE a NEW array
NOTE: the method is not called for elements without value

Compare to .forEach() that do the same thing but will change the ORIGINAL array`);
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
];

log.subHeader2('create an array of names with the prefix CHYRONHEGO');
let newAry = objAry.map(value => `CHYRONHEGO ${value.name}`);
log.log(newAry);
log.log(objAry);

log.subHeader2(
  'create an array of names with the prefix with the index of the element',
);
newAry = objAry.map((value, ix) => `${ix} ${value.name}`);
log.log(newAry);
log.log(objAry);

log.subHeader2(
  `create an array of names with the prefix with the index of the element AND the name of the
  person before in the array .. taken from the arr argumenet`,
);
newAry = objAry.map(
  (value, ix, arr) => `${ix} ${value.name} personInnan: ${
    arr[ix - 1] ? arr[ix - 1].name : 'fanns ingen'
  }`,
);
log.log(newAry);
log.log(objAry);

log.subHeader2(
  `same as above but with a THIS supplied with an array of sweets NOTE that I have to use a NORMAL function
  to be able to use THIS`,
);
newAry = objAry.map(
  function (value, ix, arr) {
    return `${ix} ${value.name} personInnan: ${
      arr[ix - 1] ? arr[ix - 1].name : 'fanns ingen'
    } och äter ${this[ix]}`;
  },
  ['kaka', 'Finsk pinne', 'brownie'], // <== supplied context THIS
);

log.log(newAry);
log.log(objAry);

log.footer(appName);
