const log = require('lekrans_code_helper');

const appName = 'Call and Apply';

log.header(appName);

log.subHeader1(
  `There are two extra ways to call a function (aside from the normal with paranthesis).. with call and with apply
  The main purpose of call and apply is to change the value of "THIS"
  The new context does not have to have all the properties of the defining context.. it will just use this
  to look up things.. like the carId`,
);

log.subHeader2(`Here we create a new context for the getId function that is inside the o object.
we create a new object that contains a new carId`);

const o = {
  carId: 123,
  carName: 'Micke',
  getId() {
    return [this.carId, this.carName];
  },
};

const newCar = { carId: 456 }; // new context
log.log(o.getId());
log.log(o.getId.call(newCar)); // use new context

log.subHeader2('With apply you can ALSO pass in ARRAY of arguments');

const o2 = {
  carId: 123,
  carName: 'Micke',
  getId(name) {
    this.carName = name || this.carName;
    return [this.carId, this.carName];
  },
};

const newCar2 = { carId: 456 }; // new context
log.log(o2.getId());
log.log(o2.getId.apply(newCar2, ['Dennis'])); // use new context and pass a variable

log.footer(appName);
