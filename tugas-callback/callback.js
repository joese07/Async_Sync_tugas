const { removeSync } = require("fs-extra");
const fs = require("fs-extra");
const timeStamp = Date.now();
const date = new Date(timeStamp);

function main() {
  fs.outputFile("tugas/contoh.txt", "ini dibuat pakai callback", () => {
    fs.copy("tugas/contoh.txt", "tugas/backup.txt", () => {
      fs.appendFile(
        "tugas/backup.txt",
        `\n ini adalah file backup \n Created ${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        () => {
          fs.readFile("tugas/backup.txt", "utf8", (err, data) => {
            console.log(data);
          });
        }
      );
    });
  });
}

main();
