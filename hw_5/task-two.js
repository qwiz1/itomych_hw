function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;

  this.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

function areaIntersectionOfTwoCircles(circle1, circle2) {
  const [x1, y1, r1] = [circle1.x, circle1.y, circle1.radius];
  const [x2, y2, r2] = [circle2.x, circle2.y, circle2.radius];

  // Get vertical and horizontal distances between circles.
  const dx = x2 - x1;
  const dy = y2 - y1;

  // Distance between the circle centers as a straight line.
  const dist = Math.hypot(dy, dx);

  // Are circles intersect? If not => return
  if (
    dist > r1 + r2 ||
    dist < Math.abs(r1 - r2) ||
    (x1 === x2 && y1 === y2 && r1 === r2)
  ) {
    console.log('Circles are not intersect');
    return;
  }
  const phi =
    Math.acos((r1 * r1 + dist * dist - r2 * r2) / (2 * r1 * dist)) * 2;
  const theta =
    Math.acos((r2 * r2 + dist * dist - r1 * r1) / (2 * r2 * dist)) * 2;
  const area1 = 0.5 * theta * (r2 * r2) - 0.5 * (r2 * r2) * Math.sin(theta);
  const area2 = 0.5 * phi * (r1 * r1) - 0.5 * (r1 * r1) * Math.sin(phi);
  return area1 + area2;
}

const circle1 = new Circle(0, 3, 2);
const circle2 = new Circle(2, 1, 3);

console.log(
  'Intersection area ',
  areaIntersectionOfTwoCircles(circle1, circle2),
);
