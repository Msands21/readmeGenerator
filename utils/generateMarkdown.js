// Packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = `![GitHub license](https://img.shields.io/badge/license-MIT-yellow.svg)`;
  } else if (license === 'APACHE2.0') {
    badge = `![GitHub license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`;
  } else if (license === 'GPL3.0') {
    badge = `![GitHub license](https://img.shields.io/badge/license-GPLv3-blue.svg)`;
  } else if (license === 'BSD 3') {
    badge = `![GitHub license](https://img.shields.io/badge/license-BSD_3--Clause-blue.svg)`;
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'APACHE2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'BSD 3') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license ==='None') {
    licenseSection = ''
  } else {
    `licenseSection = ${license}`
  }  
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ### * [License](#license)
  ### * [Description](#description)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Description
  ### ${data.description}

  ## Installation:
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Contributors
  ### ${data.contributors}

  ## Tests
  ### ${data.tests}

  ## Questions
  ### For further questions, you may reach me at:
  ### GitHub: https://github.com/${data.userName}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
