const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perimeterAndAreaOfSquare = (n) => {
  if (n < 1 || n > 1000) return;
  const p = 4 * n;
  const s = Math.pow(n, 2);
  return {
    perimeter: p,
    area: s,
  };
};

rl.question('Enter a length of line to calculate the perimeter and area of the square: ', (lineLength) => {
  const result = perimeterAndAreaOfSquare(Number(lineLength));
  console.log(result);
  rl.close();
});
