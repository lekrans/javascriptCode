console.log('Just plain object info');
console.log('Not that the getters are not visible');

const util = require('util');

class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }

  get hej() {
    return 'hejsan';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

console.log(util.inspect(new Foo())); // 'Foo [bar] {}'
console.log(util.inspect(new Bar())); // 'Bar {}'
console.log(util.inspect(baz)); // '[foo] {}'
