const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer'); //We don't need Employee class because its information is included in the employee information
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let team = []

const questions = [{
    type: 'list',
    choices: ['Engineer', 'Intern', 'Finished'],
    message: 'Please select your role',
    name: 'employeeRole',
}]

const managerQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'managerName',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'managerId',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'managerEmail',
},
{
    type: 'input',
    message: 'Enter your office number',
    name: 'managerOffice',
},
];

const engineerQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'engineerName',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'engineerId',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'engineerEmail',
},
{
    type: 'input',
    message: 'Enter the school you attended',
    name: 'engineerSchool',
},
{
    type: 'input',
    message: 'Enter your GitHub username',
    name: 'engineerGithub',
},
];

const internQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'internName',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'internId',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'internEmail',
},
{
    type: 'input',
    message: 'Enter the school you attended',
    name: 'internSchool',
},
];

//This function writes a new HTML file 
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    });
}

function managerFunction() {
    inquirer
        .prompt(managerQuestions)
        .then(employee => {
            let manager = new Manager(employee.managerName, employee.managerId, employee.managerEmail, employee.managerOffice)
            team.push(manager)
            return nextQuestion()
        })
}

function engineerFunction() {
    inquirer
        .prompt(engineerQuestions)
        .then(employee => {
            let engineer = new Engineer(employee.engineerName, employee.engineerId, employee.engineerEmail, employee.engineerGithub)
            team.push(engineer)
            return nextQuestion()
        })
}

function internFunction() {
    inquirer
        .prompt(internQuestions)
        .then(employee => {
            let intern = new Intern(employee.internName, employee.interId, employee.internEmail, employee.internSchool)
            team.push(intern)
            return nextQuestion() //Return because we're in a .then question
        })

}

function nextQuestion() {
    inquirer.prompt(questions)
        .then(answer => {
            if (answer.employeeRole === 'Engineer') {
                engineerFunction()
            }
            else if (answer.employeeRole === 'Intern') {
                internFunction()
            }
            else {
                buildTeam()
            }
        })
}

function buildTeam() {
    fs.writeFileSync('team.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    `);

    for (let i = 0; i < team.length; i++) {

        fs.appendFileSync('team.html', `
    <div class="card">
    <h3>Name: ${team[i].name}</h3>
    <p>ID: ${team[i].id}</p>
    <p>Email: ${team[i].email}</p>
</div>
    `)
    }
    fs.appendFileSync('team.html', `
</body>
</html>
    `)
}

function init() {
    managerFunction()
}

init();