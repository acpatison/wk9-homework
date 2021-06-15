// TODO: Create a function that returns a license badge based on which license is passed in
// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Questions
✋ Reach out to me via ${answers.questions} if you have any questions for me!
`;
}

module.exports = generateReadme;








// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === "MIT") {
//     $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
// } else if (license === "Apache 2.0") {
//     $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// } else if (license === "Copyright") {
//   $template += `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
// } else {
//   return console.log(``);
// }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "MIT") {
//     licenseLink += `https://opensource.org/licenses/MIT`;
// } else if (license === "Apache 2.0") {
//     licenseLink += `https://www.apache.org/licenses/LICENSE-2.0`;
// } else if (license === "(c)") {
//     licenseLink += `https://creativecommons.org/licenses/by/4.0/`;
// } else {
//   return console.log(``);
// }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   $template += `## License\n\n[${response.license}]${license}`;
// }

// // TODO: Create a function to generate markdown for README
// function GenerateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = GenerateMarkdown;
