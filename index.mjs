import inquirer from 'inquirer';
import fs from "fs/promises";


let {description, description2, license, title, installation, installation2, usage, questions, contact} = await inquirer 
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
          name: 'questions',
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
`# Project title
${title}

## Description
### What is the purpose of this project?
${description}
### What problem does this project aim to solve?
${description2}

## Choose license
${generateLicense(license)}

## Installation
### What are the system requirements for installing this project?
${installation}
### What are the steps for installing this project?
${installation2}

## Questions
### Where can I go if I have any questions about this project?
<details>
My github: ${questions}
My email address: ${contact}
</details>

## Usage
### How do I run this project?
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
