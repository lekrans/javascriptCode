const log = require('lekrans_code_helper');

function sendCars(...carIds) {
  carIds.forEach(id => console.log(id));
}

function sendCarsAtDay(day, ...carIds) {
  carIds.forEach(id => console.log(id));
}

log.header('Rest parameters');
log.subHeader2('Normal rest as only parameter');
sendCars(1, 2, 3);
log.line();
