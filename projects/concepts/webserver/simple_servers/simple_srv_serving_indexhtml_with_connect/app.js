const connect = require('connect');
const serveStatic = require('serve-static');
const log = require('lekrans_code_helper');

log.header('Simple server serving index.html with "connect" and "serve-static');
log.subHeader1(`npm install -D connect serve-static
These are the basic tools needed. 
the connect module is the module used by Express to server static content`);
log.subHeader2(
  'We open up a basic server on port 8081 that will automatically server the index page',
);
connect()
  .use(serveStatic(__dirname))
  .listen(8081, () => {
    console.log('Server running on 8081');
  });
