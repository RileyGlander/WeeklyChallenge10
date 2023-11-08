const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./lib/shapes.js')

const questions = [
{   type: 'input',
    name: 'characters',
    message: 'What three characters do you want use?'
},


{   type: 'input',
    name: 'text-color',
    message: 'What color do you want your text to be?'
},


{   type: 'list',
    name: 'shapes',
    message: 'What shape do you want to use?',
    choices: ['Circle', 'Square', 'Triangle']
},


{   type: 'input',
    name: 'shape-color',
    message: 'What color do you want your shape to be?'
},


]


//Ask Questions
inquirer.prompt([]).then((response) => {
    console.log(response) 
    //Write to file
    // const responseString = 
    // response.characters + 
    // " : " + 
    // response.text-color + 
    // " : " + 
    // response.shapes + 
    // " : " + 
    // response.shape-color
    
    fs.writefile("logo.svg", JSON.stringify(response), (err) => {
        err ? console.log("error", err) : console.log("Success");

        //FUTURE NOTE: LOOK THROUGH PREVIOUS EXERCISES AND FIND CLL TO COPY AND PASTE 
    })
})