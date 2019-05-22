const util = require('util');

// the ASYNC function
async function fnAsync() {
  return 'hello world';
}

// the PROMISE function
function fnPromise() {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject(null);
}

// async function turned into a callback
const callbackFunctionAsync = util.callbackify(fnAsync);
// promise function turned into a callback
const callbackFunctionPromise = util.callbackify(fnPromise);

// use the async callback function
callbackFunctionAsync((err, ret) => {
  if (err) {
    console.log(`${err}: Check node version!`);
    throw err;
  }
  console.log(ret);
});

// use the promise callback
callbackFunctionPromise((err, ret) => {
  console.log(`Error in promise: ${err} return value: ${ret}`);
  throw err;
});
