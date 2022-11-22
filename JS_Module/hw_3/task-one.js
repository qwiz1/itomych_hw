const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isTwoDigit = (num) => {
  if (typeof num !== 'number') return false;
  const separetedNum = num.toString().split('');
  return separetedNum.length === 2;
};

const handleQuestion = () => {
  rl.question('Enter a two-digit number: ', (num) => {
    if (isTwoDigit(Number(num))){
      // In rl.question callback, we receive num as string so we dont need to convert it to string 
      const twoDigitBySpace = num.split('').join(' ');
      console.log(`Your two digit-number by space: ${twoDigitBySpace}`);

      rl.close();
      return twoDigitBySpace;
    }
    console.log('The wrong number let\'s try again pls!');
    handleQuestion();
  });
};

handleQuestion();
