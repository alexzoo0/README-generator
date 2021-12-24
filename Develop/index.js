// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFiles = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is you title?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else{
                    console.log('please enter a title input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a short paragraph describing your project.",
            validate: description => {
                if (description) {
                    return true;
                }
                else{
                    console.log('please enter a paragraph.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Provide steps on what is required to install to get up and running",
            validate: installation => {
                if (installation) {
                    return true;
                }
                else{
                    console.log('please your installation requirements.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: "Tell us how to get started on the readme generator",
            validate: usage => {
                if (usage) {
                    return true;
                }
                else{
                    console.log('please enter an input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: "who collaborated in your project?",
            validate: credits => {
                if (credits) {
                    return true;
                }
                else{
                    console.log('please enter a paragraph.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "What license do you prefer?",
            choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
            validate: license = () => {
                if (license) {
                    return true;
                }
                else{
                    console.log('please enter a title input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: "Any features in your project?",
            validate: features => {
                if (features) {
                    return true;
                }
                else{
                    console.log('please enter an input or say n/a.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: "what are the guidelines to contribute in your project?",
            validate: contribute => {
                if (contribute) {
                    return true;
                }
                else{
                    console.log('please enter an input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: "how do you test your project?",
            validate: tests => {
                if (tests) {
                    return true;
                }
                else{
                    console.log('please enter an input.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: "what is your Github username?",
            validate: username => {
                if (username) {
                    return true;
                }
                else{
                    console.log('please enter a username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your email?",
            validate: email => {
                if (email) {
                    return true;
                }
                else{
                    console.log('please enter a email');
                    return false;
                }
            }
        },



    ])
}


// TODO: Create a function to initialize app
async function init() {
    try{
        const answers = await questions();
        const generate = generateMarkdown(answers);
        await writeFiles('./generatedREADME.md', generate);
        console.log("sucess, checkout your generatedREADME.md");
    }
        catch(err) {
            console.log(err)
        }
    }


// Function call to initialize app
init();
