import inquirer from 'inquirer';
import fs from "fs/promises";

let {description, license, title, instalation, usage} = await inquirer 
.prompt([

   
      {
          type: 'input',
          name: 'title',
          message: "Enter project tite:",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project:",
          },
      {
          type: 'input',
          name: 'instalation',
          message: "Explain the project instalation:",
        },
      {
          type: 'input',
          name: 'usage',
          message: "What is the usage for this project?",
        },
      {
          type: 'input',
          name: 'description',
          message: "Write a description of your project",
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
`# Project title
${title}

# Description
${description}

# Installation
${instalation}

## Choose license
${generateLicense(license)}

## Usage
${usage}

`
fs.writeFile("README.md", readmeText)

function generateLicense(license){
if(license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else if (license === "boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
} else (license === "bsd") 
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";



}
