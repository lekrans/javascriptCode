const log = require('lekrans_code_helper');

const appName = 'Function scope';
// log.STATE.Clear = 'Hello babes';
log.config.CLEAR_TIMEOUT = 1000;
// log.clear().then(() => {
log.header(appName);

log.subHeader1(
  'Variables declared within a function has function scope. That means that they dont exist outside the function',
);
function startCar(carId) {
  const message = 'Starting...';
}
const message = 'hej';
try {
  startCar(123);
  log.log(message);
  log.log(message);
} catch (error) {
  log.comment('Error below catched');
  log.log('error');
  //  log.log(e.toString());
}

log.footer(appName);
log.footer(appName);
log.footer(appName);
log.footer(appName);
log.footer(appName);
log.footer(appName);
log.footer(appName);
// });
