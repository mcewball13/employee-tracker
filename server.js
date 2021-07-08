const inquirer = require('inquirer');
const db = require("./db/connection");
const initQuestions = require('./data/initQuestions');
const verifyAnswer = require('./utils/verifyAnswer');


function init () {
    inquirer.prompt(initQuestions).then((answer) => {
        const { initAction } = answer;
        verifyAnswer(initAction, init);
        console.log(`This is the answers from ${initAction}`);
    })
}
// (node:1766) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)

// switch (answers.initOption) {
//     case "viewDEpt": 
//     AllFunctions.viewDept();
//     break; 
// }



// async function simple(answer) {
    
//     const test = await delay(answer);
//     second()
//     return test;
// }
// function second() {
//         console.log(`this is second`);
// }

// function delay(answer) {
//     setTimeout(() => {
//         console.log(`this is from the await in simple ${answer.initOption}`)
        
//     }, 5000);
// }
init()
module.exports = {init: init};
