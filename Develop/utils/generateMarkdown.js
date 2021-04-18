// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
} else if (license === "Apache 2.0") {
    $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
} else if (license === "Copyright") {
  $template += `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
} else {
  return console.log(``);
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    licenseLink += `https://opensource.org/licenses/MIT`;
} else if (license === "Apache 2.0") {
    licenseLink += `https://www.apache.org/licenses/LICENSE-2.0`;
} else if (license === "(c)") {
    licenseLink += `https://creativecommons.org/licenses/by/4.0/`;
} else {
  return console.log(``);
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  $template += `## License\n\n[${response.license}]${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
