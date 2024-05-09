// Importing the shapes.js file
const { Triangle, Circle, Square } = require("./shapes");

// Test suite for the Triangle class
describe("Triangle", () => {
  test("render() method should return SVG string with correct color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="100, 0 200, 200 0, 200" fill="blue" />'
    );
  });
});

// Test suite for the Circle class
describe("Circle", () => {
  test("render() method should return SVG string with correct color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      '<circle cx="100" cy="100" r="100" fill="blue" />'
    );
  });
});

// Test suite for the Square class
describe("Square", () => {
  test("render() method should return SVG string with correct color", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="blue" />'
    );
  });
});
