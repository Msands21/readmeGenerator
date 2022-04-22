// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    message: 'What is your GitHub Username?',
    name: 'userName'
    }, {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
    }, {
    type: 'input',
    message: 'What is your projects name?',
    name: 'title'
    }, {
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'description'
    }, {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    }, {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'command'
    }, {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'userRepo'
    }, {
    type: 'input',
    message: 'Who contributed to the repo?',
    name: 'contributors'
    }, 
];


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log (data);
    var fileContent = generateMarkdown(data);
    writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;
