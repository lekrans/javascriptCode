const log = require('lekrans_code_helper');

const appName = 'Arrow Functions';

log.header(appName);

log.subHeader1(`Arrow functions do NOT have their own THIS value. THIS refers to the
enclosing context`);

log.subHeader2(`We declare an object literal with an myVar = 456 and then two function
- an arrow function returning this.myVar
- an normal function returning this.myVar

NOTE: THIS in the root av a node module = module.exports
we can see that in the first log where we can see:
{ aVar: 'aaa',
  myVar: 'In the module.exports aka the root this i a node module'}
after we declared
exports.aVar = 'aaa'
this.myVar = 789

The result..
The normal function show this.myVar as the context it was CREATED.. the object literals myVar
the arrow function show this.myVar as the module.exports myVar.. the context it was CALLED in`);

exports.aVar = 'aaa';
this.myVar = 'In the module.exports aka the root this i a node module';

const o = {
  myVar: 'Inside object',
  myCar: 'saab',
  myArrowFunc: () => this.myVar,
  myNormalFunc() {
    return this.myVar;
  },
};

console.log(this);
console.log('ArrowFunc: ', o.myArrowFunc());
console.log('NormalFunc: ', o.myNormalFunc());

log.footer(appName);
