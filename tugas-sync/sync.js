const fs = require("fs-extra");
const timeStamp = Date.now();
const date = new Date(timeStamp);

function main() {
  fs.outputFileSync("tugas/contoh.txt", "Ini pakai Sync");
  fs.copySync("tugas/contoh.txt", "tugas/backup.txt");
  fs.appendFileSync(
    "tugas/backup.txt",
    `\n ini adalah file backup \n Created ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );

  const data = fs.readFileSync("tugas/backup.txt", "utf8");
  console.log(data);
}

main();
