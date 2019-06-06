const log = require('lekrans_code_helper');

const appName = 'IIFEs';
log.header(appName);

log.subHeader1(`Immediately Invoked Function Expression
* Function Expression: You take a function and do something with it, like assign it
to a variable
* Immediately Invoked: Execute the function immediately after it has been declared`);

log.subHeader2('Assign a immideately invoked function to a variable');
const app = (function app() {
  const carId = 123;
  log.log('in function ', carId);
  return {};
}());

log.log(app);
log.footer(appName);
