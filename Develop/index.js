// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Let Template be an empty string you can fill via responses to your array of questions
let $template = ``;

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Any Licensing Agreements?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the Contribution Guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any Tests?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any Questions?',
    },
])
// Receive response from questions then manipulate:
.then(function generateMarkdown(response) {
    // Create template for Readme
    // let $template = ``;
    $template += `# ${response.title}\n\n`;
    $template += `### Table of Contents \n\n- [description](#description)\n- [installation](#installation)\n- [usage](#usage)\n- [license](#license)\n- [contribution](#contribution)\n- [tests](#tests)\n- [questions](#questions)\n-`;
    $template += `## Description\n\n${response.description}\n\n`;
    $template += `## Installation\n\n${response.installation}\n\n`;
    $template += `## Usage Information\n\n${response.usage}\n\n`;
    $template += `## Licensing Agreement\n\n${response.license}\n\n`;
    $template += `## Contributing\n\n${response.contribution}`;
    $template += `## Tests\n\n${response.tests}`;
    $template += `## Questions?\n\nReach out to me via ${response.question} if you have any questions for me!`;
    }
)}

// TODO: Create a function to write README file
let init = () => {
    questions()
    .then((response) => fs.writeFile('ReadmeGenerated.md', generateMarkdown(response)))
    .then(() => console.log('Successfully wrote ReadMe.md'))
    .catch((err) => console.log(err))
}
// module.exports = generateMarkdown;

// fs.writeFile('ReadMe.md', generateMarkdown, function (err) {
//     if (err) {
//         console.log(err);
//     }
// }),

// // TODO: Create a function to initialize app
// function init(appStart) {
//     appStart = `node index.js`
// },

// Function call to initialize app
init();
