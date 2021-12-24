// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// If there is no license, return an empty string
function renderLicenseBadge(license){
  const badge = '';
  if (license === 'MIT'){
    badge = '![Github License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  }else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }else{
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licensePart = '';
  if(license === 'MIT'){
    licensePart = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'Apache 2.0'){
    licensePart = 'http://www.apache.org/licenses/LICENSE-2.0'
  }else if (license === 'GPL v3.0'){
    licensePart = 'https://www.gnu.org/licenses'
  }else{
    licensePart = ''
  }
  return licensePart;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = ''
  if (license === 'None'){
    section = ''
  } else{
    section = `license: ${license}`
  }
  return section;
}

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
