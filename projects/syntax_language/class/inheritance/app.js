const log = require('lekrans_code_helper');

const appName = 'Inheritance';
log.header(appName);

log.subHeader1(
  'Inheritance is used to capsulate code that are equal for a lot of objects',
);

log.subHeader2(
  'Create a Vehicle class and let Car extend it and OVERRIDE the start method',
);

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    return `Starting: ${this.type}`;
  }
}

class Car extends Vehicle {
  // <= extends Vehicle
  constructor(id) {
    super('car'); // call super .. the constructor of the extended class.. in this example Vehicle
    this.id = id;
  }

  // Override the start method of Vehicle but call it with super.start()
  start() {
    return `In Car start ${super.start()}`;
  }

  identify(suffix) {
    return `Car Id: ${this.id} ${suffix}`;
  }
}

log.comment(
  'Call the start method of the Car class that will call Vehicles start method with super.start()',
);
const car = new Car(123);
log.log(car.start());

log.footer(appName);
