// Import the necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword or hexadecimal number for text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Which shape would you like to draw?",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color keyword or hexadecimal number for shape color:",
    },
  ]);
}

// Function to generate the logo
function generateLogo(text, textColor, shapeType, shapeColor) {
  let shape;

  // Create a new shape object based on the user's choice
  switch (shapeType) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Circle":
      shape = new Circle();
      break;
    default:
      throw new Error("Invalid shape type");
  }

  // Set the color of the shape
  shape.setColor(shapeColor);

  // Create the SVG content
  const svgContent = `
<svg width="200" height="200">
    ${shape.render()}
    <text x="50%" y="50%" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text>
</svg>
  `;

  // Write the SVG content to a file
  fs.writeFile("./examples/logo.svg", svgContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Logo created!");
  });
}

// Main function to run the program
function main() {
  // Try to run the program or catch any errors
  try {
    promptUser().then((answers) => {
      generateLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.color
      );
    });
  } catch (error) {
    console.error(error);
  }
}

main();
