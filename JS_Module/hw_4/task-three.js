const createBase = (num1) => {
  return (num2) => {
    return num1 + num2;
  }
};

const addSix = createBase(6);
const addFourtyTwo = createBase(42);

console.log(addSix(10));
console.log(addSix(21));
console.log(addSix(12));
console.log(addFourtyTwo(4));
console.log(addFourtyTwo(8));
