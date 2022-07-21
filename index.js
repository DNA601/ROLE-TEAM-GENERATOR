const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./genhtml/generateHTML');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');

const arrTeam = [];