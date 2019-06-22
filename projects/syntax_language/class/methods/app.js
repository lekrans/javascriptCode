const log = require('lekrans_code_helper');

const appName = 'Methods';
log.header(appName);

log.subHeader1(`Methods are functions that is used on an object
NOTE: we do not use the function keyword`);
class Car {
  constructor(id) {
    this.id = id;
  }

  // *** method
  identify(suffix) {
    return `Car Id: ${this.id} ${suffix}`;
  }
}

log.subHeader2(
  'Check the id through cars method identify with the parameter suffix = !!!',
);
const car = new Car(123);
log.log(car.identify('!!!'));

log.footer(appName);
