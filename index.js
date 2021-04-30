const inquirer = require('inquirer');
const Intern = require('./Lib/intern');
const Manager = require('./Lib/manager');
const Employee = require('./Lib/employee');
const Engineer = require('./Lib/engineer');
const { title } = require('node:process');
const { type } = require('node:os');
const fs = require('fs');

const generateHTML = (answers) =>

const questions = [{
    type: 'input',
    name: 'role',
    message: 'What is the role of the employee?',
    choices: ['intern','manager','engineer']
},
{
    type: 'input',
    name: 'ID',
    message: 'what is your id?',
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
},
{
    type: 'input',
    name: 'github',
    message: 'what is your github username?',
},
{
    type: 'input',
    name: 'office',
    message: 'what is your office number',
},

],

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('hopefully created index.html!')
    );
  });
