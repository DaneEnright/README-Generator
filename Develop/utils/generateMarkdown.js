// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  //use if else statement


  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents (Optional)

  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.github}

  ## Credit

  ${data.credit}

  ## Collaborator

  ${data.contributors}

  ${renderLicenseLink(data.license)}

  ## How to Contribute

  ${data.email}
  
`;
}

module.exports = generateMarkdown;
