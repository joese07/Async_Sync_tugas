const fs = require("fs-extra");
const timeStamp = Date.now();
const date = new Date(timeStamp);

async function main() {
  await fs.outputFile("tugas/contoh.txt", " ini dibuat dengan Async Await");
  await fs.copy("tugas/contoh.txt", "tugas/backup.txt");
  await fs.appendFile(
    "tugas/backup.txt",
    `\n ini adalah file backup \n Created ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );

  const data = await fs.readFile("tugas/backup.txt", "utf8");
  console.log(data);
}

main();
