const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes");
// test for no more than three chars
const answerValidatorInitials = async (answer) => {
  if (answer.length > 3) {
    return "Please enter up to three(3) characters";
    questions();
  }
  return true;
};
// function to write output to a file
const writeToSVG = (tmpLogo) => {
  fs.writeFile("./examples/logo.svg", tmpLogo, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg!")
  );
};
// standard colors and their hex that we will accept as input
const stdColors = {
  black: `#000000`,
  silver: `#c0c0c0`,
  gray: `#808080`,
  white: `#ffffff`,
  maroon: `#800000`,
  red: `#ff0000`,
  purple: `#800080`,
  fuchsia: `#ff00ff`,
  green: `#008000`,
  lime: `#00ff00`,
  olive: `#808000`,
  yellow: `#ffff00`,
  navy: `#000080`,
  blue: `#0000ff`,
  teal: `#008080`,
  aqua: `#00ffff`,
};
// test for std color/hex for text color
const answerValidatorTextColor = (answer) => {
  const tmp = answer.toLowerCase();
  for (const index in stdColors) {
    if (tmp == index || tmp == stdColors[index]) {
      return true;
    }
  }
  return "You must choose a standard color name";
  questions();
};
// test for std color/hex for shape color
const answerValidatorShapeColor = (answer) => {
  const tmp = answer.toLowerCase();
  for (const index in stdColors) {
    if (tmp == index || tmp == stdColors[index]) {
      return true;
    }
  }
  return "You must choose a standard color name";
  questions();
};

const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "initials",
      message: "Please enter three letters for your SVG Logo",
      validate: answerValidatorInitials,
    },
    {
      type: "input",
      name: "txtColor",
      message: "Please enter the text color for your SVG Logo",
      validate: answerValidatorTextColor,
    },
    {
      type: "list",
      name: "shape",
      message: "Please enter the shape for your SVG Logo",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter the color of the shape for your SVG Logo",
      validate: answerValidatorShapeColor,
    },
  ])
  .then((answers) => {
    // if we're a circle, do circle stuff
    if (answers["shape"] === "Circle") {
      const circle = new Circle(
        answers["shape"],
      );
      //call the setText method for the Circle class
      circle.setText(answers["initials"].toUpperCase())
    //call the setColor method for the Circle class
      circle.setColor(answers["shapeColor"])
      //call the setTxtColor method for the Circle class
      circle.setTxtColor(answers["txtColor"]);
      const tmpLogo = circle.render();
      writeToSVG(tmpLogo);
      // if we're a square, do square things
    } else if (answers["shape"] === "Square") {
      const square = new Square(
        answers["shape"],
      );
      square.setText(answers["initials"].toUpperCase())
      square.setColor(answers["shapeColor"])
      square.setTxtColor(answers["txtColor"]);
      const tmpLogo = square.render();
      writeToSVG(tmpLogo);
    } else {
        // same for triangle
      const triangle = new Triangle(
        answers["shape"],
      );
      triangle.setText(answers["initials"].toUpperCase());
      triangle.setColor(answers["shapeColor"]);
      triangle.setTxtColor(answers["txtColor"]);
      const tmpLogo = triangle.render();
      writeToSVG(tmpLogo);
    }
  });
