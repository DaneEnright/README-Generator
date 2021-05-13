// TODO: Include packages needed for this application

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "description",
    message: "Description of application:",
  },
  {
    type: "input",
    name: "installation",
    message: "What installations are needed for your application?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select any licenses that are applicable:",
    choices: ["MIT", "ISC", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Were there any contributors on this application?",
  },
  {
    type: "checkbox",
    name: "credit",
    message: "What technologies were used?",
    choices: ["VS Code", "Github", "Google Chrome", "APIs"],
  },
  {
    type: "input",
    name: "testing",
    message:
      "Are there any tests for the application and if so how do they work?",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // return fs.writeFile("README.md")
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  //inquirer code user will see first question
  inquirer.prompt(questions).then((data) => {
    //figure out how to take those responses and write them to a file
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
