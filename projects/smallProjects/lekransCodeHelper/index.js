const util = require("util");
const slength = 100;
const sLine = "-".repeat(slength);
const sStar = "*".repeat(slength);
const sHash = "#".repeat(slength);
const startComment = "/* " + "-".repeat(slength - 3);
const endComment = "-".repeat(slength - 3) + " */";

const STATE = {
  Clear: "\x1Bc",
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

const COLORS = {
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

const config = {
  CLEAR_TIMEOUT: 100,
  HEADER_BORDER_COLOR: COLORS.FgMagenta,
  HEADER_TEXT_COLOR: COLORS.FgLtMagenta
};

let currentFgColor = COLORS.FgDefault;
let currentBgColor = COLORS.BgDefault;
let timeOutTime = 1;
const TIME_OUT_ON_CLEAR = 15;

const center = txt => {
  const start = slength / 2 - txt.length / 2;
  return `${" ".repeat(start)}${txt}`;
};

const colorize = txt => {
  return `${currentFgColor}${currentBgColor}${txt}${STATE.Reset}`;
};

const clear = () => {
  return new Promise((resolve, reject) => {
    console.log(STATE.Clear);
    try {
      setTimeout(() => {
        resolve();
      }, config.CLEAR_TIMEOUT);
    } catch (e) {
      reject(e);
    }
  });
};

const reset = () => {
  console.log(STATE.Reset);
};

const line = () => {
  console.log(colorize(sLine));
};

const setColor = (fgColor, bgColor) => {
  currentFgColor = fgColor;
  currentBgColor = bgColor;
};

const setFgColor = color => {
  currentFgColor = color;
};

const setBgColor = color => {
  currentBgColor = color;
};

const header = s => {
  console.log("\n".repeat(3));
  console.log(`${config.HEADER_BORDER_COLOR}${sHash}${COLORS.FgDefault}`);
  console.log("");
  console.log(
    `${config.HEADER_TEXT_COLOR}${center(s).toUpperCase()}${COLORS.FgDefault}`
  );
  console.log("");
  console.log(`${config.HEADER_BORDER_COLOR}${sHash}${COLORS.FgDefault}`);
};

const subHeader1 = s => {
  console.log(`\n${COLORS.FgBlue}${sStar}`);
  console.log(`${COLORS.FgLtCyan}${s}`);
  console.log(`${COLORS.FgBlue}${sStar}\n`);
};

const subHeader2 = s => {
  console.log(COLORS.FgLtGreen);
  console.log(sLine);
  console.log(s);
  console.log(sLine);
  console.log(STATE.Reset);
};

const footer = s => {
  const spacing = " ".repeat(2);
  const shortHash = "#".repeat(slength / 2 - s.length / 2 - spacing.length);
  const fillCount =
    slength - (shortHash.length * 2 + s.length + spacing.length * 2);
  const preText = `\n${COLORS.FgMagenta}${shortHash}${spacing}`;
  const text = `${COLORS.FgLtMagenta}${s.toUpperCase()}${COLORS.FgLtMagenta}`;
  const postText = `${spacing}${shortHash}${"#".repeat(fillCount)}`;
  console.log(`${preText}${text}${postText}${COLORS.FgDefault}\n\n`);
};

const comment = s => {
  console.log(`${COLORS.FgLtGray}${startComment}`);
  console.log(`${" ".repeat(3)}${s}`);
  console.log(`${endComment}${currentFgColor}`);
};

const runManual = (reason, folder) => {
  console.log("");
  console.log(sLine);
  console.log("OBS!!!!!!!!!");
  console.log("YOU HAVE TO RUN THIS MANUALLY becuse ", reason);
  console.log(`node ./${folder}/app.js`);
};

const log = (data, ...args) => {
  console.log(colorize(util.format(data, ...args)));
};

module.exports = {
  COLORS,
  STATE,
  log,
  runManual,
  comment,
  header,
  subHeader1,
  subHeader2,
  footer,
  setBgColor,
  setColor,
  setFgColor,
  line,
  clear,
  reset,
  config
};
