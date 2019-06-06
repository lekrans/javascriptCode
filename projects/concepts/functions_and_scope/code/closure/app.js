const log = require('lekrans_code_helper');

const appName = 'Closure';
log.header(appName);

log.subHeader1(
  'A closure stores the environment or parent function from wich it is created',
);

log.subHeader2(`Here we create a closure for the method getId to the app variable. 
It closes over the parent function that holds the carId`);

const app = (() => {
  const carId = 123;
  const getId = () => carId;
  return {
    bulle: getId,
  };
})();

log.log(app.bulle());

log.footer(appName);
