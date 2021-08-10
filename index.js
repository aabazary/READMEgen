// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input. Questions from Demo Video of HW
const questions = [{
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },

    {
        type: 'email',
        name: 'email',
        message: 'What is your email address? ',

    },

    {
        type: 'input',
        name: 'name',
        message: 'What is your project\'s name?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'What kind of license should your project have?(Use arrow keys)',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3', 'none']

    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?(npm i)',

    },

    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? (npm test)',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateREADME = (answers) => 
`# ${answers.name}
## Description
${answers.description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## License
![](https://img.shields.io/badge/${answers.licenses}%20License-blue?style=flat-square)
## Installation
${answers.dependencies}
## Usage
${answers.instructions}
## Features
## How to Contribute
${answers.contributions}
## Tests
${answers.tests}
## Questions
Contact ${answers.name} at ${answers.email}. Github link: https://github.com/${answers.email}
`;
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const contentREADME = generateREADME(answers);

            fs.writeFile('README.md', contentREADME, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        })
};

// Function call to initialize app
init()