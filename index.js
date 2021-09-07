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
        choices: ['HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap', 'Javascript', 'Node.JS', 'Express.JS', 'MySQL', 'Heroku', 'Insomnia' ]
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
${convertBadges(answers.badges)}
## <ins>Description</ins>
${answers.description}
## <ins>Table of Contents</ins>
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## <ins>Installation</ins>
${answers.dependencies}
## <ins>Usage</ins>
${answers.instructions}
## <ins>License</ins>
![](https://img.shields.io/badge/License-${answers.licenses}%20-blue?style=flat-square)
This project is covered under ${answers.licenses}
## <ins>Features</ins>
## <ins>Contributions
${answers.contributions}
## <ins>Tests</ins>
${answers.tests}
## <ins>Questions</ins>
Contact ${answers.name} at ${answers.email}. Github link: https://github.com/${answers.username}
`;


function convertBadges(answers){
    let badges = JSON.stringify(answers);
    badges = badges.replace('"HTML5"', '![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)');
    badges = badges.replace('"TailwindCSS"', '![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)');
    badges = badges.replace('"CSS3"', '![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)');
    badges = badges.replace('"Node.JS"', '![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)');
    badges = badges.replace('"Javascript"', '![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)');
    badges = badges.replace('"Bootstrap"', '![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)');
    badges = badges.replace('"Express.JS"', '![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)');
    badges = badges.replace('"MySQL"', '![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)');
    badges = badges.replace('"Heroku"', '![](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)');
    badges = badges.replace('"Insomnia"', '![](https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)');
    badges = badges.replace(/,/g,'');
    badges = badges.replace('[','');
    let segdab = badges.split('').reverse().join('');
    segdab = segdab.replace(']',''); 
    badges = segdab.split('').reverse().join('');
    
    return badges;
}


//Create a function to initialize app. Uses inquirer to ask the questions, and then writes it to a README file.
function init() {
    inquirer
        .prompt(questions)
   
        .then((answers) => {
            const contentREADME = generateREADME(answers);
            
            fs.writeFile('newREADME.md', contentREADME, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        })
};

// Function call to initialize app
init()
