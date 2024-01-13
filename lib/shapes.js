class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.preamble = `<svg
    version="1.1"
    baseProfile="full"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
    <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Indie+Flower|Gamja+Flower');</style>
    </defs>`;
  }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        //this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color.toLowerCase();
    }
  render() {
    return `${this.preamble}
    <rect width="300" height="200" fill="${this.shapeColor}" />
    <text dominant-baseline="middle" 
    text-anchor="middle" 
    font-weight="bold" 
    font-size="16em" 
    font-family="Gamja Flower"
    fill="${this.textColor}" 
    x="50%" 
    y="55%">
    ${this.text}
    </text>
    </svg>`;
  }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        //this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color.toLowerCase();
    }
  render() {
    return `${this.preamble}
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text dominant-baseline="middle" 
    text-anchor="middle" 
    font-weight="bold" 
    font-size="10em" 
    font-family="Gamja Flower"
    fill="${this.textColor}" 
    x="50%" 
    y="60%">
    ${this.text}
    </text> 
    </svg>`;
  }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
       // this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color.toLowerCase();
    }
  render() {
    return `${this.preamble}
    <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
    <text dominant-baseline="middle" 
    text-anchor="middle" 
    font-weight="bold" 
    font-size="10em" 
    font-family="Gamja Flower"
    fill="${this.textColor}" 
    x="50%" 
    y="50%">
    ${this.text}
    </text>
    </svg>`;
  }
}

module.exports = { Square, Circle, Triangle };
