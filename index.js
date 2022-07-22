const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./genhtml/generateHTML');
const jest = require('jest')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


// set of questions
const questionsManager = [{
        type: 'input',
        message: 'Managers Name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Managers ID',
        name: 'id',
    },

    {
        type: 'input',
        message: 'Managers email',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Managers office number',
        name: 'OfficeNumber',
    },

];
const questionsEngineer = [{
        type: 'input',
        message: 'Engineers Name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Engineers ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Engineers email',
        name: 'email',
    },

    {
        type: 'input',
        message: 'enginners github?',
        name: 'github',
    },


];
const questionsIntern = [{
        type: 'input',
        message: 'Interns Name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Intern ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'intern email?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Where did they attend school?',
        name: 'school',
    },
];
let employees = []

function startApp() {



    createManager()
}


function createManager() {
    inquirer.prompt(questionsManager)

    .then(
        function(data) {
            const manager = new Manager(data.name, data.id, data.email, data.OfficeNumber)
            employees.push(manager);
            //push each employee to employees array on line 86
            addTeamMember()


        }
    )
}


function createEngineer() {
    inquirer.prompt(questionsEngineer)
        .then(function(data) {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(engineer)
            addTeamMember()
        })
}


function createIntern() {
    inquirer.prompt(questionsIntern)
        .then(function(data) {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employees.push(intern)
            addTeamMember()
        })
}



function addTeamMember() {
    inquirer.prompt([{
            type: 'list',
            message: 'next employee',
            name: 'nextEmployee',
            choices: ['engineer', 'intern', 'finish']
        }])
        .then(
            function(data) {
                if (data.nextEmployee === 'engineer') {
                    createEngineer()
                } else if (data.nextEmployee === 'intern') {
                    createIntern()

                } else if (data.nextEmployee === 'finish') {
                    writeToHTML();
                }
            }
        )
}
//This function will add or finish adding team members


function writeToHTML() {
    const filename = './dis/generateHTML.html'
    const content = generateHTML(employees)

    console.log(content)
    fs.writeFile(filename, content, (err) => {
        err ? console.log(err) : console.log('success')
    })
}




function init() {
    startApp()
}


init();