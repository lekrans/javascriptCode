### util.callbackify(original)

original <Function> An async function
Returns: <Function> a callback style function

Takes an async function (or a function that returns a Promise) and returns a function following the error-first callback style,
i.e. taking an (err, value) => ... callback as the last argument.
In the callback, the first argument will be the rejection reason (or null if the Promise resolved), and the second argument will be the resolved value.
