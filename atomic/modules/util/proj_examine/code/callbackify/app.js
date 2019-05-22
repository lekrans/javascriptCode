const util = require("util");

async function fn() {
  return "hello world";
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) {
    console.log(`${err}: Check node version!`);
    throw err;
  }
  console.log(ret);
});
