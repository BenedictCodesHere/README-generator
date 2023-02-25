const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const generateLicenseBadge = require("./utils/generateLicenseBadge");


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Title:',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Usage:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero', 'Eclipse', 'GNU Affero', 'GNU General', 'GNU Lesser', 'Mozilla Public', 'The Unlicense', 'None'],
      },
      {
        type: 'input',
        message: 'Contributing:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Github username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Contact email address:',
        name: 'email',
      },
      

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully written to README.md!'));
};

// function to create the license badge


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      response.licenseBadge = generateLicenseBadge(response.license);
      let text = generateMarkdown(response);
      writeToFile('README.md', text)
    }
    
    )

};

// function call to initialize program
init();
