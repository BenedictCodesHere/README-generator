const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
function licenseBadge(licenseName){
  switch(licenseName){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU':
      return ``;
      break;
    case 'BSD 2-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
      case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
      case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
      case 'Creative Commons Zero':
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
      case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
      case 'GNU Affero':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
      case 'GNU General':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
      case 'GNU Lesser':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
      case 'Mozilla Public':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
      case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
      case 'none':
      return ``;
      break;
  }
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      response.licenseBadge = licenseBadge(response.license);
      let text = generateMarkdown(response);
      writeToFile('README.md', text)
    }
    
    )

};

// function call to initialize program
init();
