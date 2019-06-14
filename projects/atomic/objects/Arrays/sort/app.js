const log = require('lekrans_code_helper');

const appName = 'sort';
log.header(appName);

log.subHeader1(`Sorts the items of an array
By default it will sort in alphabetical order
We can supply a compare function that takes two values
and expect a negative, zero or positive result`);

const alphaArray = ['Apple', 'banana', 'lemon', 'Grape', 'Pineapple'];
log.comment(alphaArray);
alphaArray.sort();
log.log(alphaArray);

log.subHeader2(`As previous example show .. the sort does NOT work if you mix capitals and lowercase letters
so .. now we provide a compare method to compare the CAPITALIZED letters
NOTE: We have to use < and > to compare`);
const alphaArray2 = ['Apple', 'banana', 'lemon', 'Grape', 'Pineapple', 'melon'];
alphaArray2.sort((a, b) => {
  if (a.toUpperCase() < b.toUpperCase()) {
    return -1;
  }
  if (b.toUpperCase() < a.toUpperCase()) {
    return 1;
  }
  return 0;
});
log.log(alphaArray2);

const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
  { name: 'Peter', age: 45 },
];

log.subHeader2('Sort object on age property');
objAry.sort((a, b) => a.age - b.age);
log.log(objAry);

log.subHeader2('Sort object on age property in REVERSE order');
objAry.sort((a, b) => b.age - a.age);
log.log(objAry);

log.footer(appName);
