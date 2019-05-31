const log = require("./index.js");
log.clear();
setTimeout(() => {
  log.header("hello header");
  log.subHeader2("hello world");
  log.subHeader1("and the last row");
}, 10);
