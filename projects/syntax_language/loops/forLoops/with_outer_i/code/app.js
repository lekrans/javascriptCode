const log = require('lekrans_code_helper');

const appName = 'For-loop with outer i';
log.clear();
log.header(appName);

log.subHeader1('You can declare the controlvariable outside the loop');

log.subHeader2('First example with normal controlvariable.. we break on 8');
const i = -1;
for (let i = 0; i < 12; i += 1) {
  if (i === 8) {
    break;
  }
}

log.log(i);

log.subHeader2('Now with outer i. NOTE how we have to add the semicolon');
let j = 0;
for (; j < 12; j += 1) {
  if (j === 8) {
    break;
  }
}

log.log(j);

log.footer(appName);
