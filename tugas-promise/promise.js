const fs = require("fs-extra");
const timeStamp = Date.now();
const date = new Date(timeStamp);

function main() {
  fs.outputFile("tugas/contoh.txt", "ini dibuat pakai Promise")
    .then(() => {
      return fs.copy("tugas/contoh.txt", "tugas/backup.txt");
    })
    .then(() => {
      return fs.appendFile(
        "tugas/backup.txt",
        `\n ini adalah file backup \n Created ${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    })
    .then(() => {
      return fs.readFile("tugas/backup.txt", "utf8");
    })
    .then((data) => {
      console.log(data);
    });
}

main();
