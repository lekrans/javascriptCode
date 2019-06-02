const log = require('lekrans_code_helper');

const appName = 'For-loop with continue';
log.clear();
log.header(appName);

log.subHeader1(
  'a continue will return to the next iteration of the loop without executing the rest of the code',
);

for (let i = 0; i < 4; i++) {
  if (i === 2) {
    continue;
  }
  log.log(i);
}
log.footer(appName);
