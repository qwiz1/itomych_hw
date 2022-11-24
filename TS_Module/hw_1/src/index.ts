import { productOfTwoPolynomials } from './task_2/product_polynomials';
import { isInside } from './task_3/triangle';

console.log(productOfTwoPolynomials('2x - 2', '3x + 1'));

console.log(
  `Is point lies inside the triangle? ${isInside(
    10,
    10,
    15,
    40,
    30,
    10,
    15,
    50,
  )}`,
);
console.log(
  `Is point lies inside the triangle? ${isInside(
    10,
    10,
    15,
    40,
    30,
    10,
    15,
    10,
  )}`,
);
