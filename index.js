const inquirer = require("inquirer");
const { Shapes, Square } = require("./lib/shapes");

const initialShapeQ = inquirer
.prompt([
    {
      type: "list",
      name: "Shape",
      message: "Please pick a shape for your SVG Logo",
      choices: ["Square","Triangle","Circle"],
    },
])
.then((answer) => {
    this.shape = answer['Shape'];
    if(this.shape === "Square"){
        console.log(this.shape);
        squareTmp();
    } else if (this.shape === "Circle"){
        console.log(this.shape);
        circleTmp();
    } else {
        console.log(this.shape);
        triangleTmp();
    }
});


function squareTmp() { inquirer
    .prompt([
    {
        type: "input",
        name: "width",
        message: "Please pick a width for your square",
    },
    {
        type: "input",
        name: "height",
        message: "Please pick a height for your square",
    },
    ])
    .then((answer) => {
        const width = answer["width"];
        const height = answer["height"];
        console.log(width);
        console.log(height);
        const square = new Square("Square", width, height);
        square.render();
    });
}

function circleTmp() { inquirer
    .prompt([
    {
        type: "input",
        name: "radius",
        message: "Please pick a radius for your circle",
    },
    ])
    .then((answer) => {
        const radius = answer["radius"];
        console.log(radius);
    });
}

// function triangleTmp() { inquirer
//     .prompt([
//     {
//         type: "input",
//         name: "radius",
//         message: "Please pick a radius for your circle",
//     },
//     ])
//     .then((answer) => {
//         const radius = answer["radius"];
//         console.log(radius);
//     });
// }