const fs = require('fs');
const util = require('util');

fs.access('file/that/does/not/exist', (err) => {
  const name = util.getSystemErrorName(err.errno);
  console.error(name); // ENOENT
});
