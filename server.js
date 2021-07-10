const inquirer = require('inquirer');
const initQuestions = require('./data/initQuestions');
const verifyAnswer = require('./utils/verifyAnswer');


function init () {
    inquirer.prompt(initQuestions).then((answer) => {
        const { initAction } = answer;
        verifyAnswer(initAction, init);
    })
}

init()
module.exports = {init: init};
