const util = require('util');

const aString = 'I am a string';
const aNumber = 1.234;
const aJSON = {
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Jones' },
  ],
};
const aObject = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const log = (comment, format, arg) => {
  const line = '_'.repeat(100);
  console.log('');
  console.log(line);
  console.log(comment);
  console.log(util.format(format, arg));
  console.log(line);
};

const sendToLog = (typestring, formatstring) => {
  const equalstring = '#'.repeat(100);
  console.log();
  console.log();
  console.log();
  console.log();
  console.log(equalstring);
  console.log(typestring.toUpperCase());
  console.log(equalstring);
  log(
    util.format('String as %s %s', typestring, formatstring),
    util.format('Some text and %s inserted', formatstring),
    aString,
  );
  log(
    util.format('Num as %s %s', typestring, formatstring),
    util.format('Some text and %s inserted', formatstring),
    aNumber,
  );
  log(
    util.format('JSON as %s %s', typestring, formatstring),
    util.format('Some text and %s inserted', formatstring),
    aJSON,
  );
  log(
    util.format('Object as %s %s', typestring, formatstring),
    util.format('Some text and %s inserted', formatstring),
    aObject,
  );
};

sendToLog('string', '%s');
sendToLog('num', '%d');
sendToLog('parseInt', '%i');
sendToLog('parseFloat', '%f');
sendToLog('JSON', '%j');
sendToLog('Object', '%o');
sendToLog('Object', '%O');
