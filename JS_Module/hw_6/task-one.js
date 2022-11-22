const A = [
  [1, 2],
  [6, 1],
  [2, 3],
];
const B = [
  [2, 5, 3],
  [6, 7, 5],
];

const multiplyMatrix = (A, B) => {
  const a = {
    rows: A.length,
    cols: A[0].length,
  };
  const b = {
    rows: B.length,
    cols: B[0].length,
  };
  const C = [];
  //Check: can matrices multiply?
  if (a.cols !== b.rows) return false;
  //Filling our result matrix with empty arrays
  for (let i = 0; i < a.rows; i++) C.push([]);

  //Loop through B matrix columns
  for (let k = 0; k < b.cols; k++) {
    // On each column B matrix do loop through A matrix rows
    for (let i = 0; i < a.rows; i++) {
      // Temporary result for cell
      let cell = 0;
      // Sum of multiplying row and columns
      for (let j = 0; j < b.rows; j++) cell += A[i][j] * B[j][k];
      //Writing calculated cells to the result C matrix
      C[i][k] = cell;
    }
  }
  return C;
};

console.log(multiplyMatrix(A, B));
