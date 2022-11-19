import { calculator } from './calculator.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Type expression to calculate :', (expr) => {
  console.log(calculator(expr))
  rl.close();
});
