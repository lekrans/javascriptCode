# readWriteStreams

## Short example of how to read and write to a stream in node

### how to

1. npm start

### expected

if big.file does not exist createFile.js will create it (triggered from package.json-prestart).
It will then create a web server and send the file back as a response by streaming it (app.js)

### tips

use Activity Monitor (memory search for node) to see the memory usage when using streams and compare that to what happen if
you read the whole file at once
