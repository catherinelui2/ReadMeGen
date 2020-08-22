// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ![](https://img.shields.io/badge/License-${answers.license}-green)
  ![App Demo]()

  # ${answers.title}
  # Description
  ${answers.description}<br>
  ## Table of Contents<br>
  1.[Installation](#Installation)<br>
  2.[Usage](#usage)<br>
  3.[Contributing](#contributing)<br>
  4.[Tests](#tests)<br>
  5.[Questions](#questions)<br>

  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  Feel free to reach via email if you have any questions about this app.
  Email: ${answers.email}<br>
  Github: https://github.com/${answers.github}<br>
  Licensed under ©${answers.license}
  `;
}

module.exports = generateMarkdown;
