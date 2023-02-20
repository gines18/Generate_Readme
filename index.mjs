import inquirer from 'inquirer';
import fs from "fs/promises";

let {description, description2, license, title, installation, installation2, usage, url, contact, tests, contributing} = await inquirer 
.prompt([
      {
          type: 'input',
          name: 'title',
          message: "What is your project title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "What is the purpose of this project?",
          },
        {
            type: 'input',
            name: 'description2',
            message: "What problem does this project aim to solve?",
          },
      {
          type: 'input',
          name: 'installation',
          message: "What are the system requirements for installing this project?",
        },
      {
          type: 'input',
          name: 'installation2',
          message: "What are the steps for installing this project?",
        },
      {
          type: 'input',
          name: 'usage',
          message: "What is the usage for this project?",
        },
      {
          type: 'input',
          name: 'tests',
          message: "Are there any known issues or bugs with this project?",
        },
      {
          type: 'input',
          name: 'contributing',
          message: "How can I contribute to this project?",
        },
      {
          type: 'input',
          name: 'url',
          message: "Enter your github username in case user have any questions about project:",
        },
      {
          type: 'input',
          name: 'contact',
          message: "My email address:",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['Apache', 'Boost', 'BSD'],
            filter(val) {
              return val.toLowerCase();
            },
          },
])

let readmeText =
`
Table of content:
[Project title](#Project-title)
[License](#License)
[Description](#Description)
[Instalation](#Instalation)
[Usage](#Usage)
[Tests](#Tests)
[Contributing](#Contributing)
[Questions](#Questions)

# Project title
${title}

## License
${generateLicense(license)}

## Description
### What is the purpose of this project?
${description}
### What problem does this project aim to solve?
${description2}

## Installation
### What are the system requirements for installing this project?
${installation}
### What are the steps for installing this project?
${installation2}

## Usage
### How do I run this project?
${usage}

## Tests
### Are there any known issues or bugs with this project??
${tests}

## Contributing
### How can I contribute to this project?
${contributing}

## Questions
Where can I go if I have any questions about this project?
My github: www.github.com/${url}
My email address: ${contact}

`
fs.writeFile("README.md", readmeText)

function generateLicense(license){
if(license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + " The Apache License is a permissive open-source license that allows users to use, modify, and distribute software licensed under the Apache License, even for commercial purposes. It is one of the most widely used open-source licenses and is popular among developers and organizations that value permissive licensing.";
} else if (license === "boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" + " The Boost Software License is a permissive open-source license that allows users to use, modify, and distribute software licensed under the Boost License, with very few restrictions. It is named after the Boost C++ Libraries, a set of high-quality, peer-reviewed C++ libraries that are licensed under the Boost License.";
} else (license === "bsd") 
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" + " The BSD License is a permissive open-source license that allows users to use, modify, and distribute software licensed under the BSD License, with very few restrictions. It is named after the Berkeley Software Distribution, a Unix operating system developed at the University of California, Berkeley.";

}
