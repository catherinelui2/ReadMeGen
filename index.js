const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the Project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please add a brief description of the Project"
        },
        {
            type: "input",
            name: "installation",
            message: "Explain the installation of the Project"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage of the App"
        },
        {
            type: "input",
            name: "contributing",
            message: "How can other developers contribute to your App?"
        },
        {
            type: "list",
            message: "Please choose the license",
            name: "license",
            choices: [
                "MIT",
                "GNU",
                "ISC",
                "Apache"
            ]
        },
        {
            type: "input",
            message: "Please enter test instructions for the application",
            name:"tests"
        },
        {
            type:"input",
            message:"Please enter your email address",
            name:"email"
        },
        {
            type:"input",
            message:"Please enter your Github username",
            name:"github"
        }
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = async () => {
    console.log("Hello");
    try{
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);
        await writeToFileAsync("ReadMe.md", markdown);
        console.log("success");
    }catch (err) {
        console.log(err);
    }
    

}

// function call to initialize program
init();
