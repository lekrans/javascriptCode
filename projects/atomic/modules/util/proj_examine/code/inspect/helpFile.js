const slength = 100;
const dash = '-'.repeat(slength);
const line = '_'.repeat(slength);
const star = '*'.repeat(slength);
const hash = '#'.repeat(slength);

exports.clear = () => {
  console.log('\033c');
};

exports.header = s => {
  console.log('');
  console.log('');
  console.log('');
  console.log(hash);
  console.log('');
  console.log(s);
  console.log('');
  console.log(hash);
};

exports.subHeader1 = s => {
  console.log(' ');
  console.log(star);
  console.log(s);
  console.log(star);
  console.log('');
};

exports.subHeader2 = s => {
  console.log(' ');
  console.log(line);
  console.log(s);
  console.log(line);
  console.log(' ');
};
