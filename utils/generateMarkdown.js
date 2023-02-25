// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseBadge}

## Description
${data.description}

## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
 

## Installation

${data.installation}

## Usage
${data.usage}

## License

This application is covered by the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}


## Questions
If you have any questions about this application, please find a link to my Github profile and my email below:

![${data.username}](https://github.com/${data.username})

${data.email}

`;
}

module.exports = generateMarkdown;
