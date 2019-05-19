// a normal console object is a predifined Console object with stdout, stderr defined as streams
// it contains a Console object wich you can use to define a new console object
// with different streams

const fs = require("fs");

const logdir = "./log";
if (!fs.existsSync(logdir)) {
  fs.mkdirSync(logdir);
}
const out = fs.createWriteStream("./log/out.log");
const err = fs.createWriteStream("./log/error.log");

// Create a new console to handle the new streams..
const console2 = new console.Console(out, err);

setInterval(() => {
  console2.log(new Date());
  console2.error(new Error("fan"));
}, 5000);
