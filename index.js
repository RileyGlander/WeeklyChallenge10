const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const questions = [
  {
    type: 'input',
    name: 'characters',
    message: 'What three characters do you want to use?',
    validate: (input) => input.length <= 3
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want your text to be?'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want to use?',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want your shape to be?'
  }
];

function logoGenerate(data) {
  const { characters, textColor, shape, shapeColor } = data;
  const shapeInstance = new (eval(shape))();
  shapeInstance.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200">
      ${shapeInstance.render()}
      <text x="150" y="100" fill="${textColor}" text-anchor="middle">${characters}</text>
    </svg>
  `;

  return svgContent;
}

function writeToFile(fileName, data) {
  const content = logoGenerate(data);
  fs.writeFile(fileName, content, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Generated logo.svg');
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const fileName = 'logo.svg';
    writeToFile(fileName, data);
  });
}

init();
