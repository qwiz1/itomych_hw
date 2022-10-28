const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const multiply = (num1, num2) => {
  return num1 * num2; 
};

const double = (num) => {
  return multiply(num, 2);
};

const square = (num) => {
  return multiply(num, num);
};

rl.question('Enter two numbers to multiply (exmpl: 4, 3): ', (numbers)=>{
  const [x, y] = numbers.split(',').map(n => Number(n.trim()));
  console.log(multiply(x,y));

  rl.question('Enter a number to double it: ', (number)=>{
    console.log(double(+number));

    rl.question('Enter a number to square it: ', (number)=>{
      rl.resume()
      console.log(square(+number));

      rl.close()
    });
  });
});
