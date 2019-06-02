const log = require('lekrans_code_helper');

const appName = 'Spread';
log.clear();
log.header(appName);

log.subHeader1(
  'Spread is the opposite of restParameters. it takes an array and spreads it out as variables',
);

log.comment('let carIds = [100, 300, 500]');
const carIds = [100, 300, 500];
const startCars = (car1, car2, car3) => {
  log.log(car1, car2, car3);
};
log.subHeader2(
  'Spread carIds array as parameters to startCars(car1, car2, car3) function',
);
startCars(...carIds);

log.comment('let carCodes = "abc";');
const carCodes = 'abc';
log.subHeader2(
  'Spread carCodes in the same function .. startCars.. it works because both a string and an array is an "iterable"',
);
startCars(...carCodes);

log.footer(appName);
