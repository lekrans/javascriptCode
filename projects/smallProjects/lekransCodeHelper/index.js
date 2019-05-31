const slength = 100;
const line = "-".repeat(slength);
// const underline = '_'.repeat(slength);
const star = "*".repeat(slength);
const hash = "#".repeat(slength);

exports.STATE = {
  Reset: "\x1b[0m",
  Bold: "\x1b[1m",
  BoldOff: "\x1b[21m",
  Dim: "\x1b[2m",
  Underline: "\x1b[4m",
  UnderlineOff: "\x1b[24m",
  Blink: "\x1b[5m",
  BlinkOff: "\x1b[25m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m"
};

exports.COLORS = {
  FgNone: null,
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  FgDefault: "\x1b[39m",
  FgLtGray: "\x1b[90m",
  FgLtRed: "\x1b[91m",
  FgLtGreen: "\x1b[92m",
  FgLtYellow: "\x1b[93m",
  FgLtBlue: "\x1b[94m",
  FgLtMagenta: "\x1b[95m",
  FgLtCyan: "\x1b[96m",
  FgLtWhite: "\x1b[97m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
  BgDefault: "\x1b[49m",
  BgBlack: "\x1b[100m",
  BgRed: "\x1b[101m",
  BgGreen: "\x1b[102m",
  BgYellow: "\x1b[103m",
  BgBlue: "\x1b[104m",
  BgMagenta: "\x1b[105m",
  BgCyan: "\x1b[106m",
  BgWhite: "\x1b[107m"
};

let currentFgColor = exports.COLORS.FgDefault;
let currentBgColor = exports.COLORS.BgDefault;

const center = txt => {
  const start = slength / 2 - txt.length / 2;
  return `${" ".repeat(start)}${txt}`;
};

exports.clear = () => {
  console.log("\x1Bc");
};

exports.line = () => {
  console.log(line);
};

exports.setColor = (fgColor, bgColor) => {
  currentFgColor = fgColor;
  currentBgColor = bgColor;
};

exports.setFgColor = color => {
  currentFgColor = color;
};

exports.setBgColor = color => {
  currentBgColor = color;
};

exports.header = s => {
  console.log("\n".repeat(3));
  console.log(`${exports.COLORS.FgLtBlue}${hash}${exports.COLORS.FgDefault}`);
  console.log("");
  console.log(
    `${exports.COLORS.FgLtCyan}${center(s).toUpperCase()}${
      exports.COLORS.FgDefault
    }`
  );
  console.log("");
  console.log(`${exports.COLORS.FgLtBlue}${hash}${exports.COLORS.FgDefault}`);
};

exports.subHeader1 = s => {
  console.log(" ");
  console.log(star);
  console.log(s);
  console.log(star);
  console.log("");
};

exports.subHeader2 = s => {
  console.log(exports.COLORS.FgLtGreen);
  console.log(line);
  console.log(s);
  console.log(line);
  console.log(exports.STATE.Reset);
};

exports.runManual = (reason, folder) => {
  console.log("");
  console.log(line);
  console.log("OBS!!!!!!!!!");
  console.log("YOU HAVE TO RUN THIS MANUALLY becuse ", reason);
  console.log(`node ./${folder}/app.js`);
};
