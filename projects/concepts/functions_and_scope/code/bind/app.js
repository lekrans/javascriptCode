const log = require('lekrans_code_helper');

const appName = 'bind';

log.header(appName);

log.subHeader1(
  'Sometimes we need to make a COPY of the function AND change the THIS value, the functions CONTEXT',
);

log.subHeader2(
  'We make a copy of getId and BIND newCar to it so it will ALWAYS use that context',
);

const o = {
  carId: 123,
  getId() {
    return this.carId;
  },
};

const newCar = { carId: 456 };
const newFn = o.getId.bind(newCar);
log.log(newFn());
log.footer(appName);
