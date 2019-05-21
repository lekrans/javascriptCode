const fs = require("fs");
const fileName = "./big.file";
if (!fs.existsSync(fileName)) {
  const file = fs.createWriteStream(fileName);
  for (let index = 0; index < 5e6; index++) {
    file.write(
      "hslkjelk lkj slkjekjrkjrkjr   sd fls lerl ksj dlkj erlkj lkj elslsldfl lkej ekjr kj skj dfkj kjekjekj ej kslkj alkfj lkj sdfl \n"
    );
  }

  file.end();
}
