const inquirer = require('inquirer');
const html = require('./src/html')
const fs = require('fs');

const Manager = require('./Lib/Manager');
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const teamMembers = [];

const createManager = () => {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your Manager?',
    },
      
    {
        type: 'input',
        name: 'id',
        message: "Please, type your the Manager's id number"
      },
    {
        type: 'input',
        name: 'email',
        message: "Enter your Manager's email address",
      },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number for your manager:'
    },
  ])
  .then((answers) => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
    console.log(manager)
    teamMembers.push(manager)
    teamBuilder()
  })
}

const teamBuilder = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'teamChoice',
            message: 'What team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Build Team']

        }
    ])

    .then((answers) => {
        switch(answers.teamChoice){
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;    
            default: 
            buildTeam()
        }
    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Please type the name of the Engineer'

        },
        {
            type: 'input',
            name: 'id',
            message: "Please type the Engineer's id"  
        },
        {
            type: 'input',
            name: 'email',
            message: "Please type the Engineer's email address"
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's Github:",
        }
    ])
    .then((answers) => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
        teamMembers.push(engineer);
        teamBuilder();
    })
}

const createIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please type the name of the Intern'
    
            },
            {
                type: 'input',
                name: 'id',
                message: "Please type the Intern's id"  
            },
            {
                type: 'input',
                name: 'email',
                message: "Please type the Intern's email address"
            },
            {
                type: 'input',
                name: 'school',
                message: "Intern's School:",
            }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        teamBuilder();
    })
}

const buildTeam = () => {
    fs.writeFileSync("./dist/index.html", html(teamMembers))
}

  createManager();

