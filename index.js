const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes");

const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "initials",
      message: "Please enter three letters for your SVG Logo",
    },
    {
      type: "input",
      name: "txtColor",
      message: "Please enter the text color for your SVG Logo",
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
    },
  ])
  .then((answers) => {
    if (answers["shape"] === "Circle") {
      const circle = new Circle(
        answers["initials"],
        answers["txtColor"],
        answers["shape"],
        answers["shapeColor"]
      );
      const tmpLogo = circle.render();
      fs.writeFile("./examples/test.svg", tmpLogo, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    } else if (answers["shape"] === "Square") {
      const square = new Square(
        answers["initials"],
        answers["txtColor"],
        answers["shape"],
        answers["shapeColor"]
      );
      const tmpLogo = square.render();
      fs.writeFile("./examples/test.svg", tmpLogo, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    } else {
      const triangle = new Triangle(
        answers["initials"],
        answers["txtColor"],
        answers["shape"],
        answers["shapeColor"]
      );
      const tmpLogo = triangle.render();
      fs.writeFile("./examples/test.svg", tmpLogo, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
  });
