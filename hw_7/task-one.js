class Shape {
  constructor(x, y) {
    this.xPosition = x;
    this.yPosition = y;
  }
}

class Rectangle extends Shape {
  //#corners are private, to realize encapsulation. Just for example.
  #corners = 4;
  constructor(x, y, height, width) {
    super(x, y);
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }

  getPerimeter() {
    return 2 * (this.height + this.width);
  }

  getCorners() {
    return this.#corners;
  }

  getDiagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
}

class Square extends Rectangle {
  constructor(x, y, size) {
    super(x, y, size, size);
  }
}

class Triangle extends Shape {
  constructor(x, y, base, height) {
    super(x, y);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (1 / 2) * this.base * this.height;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Ellipse extends Shape {
  constructor(x, y, rX, rY) {
    super(x, y);
    this.rX = rX;
    this.rY = rY;
  }

  getArea() {
    return Math.PI * this.rX * this.rY;
  }

  getPerimeter() {
    return (
      2 * Math.PI * Math.sqrt((Math.pow(this.rX, 2) + Math.pow(this.rY, 2)) / 2)
    );
  }
}

const shape = new Shape(2, 2);
const square = new Square(0, 0, 5);
const rectangle = new Rectangle(0, 0, 3, 4);
const triangle = new Triangle(0, 0, 6, 8);
const circle = new Circle(1, 1, 1);
const ellipse = new Ellipse(1, 0, 2, 4);

console.log(`Square area: ${square.getArea()}`);
console.log(`Square perimeter: ${square.getPerimeter()}`);

console.log(`Rectangle area: ${rectangle.getArea()}`);
console.log(`Rectangle perimeter: ${rectangle.getPerimeter()}`);

console.log(rectangle.getCorners());
console.log(rectangle.getDiagonal());
