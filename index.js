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
            console.log(team)
        })
    }

    function createTeamMember(){

    }

    function generateEngineer() {

    }

    function generateIntern() {

    }

    function generateTeamHTML(){

    }

    generateManager();
  }

  init();