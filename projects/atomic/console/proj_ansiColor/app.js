const slength = 100;
const line = '-'.repeat(slength);
// const underline = '_'.repeat(slength);
const star = '*'.repeat(slength);
const hash = '#'.repeat(slength);

exports.STATE = {
  Reset: '\x1b[0m',
  Bold: '\x1b[1m',
  BoldOff: '\x1b[21m',
  Dim: '\x1b[2m',
  Underline: '\x1b[4m',
  UnderlineOff: '\x1b[24m',
  Blink: '\x1b[5m',
  BlinkOff: '\x1b[25m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
};

exports.COLORS = {
  FgNone: null,
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
  FgDefault: '\x1b[39m',
  FgLtGray: '\x1b[90m',
  FgLtRed: '\x1b[91m',
  FgLtGreen: '\x1b[92m',
  FgLtYellow: '\x1b[93m',
  FgLtBlue: '\x1b[94m',
  FgLtMagenta: '\x1b[95m',
  FgLtCyan: '\x1b[96m',
  FgLtWhite: '\x1b[97m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
  BgDefault: '\x1b[49m',
  BgLtBlack: '\x1b[100m',
  BgLtRed: '\x1b[101m',
  BgLtGreen: '\x1b[102m',
  BgLtYellow: '\x1b[103m',
  BgLtBlue: '\x1b[104m',
  BgLtMagenta: '\x1b[105m',
  BgLtCyan: '\x1b[106m',
  BgLtWhite: '\x1b[107m',
};

let currentFgColor = exports.COLORS.FgDefault;
let currentBgColor = exports.COLORS.BgDefault;

exports.clear = () => {
  console.log('\x1Bc');
};

exports.resetColors = () => {
  console.log(exports.STATE.Reset);
};

exports.line = () => {
  console.log(line);
};

exports.setColor = (fgColor, bgColor) => {
  currentFgColor = fgColor;
  currentBgColor = bgColor;
};

exports.setFgColor = (color) => {
  currentFgColor = color;
};

exports.setBgColor = (color) => {
  currentBgColor = color;
};

exports.log = (text) => {
  // we use the ANSI colors (currentFG/Bg) to set colors before the text and finish
  // with a STATE.Reset .. the ANSI code for resetting the state and color
  console.log(
    `${currentFgColor}${currentBgColor}${text}${exports.STATE.Reset}`,
  );
};

exports.resetColors();
exports.log('Normal text');

exports.setFgColor(exports.COLORS.FgCyan);
exports.log('Den här texten ska vara cyan');

exports.setBgColor(exports.COLORS.BgLtRed);
exports.log('Den här texten ska vara cyan med röd bakgrund');
exports.log(
  `Den här texten ska vara cyan ${
    exports.COLORS.FgBlack
  }utom det här ${currentFgColor} men den här ska vara cyan igen med röd bakgrund`,
);
