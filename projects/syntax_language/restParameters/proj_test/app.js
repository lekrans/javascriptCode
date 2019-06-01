const log = require('lekrans_code_helper');

// restparameter ...carIds
function sendCars(...carIds) {
  carIds.forEach(id => log.log(id));
}

// a parameter in front of the rest parameter
function sendCarsAtDay(day, ...carIds) {
  carIds.forEach(id => log.log(id));
}

log.clear();
log.header('Rest parameters');

log.subHeader1(`Rest parameter is a parameter ( like ...cars ) that turns "the rest" of the parameters into an array.
You can have many parameters but the rest parameter has to be the last one`);

log.subHeader2('Normal rest as only parameter (...carIds');
sendCars(1, 2, 3);

log.subHeader2('With an extra parameter infront (day, ...carIds');
sendCarsAtDay('monday', 5, 6, 7, 8);
