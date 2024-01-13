class Shape {
  constructor(text, textColor, shape, shapeColor) {
    //answers["initials"], answers["textColor"], answers["shape"], answers["shapeColor"]
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Square extends Shape {}

class Triangle extends Shape {}

class Circle extends Shape {
  contructor(text, textColor, shape, shapeColor) {}
  render() {
    console.log(
      `${this.text} ${this.textColor} ${this.shape} ${this.shapeColor}`
    );
    return `<svg
    version="1.1"
    baseProfile="full"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
  </svg>`
  }
}

module.exports = { Shape, Circle };
