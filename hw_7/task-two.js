import { Rectangle, Square, Triangle, Circle, Ellipse } from './task-one.js';
import areaIntersectionOfTwoCircles from '../hw_5/task-two.js';

function areaIntersectionOfTwoRectangle(rec1, rec2) {
  const recPos1 = rec1.getCornersPosition();
  const recPos2 = rec2.getCornersPosition();
  const left = Math.max(recPos1.x1, recPos2.x1);
  const top = Math.min(recPos1.y3, recPos2.y3);
  const right = Math.min(recPos1.x3, recPos2.x3);
  const bottom = Math.max(recPos1.y1, recPos2.y1);
  
  const width = right - left;
  const height = top - bottom;
  
  if (width <= 0 || height <= 0) {
    console.log('Rectangles/Square are not intersect');
    return false;
  }
  
  return width * height;
}

const rectangle1 = new Rectangle(2, 2, 4, 6);
const rectangle2 = new Rectangle(4, 2, 2, 4);

const square1 = new Square(2, 2, 4);
const square2 = new Square(4, 2, 2);

console.log(
  'Intersection area Rectangle ',
  areaIntersectionOfTwoRectangle(rectangle1, rectangle2),
);

console.log(
  'Intersection area Rectangle ',
  areaIntersectionOfTwoRectangle(square1, square2),
);

// function areaIntersectionOfTwoTriangle(triangle1, triangle2) {}



// function areaIntersectionOfTwoRectangle(ellipse1, ellipse2) {}

const circle1 = new Circle(0, 3, 2);
const circle2 = new Circle(2, 1, 3);

console.log(
  '\nIntersection area Circle',
  areaIntersectionOfTwoCircles(
    { x: circle1.xPosition, y: circle1.yPosition, radius: circle1.radius },
    { x: circle2.xPosition, y: circle2.yPosition, radius: circle2.radius },
  ),
);
