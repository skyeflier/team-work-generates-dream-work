const inquirer = require('inquirer');

const initialQuestions = [{
    type: 'list',
    choices: ['Manager', 'Engineer', 'Intern'],
    message: 'Please select your role',
    name: 'employee-role',
}]

const managerQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'manager-name',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'manager-id',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'manager-email',
},
{
    type: 'input',
    message: 'Enter your office number',
    name: 'manager-office',
},
];

const engineerQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'engineer-name',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'engineer-id',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'engineer-email',
},
{
    type: 'input',
    message: 'Enter the school you attended',
    name: 'engineer-school',
},
{
    type: 'input',
    message: 'Enter your GitHub username',
    name: 'engineer-github',
},
];

const internQuestions = [{
    type: 'input',
    message: 'Enter your First and Last name',
    name: 'intern-name',
},
{
    type: 'input',
    message: 'Enter your employee ID',
    name: 'intern-id',
},
{
    type: 'input',
    message: 'Enter your email',
    name: 'intern-email',
},
{
    type: 'input',
    message: 'Enter the school you attended',
    name: 'intern-school',
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

function init() {
    inquirer
        .prompt(initialQuestions)
        .prompt(managerQuestions)
        .prompt(engineerQuestions)
        .prompt(internQuestions)
        .then // 

        .then((response) => {
            writeToFile('index.html', generateHTML(response));
        });
}

init();