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
log.header('Destructuring');

log.subHeader1(`Destructuring arrays and objects take out elements of the array/object
and assign them to variables`);

log.subHeader2('Destructuring Array');
const carIds = [1, 2, 5];
const [car1, car2, car3] = carIds;
log.log(car1, car2, car3);

log.subHeader2('With an extra parameter infront (day, ...carIds');
sendCarsAtDay('monday', 5, 6, 7, 8);
