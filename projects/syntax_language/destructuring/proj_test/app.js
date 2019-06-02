const log = require('lekrans_code_helper');

// restparameter ...carIds
function sendCars(...carIds) {
  carIds.forEach(id => log.log(id));
}

// a parameter in front of the rest parameter
function sendCarsAtDay(day, ...carIds) {
  carIds.forEach(id => log.log(id));
}

log.clear();
log.header('Destructuring');

log.subHeader1(`Destructuring arrays and objects take out elements of the array/object
and assign them to variables`);
log.subHeader1('  ARRAYS');

log.comment('we have an array: const carIds = [1, 2, 5];');
const carIds = [1, 2, 5];

log.subHeader2('Destructuring Array');
// creating 3 variables out of the content in carIds
const [car1, car2, car3] = carIds;
log.log(car1, car2, car3);

log.subHeader2(`Destructuring Array to a variable AND a rest (parameter? variable
  We also declare the variables first .. just another way to declare them`);
// creating 3 variables out of the content in carIds
let bCar1;
let remainingCars;
[bCar1, ...remainingCars] = carIds;
log.log(car1, remainingCars);

log.subHeader2('Using a comma skip a variable.. ex1 skip first, ex2 skip2');
// creating 3 variables out of the content in carIds
let remainingCars2;
[, ...remainingCars2] = carIds;
log.log(remainingCars2);
[, , ...remainingCars2] = carIds;
log.log(remainingCars2);

log.subHeader1('  OBJECTS');

const car = { id: 5000, style: 'convertible' };

log.subHeader2(
  'When destructuring objects we use { instead of [ and the "identifier matter"',
);
// even if we destructure variables in different order it will still be right
let { style, id } = car;
log.log(id, style);

log.subHeader2(
  `IF we use predeclared variables in the destructuring we have to put paranthesis around the whole
  expression because the compiler interprets the curlybraces as a code-block`,
);
// let id, style; can't redeclare the variables here because they are declared in the previous example
({ style, id } = car);
log.log(id, style);

log.subHeader2(
  'If we have to use different names for the object property we can use  <objectProp>:<myVar>',
);
let id2;
let style2;
({ style: style2, id: id2 } = car);
log.log(id2, style2);

log.footer('Destructuring');
