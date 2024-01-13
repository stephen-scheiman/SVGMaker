const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle } = require("./lib/shapes");

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
      fs.writeFile(`${answers["initials"]}.svg`, tmpLogo, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
  });
