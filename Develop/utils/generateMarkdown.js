// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// If there is no license, return an empty string
function renderLicenseBadge(license){}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Project description:
  ${data.description}
  ## Installation:
  - You must install the follwoing for this project to work:
  ${data.installation}
  ## Usage
  ${date.usage}
  ## Features:
  ${data.features}
  ## contributoors:
  ${data.contributors}
  ## Test:
  - Run the following commands in your terminal to test this project.
  ${data.tests}
  ## credits:
  ${data.credits}
  ## Questions:
  Any questions you may have, don't hesitate to reach out, below is my contact info.
  Github: https://github.com/${data.username}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
