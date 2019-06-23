// eslint-disable-next-line import/extensions
import { Car } from './models/car.js';

const car = new Car(123);
document.getElementById(
  'carId',
).innerHTML = `car.id from main.js that imported the class from ./models/car.js : ${
  car.id
}`;
