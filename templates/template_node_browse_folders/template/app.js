const util = require('util');
const log = require('../helpFile');

// log.clear();
log.header('customInspect');
log.subHeader1(`Objects may also define their own [util.inspect.custom](depth, opts) function,
which util.inspect() will invoke and use the result of when inspecting the object:`);

class Box {
  constructor(value, value2, valueNotShowing) {
    this.value = value;
    this.value2 = value2;
    this.valueNotShowing = valueNotShowing;
  }

  [util.inspect.custom](depth, options) {
    if (depth < 0) {
      // !! options.stylize is a method injected onto the options object
      // based on the value of the 'color' property.
      // if {color: true} is defined then a stylizeWithColor method will be
      // assigned to the stylize property otherwise a stylizeNoColor method
      // will be inserted
      //
      // the 'special' string determines how the Box symbol will be colored
      // 'special' is default cyan .. see util.inspect.styles
      return options.stylize('[Box]', 'special');
    }

    // create a new options object that is a copy of the original with the
    // change that we decrease the depth value
    const newOptions = Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1,
    });

    // Five space padding because that's the size of "Box< ".
    //  (not really sure what the effect is)
    const padding = ' '.repeat(5);

    // get info about two of our members (value and value2)
    // NOTE that we are NOT taking care of 'valueNotShowing'
    // and therefor it will not be outputted in the result
    const inner = util
      .inspect(this.value, newOptions)
      .replace(/\n/g, `\n${padding}`);
    const inner2 = util
      .inspect(this.value2, newOptions)
      .replace(/\n/g, `\n${padding}`);
    return `${options.stylize('Box', 'special')}< ${inner}, ${inner2} >`;
  }
}

const box = new Box([1, 2, 3, 4], 'hello', 'this is not showing');

log.subHeader2('This is the custom output');
console.log(util.inspect(box, { colors: true }));
log.subHeader2(
  'And this is the output with customInspect false aka. the util.inspect is using its normal inspect',
);
console.log(util.inspect(box, { colors: true, customInspect: false }));
