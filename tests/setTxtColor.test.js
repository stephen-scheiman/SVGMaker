const { Square, Circle, Triangle } = require("../lib/shapes");

describe('Triangle', () => {
    it('should Pass if triangle object accepts a setTextColor() request and renders', () => {
        const shape = new Triangle();
shape.setTxtColor("blue");
expect(shape.render()).toEqual(expect.stringContaining('blue'));
    })
});

describe('Square', () => {
    it('should Pass if square object accepts a setTxtColor() request and renders', () => {
        const shape = new Square();
shape.setTxtColor("blue");
expect(shape.render()).toEqual(expect.stringContaining('blue'));
    })
});

describe('Circle', () => {
    it('should Pass if circle object accepts a setTxtColor() request and renders', () => {
        const shape = new Circle();
shape.setTxtColor("Blue");
expect(shape.render()).toEqual(expect.stringContaining('blue'));
    })
});