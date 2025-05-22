import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// You can try:
// console.log(`${answer}: command not found`)
// OR, you can try:
// rl.write(`${answer}: command not found`)

rl.question("$ ", (answer) => {
  rl.write(`${answer}: command not found`)
  rl.close();
});

// Testing something (github doesn't work)
