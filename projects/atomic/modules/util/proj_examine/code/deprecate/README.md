### util.deprecate(fn, msg[, code])

fn <Function> The function that is being deprecated.
msg <string> A warning message to display when the deprecated function is invoked.
code <string> A deprecation code. See the list of deprecated APIs for a list of codes.
Returns: <Function> The deprecated function wrapped to emit a warning.

The util.deprecate() method wraps fn (which may be a function or class) in such a way that it is marked as deprecated.
