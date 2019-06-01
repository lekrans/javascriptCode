const slength = 100;
const line = "-".repeat(slength);
// const underline = '_'.repeat(slength);
const star = "*".repeat(slength);
const hash = "#".repeat(slength);
const util = require("util");

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
  BgLtGray: "\x1b[100m",
  BgLtRed: "\x1b[101m",
  BgLtGreen: "\x1b[102m",
  BgLtYellow: "\x1b[103m",
  BgLtBlue: "\x1b[104m",
  BgLtMagenta: "\x1b[105m",
  BgLtCyan: "\x1b[106m",
  BgLtWhite: "\x1b[107m"
};

let currentFgColor = exports.COLORS.FgDefault;
let currentBgColor = exports.COLORS.BgDefault;
let timeOutTime = 1;
const TIME_OUT_ON_CLEAR = 15;

const center = txt => {
  const start = slength / 2 - txt.length / 2;
  return `${" ".repeat(start)}${txt}`;
};

const colorize = txt => {
  return `${currentFgColor}${currentBgColor}${txt}${exports.STATE.Reset}`;
};

exports.clear = () => {
  console.log("\x1Bc");
  timeOutTime = TIME_OUT_ON_CLEAR;
  setTimeout(() => {
    timeOutTime = 1;
  }, TIME_OUT_ON_CLEAR);
};

exports.line = () => {
  setTimeout(() => console.log(colorize(line)), timeOutTime);
};

exports.setColor = (fgColor, bgColor) => {
  setTimeout(() => {
    currentFgColor = fgColor;
    currentBgColor = bgColor;
  }, timeOutTime);
};

exports.setFgColor = color => {
  setTimeout(() => (currentFgColor = color), timeOutTime);
};

exports.setBgColor = color => {
  setTimeout(() => (currentBgColor = color), timeOutTime);
};

exports.header = s => {
  setTimeout(() => {
    console.log("\n".repeat(3));
    console.log(
      `${exports.COLORS.FgMagenta}${hash}${exports.COLORS.FgDefault}`
    );
    console.log("");
    console.log(
      `${exports.COLORS.FgLtMagenta}${center(s).toUpperCase()}${
        exports.COLORS.FgDefault
      }`
    );
    console.log("");
    console.log(
      `${exports.COLORS.FgMagenta}${hash}${exports.COLORS.FgDefault}`
    );
  }, timeOutTime);
};

exports.subHeader1 = s => {
  setTimeout(() => {
    console.log(`\n${exports.COLORS.FgBlue}${star}`);
    console.log(`${exports.COLORS.FgLtCyan}${s}`);
    console.log(`${exports.COLORS.FgBlue}${star}\n`);
  }, timeOutTime);
};

exports.subHeader2 = s => {
  setTimeout(() => {
    console.log(exports.COLORS.FgLtGreen);
    console.log(line);
    console.log(s);
    console.log(line);
    console.log(exports.STATE.Reset);
  }, timeOutTime);
};

exports.runManual = (reason, folder) => {
  setTimeout(() => {
    console.log("");
    console.log(line);
    console.log("OBS!!!!!!!!!");
    console.log("YOU HAVE TO RUN THIS MANUALLY becuse ", reason);
    console.log(`node ./${folder}/app.js`);
  }, timeOutTime);
};

exports.log = (data, ...args) => {
  setTimeout(() => {
    console.log(colorize(util.format(data, ...args)));
  }, timeOutTime);
};
