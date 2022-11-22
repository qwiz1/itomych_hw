const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const romanNumbers = new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['V', 5],
  ['I', 1],
]);

const romanToDecimal = (romanNum) => {
  if (typeof romanNum !== 'string') {
    return;
  }
  romanNum = romanNum.trim().toUpperCase();

  let result = 0;
  for (let i = 0; i < romanNum.length; i++){
    const n1 = romanNumbers.get(romanNum[i]);
    if (i + 1 < romanNum.length){
      const n2  = romanNumbers.get(romanNum[i + 1]);
      if (n1 >= n2){
        result += n1;
      } else {
        result += n2 - n1;
        i++;
      }
    } else {
      result += n1;
    }
  }
  return result;
};

const decimalToRoman = (num) => {
  if (typeof num !== 'number') {
    return;
  }
  let result = '';
  romanNumbers.forEach((value, key) => {
    while (num >= value) {
      result += key;
      num -= value;
    }
  })
  return result;
};

const sumOfTwoRoman = (a, b) => {
  const decimalSum = romanToDecimal(a) + romanToDecimal(b);
  return decimalToRoman(decimalSum);
};

const handleQuestion = () => {
  rl.question('Sum of two roman numbers (enter expression something like III + IV no case sensitive): ', (expression) => {
    const [a, b] = expression.split('+').map((n)=> n.trim());
    const sum = sumOfTwoRoman(a, b);
    console.log(`${expression} = ${sum}`);
    rl.close();
    return sum;
  });
}

handleQuestion();