### util.inherits(constructor, superConstructor)

constructor <Function>
superConstructor <Function>
Usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support. Also note that the two styles are semantically incompatible.

Inherit the prototype methods from one constructor into another. The prototype of constructor will be set to a new object created from superConstructor.

This mainly adds some input validation on top of Object.setPrototypeOf(constructor.prototype, superConstructor.prototype). As an additional convenience, superConstructor will be accessible through the constructor.super\_ property.
