const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes");

const answerValidatorInitials = async (answer) => {
  if (answer.length > 3) {
    return "Please enter up to three(3) characters";
    questions();
  }
  return true;
};

const writeToSVG = (tmpLogo) => {
  fs.writeFile("./examples/logo.svg", tmpLogo, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg!")
  );
};

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
    if (answers["shape"] === "Circle") {
      const circle = new Circle(
        answers["initials"].toUpperCase(),
        answers["txtColor"],
        answers["shape"],
        //answers["shapeColor"]
      );
      circle.setColor(answers["shapeColor"]);
      const tmpLogo = circle.render();
      writeToSVG(tmpLogo);
    } else if (answers["shape"] === "Square") {
      const square = new Square(
        answers["initials"].toUpperCase(),
        answers["txtColor"],
        answers["shape"],
       // answers["shapeColor"]
      );
      square.setColor(answers["shapeColor"]);
      const tmpLogo = square.render();
      writeToSVG(tmpLogo);
    } else {
      const triangle = new Triangle(
        answers["initials"].toUpperCase(),
        answers["txtColor"],
        answers["shape"],
        // answers["shapeColor"]
      );
      triangle.setColor(answers["shapeColor"]);
      const tmpLogo = triangle.render();
      writeToSVG(tmpLogo);
    }
  });
