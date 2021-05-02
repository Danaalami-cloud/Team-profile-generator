const inquirer = require('inquirer');
const path = require("path")
const fs = require("fs")
const Intern = require('./Lib/intern');
const Manager = require('./Lib/manager');
const Employee = require('./Lib/employee');
const Engineer = require('./Lib/engineer');
const generateHtml = require("./src/generateHtml"); 

const htmlFileFolder = path.resolve(__dirname, "dist");
const htmlPath = path.join(htmlFileFolder, "team.html");

const team = [];
 
  function init(){

    function generateManager(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your name?',
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
            name: 'office',
            message: 'what is your office number',
        }]).then(answers => {
            const manager = new Manager(answers.name, answers.ID, answers.email, answers.office);
            team.push(manager);
            console.log(team);
            createTeamMember();
        })
    }

    function createTeamMember(){
inquirer.prompt([ {
    type: 'list',
    name: 'choice',
    message: 'What is the role of the employee you want to create next?',
    choices: ["Engineer", "Intern", "None" ]
}]).then(answer => {
    if(answer.choice === "Engineer"){
        generateEngineer();
    } else if (answer.choice === "Intern"){
        generateIntern();
    } else {
        generateTeamHTML();
    }
})
    }

    function generateEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your name?',
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
            message: 'what is your office number',
        }]).then(answers => {
            const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
            team.push(engineer);
            console.log(team);
            createTeamMember();
        })
    }

    function generateIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your name?',
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
            name: 'school',
            message: 'what is your school',
        }]).then(answers => {
            const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
            team.push(intern);
            console.log(team);
            createTeamMember();
        })
    }

    function generateTeamHTML(){
        if(!fs.existsSync(htmlFileFolder)){
            fs.mkdirSync(htmlFileFolder)
        }
        console.log(team, "before being passed")
        fs.writeFileSync(htmlPath, generateHtml(team), "utf-8")
    }

    generateManager();
  }

  init();