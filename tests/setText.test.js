const { Square, Circle, Triangle } = require("../lib/shapes");

describe('Triangle', () => {
    it('should Pass if triangle object accepts a setText() request and renders', () => {
        const shape = new Triangle();
shape.setText("TXT");
expect(shape.render()).toEqual(expect.stringContaining('TXT'));
    })
});

describe('Square', () => {
    it('should Pass if square object accepts a setColor() request and renders', () => {
        const shape = new Square();
shape.setText("TXT");
expect(shape.render()).toEqual(expect.stringContaining('TXT'));
    })
});

describe('Circle', () => {
    it('should Pass if circle object accepts a setColor() request and renders', () => {
        const shape = new Circle();
shape.setText("TXT");
expect(shape.render()).toEqual(expect.stringContaining('TXT'));
    })
});