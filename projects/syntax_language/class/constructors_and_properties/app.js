const log = require('lekrans_code_helper');

const appName = 'Constructuros and Properties';
log.header(appName);

log.subHeader1(`Simple class with an constructor that takes a parameter id and assign it to this.id
NOTE: that we internally use the 'this' keyword`);
class Car {
  constructor(id) {
    this.id = id;
  }
}

log.subHeader2('set the id to 123 through its constructor');
const car = new Car(123);
log.log(car.id);
log.subHeader2('Now set the car.id = 456');
car.id = 456;
log.log(car.id);

log.footer(appName);
