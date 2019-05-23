### util.format(format[, ...args])

Tformat <string> A printf-like format string.
The util.format() method returns a formatted string using the first argument as a printf-like format string which can contain zero or more format specifiers. Each specifier is replaced with the converted value from the corresponding argument. Supported specifiers are:

%s - String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented with an n and Objects that have no user defined toString function are inspected using util.inspect() with options { depth: 0, colors: false, compact: 3 }.
%d - Number will be used to convert all values except BigInt and Symbol.
%i - parseInt(value, 10) is used for all values except BigInt and Symbol.
%f - parseFloat(value) is used for all values expect Symbol.
%j - JSON. Replaced with the string '[Circular]' if the argument contains circular references.
%o - Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() with options { showHidden: true, showProxy: true }. This will show the full object including non-enumerable properties and proxies.
%O - Object. A string representation of an object with generic JavaScript object formatting. Similar to util.inspect() without options. This will show the full object not including non-enumerable properties and proxies.
%% - single percent sign ('%'). This does not consume an argument.
Returns: <string> The formatted string

OBS!!!!!!!!!!!!!!!!!!!!!!!!!!!
Please note that util.format() is a synchronous method that is mainly intended as a debugging tool. Some input values can have a significant performance overhead that can block the event loop. Use this function with care and never in a hot code path.
