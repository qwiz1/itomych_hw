function area(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
): number {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

// Point P(x, y) lies inside the triangle A(x1, y1), B(x2, y2) and C(x3, y3)
export function isInside(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x: number,
  y: number,
): boolean {
  // Area of triangle ABC
  const A = area(x1, y1, x2, y2, x3, y3);

  // Area of triangle PBC
  const A1 = area(x, y, x2, y2, x3, y3);

  // Area of triangle PAC
  const A2 = area(x1, y1, x, y, x3, y3);

  // Area of triangle PAB
  const A3 = area(x1, y1, x2, y2, x, y);

  // Check if sum of A1, A2 and A3 is same as A
  return A === A1 + A2 + A3;
}
