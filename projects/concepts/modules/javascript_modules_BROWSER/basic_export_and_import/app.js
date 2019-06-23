const connect = require('connect');
const serveStatic = require('serve-static');
const log = require('lekrans_code_helper');

log.header('Modules: Javascript/Browser');
log.subHeader1(`Javascript modules uses import/export syntax
In the browser you must specify that a script is a module by adding the attribute type="module"`);
log.comment(
  '<script type="module"> ... script code here or use src="path" .. </script>',
);
log.subHeader1(
  'Modules should be CORE features, VALID for BOTH browser and server-side javascript',
);
log.subHeader2(`First we import a script (say.js) directly from the index.html and run it
then we import the main.js file that will import the car class from the ./models/car.js file that exports it
NOTE: 1) That we have to use file-extensions in the imports because browsers does not resolve extensions.. only Node and bundlers do.. 
so to be able to run this without extensions we would have to use like webpack
2) We MUST use the type="module" in the script tags to make the browser understand the import/export syntax`);
connect()
  .use(serveStatic(__dirname))
  .listen(8081, () => {
    console.log('Server running on 8081');
  });
