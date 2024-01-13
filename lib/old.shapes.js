const inquirer = require("inquirer");

class Shapes {
  constructor(shapeName, shapeFillColor, shapeStrokeColor, shapeStrokeWidth) {
    this.shapeName = shapeName;
    this.shapeFillColor = shapeFillColor;
    this.shapeStrokeColor = shapeStrokeColor;
    this.shapeStrokeWidth = shapeStrokeWidth;
    //console.log(this.shapeName);
  }
}

class Square extends Shapes {
  constructor(shapeName, width, height) {
    super(shapeName);
    this.width = width;
    this.height = height;
    this.squareTmp = `<rect ${shapeName} width="${width}" height="${height}"/>`;
  }
  render() {
    console.log(this.squareTmp);
  }
}

module.exports = { Shapes, Square };
