const notUniqArray = [1, '1', 'a', 1, 2, 'b', 'a', 3, 2, 3, '1', '3'];

// Variant 1 ------------------------------

// const getUniqValues = (array) => {
//   return array.filter((v, i, a) => a.indexOf(v) === i);
// };

// Variant 2 ------------------------------

const getUniqValues = (array) => {
  return [...new Set(array)];
};

console.log(getUniqValues(notUniqArray));
