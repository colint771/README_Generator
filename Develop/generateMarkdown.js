// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
        return ' ';
    }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
        return ' ';
    }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return ` `;
    } else {
        return ' ';
    }
}

// function that return license in table of contents
function renderLicenseTOC(license) {
    if (license !== 'no license') {
        return `* [License](#license)`;
    } else {
        return ' ';
    }
}

//function for returning a message for not wanting contributors
function renderContributingSection(confirmContributers, data) {
    if (!confirmContributers) {
      return `
    Thank you for your interest contributing; however, right now, I will not be accepting outside contributions.
      `;
    } else {
      return `
    ${data}
      `;
    }
  }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
