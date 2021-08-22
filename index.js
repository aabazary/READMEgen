// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Questions from Demo Video of HW(from class video)

const questions = [{
    //username
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    //email
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address? ',
    },
    //project name
    {
        type: 'input',
        name: 'name',
        message: 'What is your project\'s name?',
    },
    //badges
    {
        type: 'checkbox',
        name: 'badges',
        message: 'What badges do you want?',
        choices: ['HTML5-Badge', 'TailwindCSS', '![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)', '![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)' ]
    },
    //project description
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    //licenses
    {
        type: 'list',
        name: 'licenses',
        message: 'What kind of license should your project have?(Use arrow keys)',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3', 'none']

    },
    //dependencies
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?(npm i)',

    },
    //tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? (npm test)',
    },
    //instructions
    {
        type: 'input',
        name: 'instructions',
        message: 'What does the user need to know about using the repo?',
    },
    //contributions
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
    },
];


// Structure of the layout for the README 
const generateREADME = (answers) => 
`# <ins>${answers.name}</ins>
${answers.badges}
![](https://img.shields.io/badge/${answers.licenses}%20License-blue?style=flat-square)
## Description
${answers.description}
## <ins>Table of Contents</ins>
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## <ins>Installation</ins>
${answers.dependencies}
## <ins>Usage</ins>
${answers.instructions}
## <ins>License</ins>
This project is covered under ${answers.licenses}
## <ins>Features</ins>
## <ins>How to Contribute
${answers.contributions}
## <ins>Tests</ins>
${answers.tests}
## <ins>Questions</ins>
Contact ${answers.name} at ${answers.email}. Github link: https://github.com/${answers.username}
`;


function convertBadges(answers){
    console.log('before2', answers)
    let badges = JSON.stringify(answers);
    console.log(badges)
    console.log(typeof badges)
    badges.replace('HTML5-Badge', '![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)')
    badges.replace('TailwindCSS', '![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)')
    console.log('after2', badges)
}

//Create a function to initialize app. Uses inquirer to ask the questions, and then writes it to a README file.
function init() {
    inquirer
        .prompt(questions)
   
        .then((answers) => {
            console.log('before', answers.badges)
            convertBadges(answers.badges)
            console.log('after', answers.badges)
            const contentREADME = generateREADME(answers);
            
            fs.writeFile('README.md', contentREADME, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        })
};

// Function call to initialize app
init()