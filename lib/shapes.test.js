const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
  test('should render a circle with the correct SVG string', () => {
    const circle = new Circle();
    const color = "blue"
    circle.setColor(color)
    expect(circle.render()).toEqual(`<circle cx="50" cy="50" r="40" fill="${color}" />`);
  });
});

describe('Square', () => {
  test('should render a square with the correct SVG string', () => {
    const square = new Square();
    const color = "red"
    square.setColor(color)
    expect(square.render()).toEqual(`<rect x="10" y="10" width="80" height="80" fill="${color}" />`);
  });
});

describe('Triangle', () => {
  test('should render a triangle with the correct SVG string', () => {
    const triangle = new Triangle();
    const color = "green";
    triangle.setColor(color)
    expect(triangle.render()).toEqual(`<polygon points="50,10 90,90 10,90" fill="${color}" />`);
  });
});