class Shape {
  constructor(text, textColor, shape, shapeColor) {
    //answers["initials"], answers["textColor"], answers["shape"], answers["shapeColor"]
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Square extends Shape {
  contructor(text, textColor, shape, shapeColor) {}
  render() {
    return `<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="300" height="200" fill="${this.shapeColor}" />
  <text font-weight="bold" font-size="6em" fill="${this.textColor}" x="150" y="100">${this.text}</text>
</svg>`;
  }
}

class Triangle extends Shape {
  contructor(text, textColor, shape, shapeColor) {}
  render() {
    return `<svg
      version="1.1"
      baseProfile="full"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text font-weight="bold" font-size="6em" fill="${this.textColor}" x="85" y="120">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  contructor(text, textColor, shape, shapeColor) {}
  render() {
    return `<svg
    version="1.1"
    baseProfile="full"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
    <text font-weight="bold" font-size="6em" fill="${this.textColor}" x="85" y="120">${this.text}</text>
  </svg>`;
  }
}

module.exports = { Square, Circle, Triangle };
