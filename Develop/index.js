// TODO: Include packages needed for this application
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown");

const { default: Choices } = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name:"github",
    message:"What is your github account username?"
  },
  {
    type: "input",
    name:"email",
    message:"What is your email?"
  },
  {
    type: "input",
    name:"Project",
    message:"What is your Project Name?"
  },
  {
    type: "input",
    name:"Description",
    message:"Please describe your project"
  },
  {
    type: "input",
    name:"goal",
    message:"What is your goal in doing this project?"
  },
  {
    type: "list",
    name:"Question",
    message:"What language is needed to complete this challenge?",
    Choices:["javaScript","HTML","CSS","python","none"]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README....")
    writeToFile("README.md", generateMarkdown({inquirerResponses}))
  })
}

// Function call to initialize app
init();
