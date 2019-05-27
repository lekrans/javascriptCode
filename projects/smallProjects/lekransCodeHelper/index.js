Reset = "\x1b[0m";
Bright = "\x1b[1m";
Dim = "\x1b[2m";
Underscore = "\x1b[4m";
Blink = "\x1b[5m";
Reverse = "\x1b[7m";
Hidden = "\x1b[8m";

FgNone = null;
FgBlack = "\x1b[30m";
FgRed = "\x1b[31m";
FgGreen = "\x1b[32m";
FgYellow = "\x1b[33m";
FgBlue = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan = "\x1b[36m";
FgWhite = "\x1b[37m";

BgBlack = "\x1b[40m";
BgRed = "\x1b[41m";
BgGreen = "\x1b[42m";
BgYellow = "\x1b[43m";
BgBlue = "\x1b[44m";
BgMagenta = "\x1b[45m";
BgCyan = "\x1b[46m";
BgWhite = "\x1b[47m";

const slength = 100;
const line = "-".repeat(slength);
// const underline = '_'.repeat(slength);
const star = "*".repeat(slength);
const hash = "#".repeat(slength);

exports.colors = [
  FgNone,
  FgBlack,
  FgRed,
  FgGreen,
  FgYellow,
  FgBlue,
  FgMagenta,
  FgCyan,
  FgWhite,
  BgBlack,
  BgRed,
  BgGreen,
  BgYellow,
  BgBlue,
  BgMagenta,
  BcCyan,
  BgWhite
];

let currentColor = null;

exports.clear = () => {
  console.log("\x1Bc");
};

exports.line = () => {
  console.log(line);
};

exports.setColor = color => {
  currentColor = color;
};

exports.header = s => {
  console.log("");
  console.log("");
  console.log("");
  console.log(hash);
  console.log("");
  console.log(s);
  console.log("");
  console.log(hash);
};

exports.subHeader1 = s => {
  console.log(" ");
  console.log(star);
  console.log(s);
  console.log(star);
  console.log("");
};

exports.subHeader2 = s => {
  console.log(" ");
  console.log(line);
  console.log(s);
  console.log(line);
  console.log(" ");
};

exports.runManual = (reason, folder) => {
  console.log("");
  console.log(line);
  console.log("OBS!!!!!!!!!");
  console.log("YOU HAVE TO RUN THIS MANUALLY becuse ", reason);
  console.log(`node ./${folder}/app.js`);
};
