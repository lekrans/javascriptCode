const slength = 100;
const line = '-'.repeat(slength);
// const underline = '_'.repeat(slength);
const star = '*'.repeat(slength);
const hash = '#'.repeat(slength);

exports.clear = () => {
  console.log('\x1Bc');
};

exports.header = (s) => {
  console.log('');
  console.log('');
  console.log('');
  console.log(hash);
  console.log('');
  console.log(s);
  console.log('');
  console.log(hash);
};

exports.subHeader1 = (s) => {
  console.log(' ');
  console.log(star);
  console.log(s);
  console.log(star);
  console.log('');
};

exports.subHeader2 = (s) => {
  console.log(' ');
  console.log(line);
  console.log(s);
  console.log(line);
  console.log(' ');
};

exports.runManual = (reason, folder) => {
  console.log('');
  console.log(line);
  console.log('OBS!!!!!!!!!');
  console.log('YOU HAVE TO RUN THIS MANUALLY becuse ', reason);
  console.log(`node ./${folder}/app.js`);
};
