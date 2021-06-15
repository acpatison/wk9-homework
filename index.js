// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = async () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Description of the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will this usage be for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Any Licensing Agreements?',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
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
]);
}

// Async function using util.promisify 
const init = async () => {
  try {
      // Ask user questions and generate responses
      const answers = await questions();
      const generateText = generateMarkdown(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./myREADME.md', generateText);
      console.log(`Successfully wrote your README.md to a file`);
  }   catch(err) {
      console.log(err);
  }
}

init();  




// let init = async () => {
//         await questions();
//         // const wholeReadMe = writeReadMe(response)
//         // await writeReadMe();
//         const fs = require(`fs`);
//         fs.writeFile('./myREADME.md', wholeReadMe, (err) => {
//             if (err) throw (err);
//         })
//         return wholeReadMe;
//     }
    
    // .then((response) => fs.writeFile('ReadmeGenerated.md', wholeReadMe));
    // .then(() => console.log('Successfully wrote ReadMe.md'))
    // .catch((err) => console.log(err))
// init();
    








// // TODO: Create a function to initialize app
// function init(appStart) {
//     appStart = `node index.js`
// },

// Function call to initialize app

