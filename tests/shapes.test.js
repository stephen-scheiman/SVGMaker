const { Square, Circle, Triangle } = require("../lib/shapes");

describe('Triangle', () => {
    it('should Pass if triangle object accepts a setColor() request and renders', () => {
        const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(expect.stringContaining('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'));
    })
});

describe('Square', () => {
    it('should Pass if square object accepts a setColor() request and renders', () => {
        const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual(expect.stringContaining('<rect width="300" height="200" fill="blue" />'));
    })
});

describe('Circle', () => {
    it('should Pass if circle object accepts a setColor() request and renders', () => {
        const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual(expect.stringContaining('<circle cx="150" cy="100" r="90" fill="blue" />'));
    })
});