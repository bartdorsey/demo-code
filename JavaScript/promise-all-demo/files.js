const fs = require('fs').promises;

const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt', 'file6.txt'];


async function readFiles(files) {
  console.time('readFiles');
  const fileContents = [];
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    fileContents.push(content);
  }
  // console.log(fileContents);
  console.timeEnd('readFiles');
}

async function readFilesInParallel(files) {
  console.time('readFilesInParallel');
  const filePromises = [];
  for (const file of files) {
    const promise = fs.readFile(file, 'utf-8');
    filePromises.push(promise);
  }
  const fileContents = await Promise.all(filePromises);
  console.timeEnd('readFilesInParallel');
}

async function main() {
  await readFiles(files);
  await readFilesInParallel(files);
}

main();