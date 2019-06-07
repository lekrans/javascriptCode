const log = require('lekrans_code_helper');

const appName = 'This Keyword';

log.header(appName);

log.subHeader1(`The "this" keyword is the context of a function and differs between arrow functions and
ordinary functions`);

log.subHeader2(
  'A normal function example at the root level.. this will be equal to "global" or "window"',
);

const fn = function () {
  log.log(this === global);
};

fn();

log.subHeader2(`A normal function inside an object.. the context "this" will be the object and
therefor the this keyword will reference the functions parent.. the object`);

const o = {
  carId: 123,
  getId() {
    log.log(this); // will return the enclosing object.. the functions context
    return this.carId;
  },
};

console.log(o.getId()); // returns the objects carId

log.footer(appName);
