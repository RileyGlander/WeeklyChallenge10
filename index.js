const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const questions = [
  {
    type: 'input',
    name: 'characters',
    message: 'What three characters do you want to use?'
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'What color do you want your text to be?'
  },
  {
    type: 'list',
    name: 'shapes',
    message: 'What shape do you want to use?',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shape-color',
    message: 'What color do you want your shape to be?'
  }
];

function logoGenerate(data) {
  const { characters, 'text-color': textColor, shapes, 'shape-color': shapeColor } = data;

  // Generate the SVG content based on the user's input
  let svgContent = `<svg width="300" height="200">`;

  // Add the shape based on the selected shape type
  if (shapes === 'Circle') {
    const circle = new Circle();
    circle.setColor(shapeColor);
    svgContent += circle.render();
  } else if (shapes === 'Square') {
    const square = new Square();
    square.setColor(shapeColor);
    svgContent += square.render();
  } else if (shapes === 'Triangle') {
    const triangle = new Triangle();
    triangle.setColor(shapeColor);
    svgContent += triangle.render();
  }

  // Add the text
  svgContent += `<text x="150" y="100" fill="${textColor}" text-anchor="middle">${characters}</text>`;

  svgContent += `</svg>`;

  return svgContent;
}

function writeToFile(fileName, data) {
  const content = logoGenerate(data);
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log('Generated logo.svg');
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    const fileName = 'logo.svg';
    writeToFile(fileName, data);
  });
}

init();
