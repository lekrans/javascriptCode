const fs = require('fs');

const logdir = './log';
if (!fs.existsSync(logdir)) {
  fs.mkdirSync(logdir);
}
const out = fs.createWriteStream('./log/out.log');
const err = fs.createWriteStream('./log/err.log');

const console2 = new console.Console(out, err);

let count = 0;

const interval = setInterval(() => {
  count += 1;
  if (count > 20) {
    clearInterval(interval);
    return;
  }
  console.log('writing to log', count);
  console2.log(new Date());
  console2.error('Hoppsan');
}, 5000);
