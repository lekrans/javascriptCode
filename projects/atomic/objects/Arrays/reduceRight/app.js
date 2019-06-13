const log = require('lekrans_code_helper');

const appName = 'reduce';
log.header(appName);

log.subHeader1(`reduce the array to a single value based on
the arithmetic in the callback function
Starts from the END

syntax: array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

`);
const ary = ['first', 'second', 'third', 'fourth'];

log.subHeader2('first reduce an array of strings');
log.comment("ary = ['first', 'second', 'third', 'fourth']");
log.log(
  ary.reduceRight(
    (total, currentValue, currentIndex, arr) => total + currentValue,
  ),
);

log.subHeader2(`and now an array of objects wich we want to reduce to the sum of the ages
NOTE that we need to check if currentIndex === arr.length - 2 (the next to last element)
because the FIRST total we get will be the FIRST element.. so we need to use THAT elements
age and add it to the currentvalue otherwise we will add the age of the second element to
the string version of the first object`);
const objAry = [
  { name: 'Micke', age: 54 },
  { name: 'Jesper', age: 32 },
  { name: 'Stefan', age: 46 },
  { name: 'Peter', age: 45 },
];
log.log(
  objAry.reduceRight((total, currentValue, currentIndex, arr) => {
    if (currentIndex === arr.length - 2) {
      // <== NOTE we need to check if first loop because then the total will be the first object
      return total.age + currentValue.age;
    }
    return total + currentValue.age;
  }),
);

log.subHeader2(`Same as above but with an initial value of 100
NOTE that NOW the first TOTAL value will be the initial value so we do NOT
need to take care of that first element`);
log.log(
  objAry.reduceRight(
    (total, currentValue, currentIndex, arr) => total + currentValue.age,
    100,
  ),
);

log.footer(appName);
