// Define the shape class
class Shape {
  constructor() {
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }
}

// Define the Triangle class inheriting from the Shape class
class Triangle extends Shape {
  render() {
    return `<polygon points="100, 0 200, 200 0, 200" fill="${this.color}" />`;
  }
}

// Define the Circle class inheriting from the Shape class
class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
  }
}

// Define the Square class inheriting from the Shape class
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Export the classes
module.exports = { Triangle, Circle, Square };
