// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ![](https://img.shields.io/badge/License-${answers.license}-green)

  ## ${answers.title}
  # Description
  ${answers.description}
  # Table of Contents
  1.Installation
  2.Usage
  3.Contributing
  4.Tests
  5.Questions
  # Installation
  # Usage
  ${answers.usage}
  # Contributing
  ${answers.contributing}
  # Tests
  ${answers.tests}
  # Questions
  Email: ${answers.email}
  Github: https://github.com/${answers.github}
  ©${answers.license}
  `;
}

module.exports = generateMarkdown;
