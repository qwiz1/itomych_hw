Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

const arr = [4, 1, 3, 3];

console.log(
  arr.myReduce((prev, curr) => {
    return curr + prev;
  }),
);
