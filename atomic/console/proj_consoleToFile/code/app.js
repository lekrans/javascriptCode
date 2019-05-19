const fs = require('fs');

const logdir = './log';
if (!fs.existsSync(logdir)) {
  fs.mkdirSync(logdir);
}
const out = fs.createWriteStream('./log/out.log');
const err = fs.createWriteStream('./log/err.log');

const console2 = new console.Console(out, err);

setInterval(() => {
  console2.log(new Date());
  console2.error('Fan');
});
