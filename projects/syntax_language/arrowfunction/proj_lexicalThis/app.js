const log = require('lekrans_code_helper');
const util = require('util');

log.header('Arrow Function');
log.subHeader1(`Arrow functions have lexical "this" wich mean that they get "this" from the environment
where it is created unlike normal functions who gets "this" from the environment they were created in`);

log.subHeader2(
  'Test1 normal function get the name property from the object it is created in',
);
const bunny = {
  name: 'Usagi',
  showName() {
    console.log(this.name);
  },
};

bunny.showName(); // Usagi

log.subHeader2(`Test2 now called from within a anynomous function, will fail because the
anonymous function will not find the name because this is the owner of the function and the anonymous function
is out of scope global object`);
const bunny2 = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake'],
  showTasks() {
    this.tasks.forEach(function (task) {
      log.line();
      console.log(
        util.inspect(`${this.name} wants to ${task}`, { colors: true }),
      );
      console.log(`this INSIDE forEach is ${util.inspect(this, { depth: 0 })}`); // <= this = undefined
    });
    console.log(`this outside forEach is ${util.inspect(this)}`); // <= this =  name: 'Usagi', tasks: [ 'transform', 'eat cake' ], showTasks: [Function: showTasks] }
  },
};

bunny2.showTasks();
console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', 'I am cyan', 'i am blue');
