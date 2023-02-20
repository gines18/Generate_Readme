import inquirer from 'inquirer';
import fs from "fs/promises";

let {description} = await inquirer 
.prompt([

   
      {
          type: 'input',
          name: 'description',
          message: "Write a description of your project",
        }
      
])

let readmeText =
`# Project Description
${description}

`
fs.writeFile("README.md", readmeText)
