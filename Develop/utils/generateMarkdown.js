// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  //use if else statement
  // if (!y) {
    // console.log('y is not provided');
    // return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
  // }
  // console.log('y = ', y);
  // return `\nThe area of the rectangle is ${x * y} sq units`;
//  ;

//.then((resolved) => console.log(resolved))
//.catch((err) => console.error(err));

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

  ${data.installation} special steps needed for installation. 

  ## Usage

  Here is the link to the page: ${data.github}

  ## Credit

  Technologies Used:
  ${data.credit}

  ## Collaborators

  ${data.contributors}

  ## License

  ${renderLicenseLink(data.license)}

  ## How to Contribute

  If you would like to contribute to this application you can contact the developer ${data.email}.

  ## Tests
  
  ${data.testing}

`;
}

module.exports = generateMarkdown;
