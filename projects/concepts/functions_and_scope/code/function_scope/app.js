const log = require('lekrans_code_helper');

const appName = 'Function scope';
log.header(appName);

log.subHeader1(
  'Variables declared within a function has function scope. That means that they dont exist outside the function',
);
function startCar(carId) {
  const message = 'Starting...';
}
try {
  startCar(123);
  log.log(message);
} catch (error) {
  log.comment('Error below catched');
  log.log(error);
}

log.subHeader1(
  'if a function cant find a variable it will look at its parent and so on until it finds it or get an referenceerror',
);
function startCar2(carId) {
  const message = 'Starting...';
  const startFn = function turnKey() {
    log.log(message);
  };

  startFn();
}

try {
  startCar2(123);
} catch (error) {
  log.comment('Error below catched');
  log.log(error);
}

log.subHeader1(
  'a nested function can declare a variable with the same name as an existing one, but it will go out of scope',
);
function startCar3(carId) {
  const message = 'Starting...';
  const startFn = function turnKey() {
    const message = 'Override...';
  };
  startFn();
  log.log(message);
}

try {
  startCar3(123);
} catch (error) {
  log.comment('Error below catched');
  log.log(error);
}

log.footer(appName);
