const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./genhtml/generateHTML');
const jest = require('jest')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');



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
        message: 'What is the enginners github?',
        name: 'github',
    },


];
const questionsIntern = [{
        type: 'input',
        message: 'Engineers Name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Intern ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Engineers email',
        name: 'email',
    },

    {
        type: 'input',
        message: 'school?',
        name: 'school',
    },
];

function startApp() {

    createManager()
}
let employees = [];

function createManager() {
    inquirer.prompt(questionsManager)

    .then(
        function(data) {
            const manager = new Manager(data.name, data.id, data.email, data.OfficeNumber)
            employees.push(manager);
            //push each employee to employees array on line 86
            addTeamMember()

            console.log(data)
        }
    )
}

function addTeamMember() {
    inquirer.prompt([{
            type: 'list',
            message: 'next employee',
            name: 'nextEmployee',
            choices: ['enginneer', 'intern', 'finish']
        }])
        .then(
            function(data) {
                if (data.nextEmployee == 'engineer') {
                    createEnginner()
                } else if (data.nextEmployee == 'intern') {
                    createIntern()

                } else {
                    writeToHtml();
                }
            }
        )
}


function init() {
    startApp()
}
init()