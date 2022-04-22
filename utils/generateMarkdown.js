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
  if (licesnse !=='None') {
    return `\n * [License](#) \n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=='None') {
    return `## License

    This project is licensed under ${license}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
