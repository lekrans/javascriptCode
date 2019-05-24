###util.inspect(object[, options])#
###util.inspect(object[, showHidden[, depth[, colors]]])

### HOW TO

Run manually with node ./subfolder/app.js
object <any> Any JavaScript primitive or Object.
options <Object>

[showHidden] <boolean> If true, object's non-enumerable symbols and properties are included in the formatted result. WeakMap and WeakSet entries are also included. Default: false.
[depth] <number> Specifies the number of times to recurse while formatting object. This is useful for inspecting large objects. To recurse up to the maximum call stack size pass Infinity or null. Default: 2.
[colors] <boolean> If true, the output is styled with ANSI color codes. Colors are customizable. See Customizing util.inspect colors. Default: false.
[customInspect] <boolean> If false, [util.inspect.custom](depth, opts) functions are not invoked. Default: true.
[showProxy] <boolean> If true, Proxy inspection includes the target and handler objects. Default: false.
maxArrayLength <integer> Specifies the maximum number of Array, TypedArray, WeakMap and WeakSet elements to include when formatting. Set to null or Infinity to show all elements. Set to 0 or negative to show no elements. Default: 100.
[breakLength] <integer> The length at which input values are split across multiple lines. Set to Infinity to format the input as a single line (in combination with compact set to true or any number >= 1). Default: 80.
[compact] <boolean> | <integer> Setting this to false causes each object key to be displayed on a new line. It will also add new lines to text that is longer than breakLength. If set to a number, the most n inner elements are united on a single line as long as all properties fit into breakLength. Short array elements are also grouped together. Note that no text will be reduced below 16 characters, no matter the breakLength size. For more information, see the example below. Default: 3.
[sorted] <boolean> | <Function> If set to true or a function, all properties of an object, and Set and Map entries are sorted in the resulting string. If set to true the default sort is used. If set to a function, it is used as a compare function.
[getters] <boolean> | <string> If set to true, getters are inspected. If set to 'get', only getters without a corresponding setter are inspected. If set to 'set', only getters with a corresponding setter are inspected. This might cause side effects depending on the getter function. Default: false.

Returns: <string> The representation of object.

The util.inspect() method returns a string representation of object that is intended for debugging. The output of util.inspect may change at any time and should not be depended upon programmatically. Additional options may be passed that alter the result. util.inspect() will use the constructor's name and/or @@toStringTag to make an identifiable tag for an inspected value.

OBS!!!!!!
Run this by setting terminal to 'inspect' folder and then run
node app.js
