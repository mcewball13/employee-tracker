const db = require("../db/connection");
const inquirer = require("inquirer");
const { deptQuestions } = require("./allQuestions");

class AllFunctions {
    viewDeptFunc(action, initFunc) {
        const sql = `SELECT * FROM department;`;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }

    viewRoleFunc(action, initFunc) {
        const sql = `SELECT * FROM role;`;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }
    viewEmpFunc(action, initFunc) {
        const sql = `SELECT * FROM employee;`;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }

    addDeptFunc(action, initFunc) {
        inquirer
            .prompt({
                type: "input",
                name: "deptInputVal",
                message: "What is the name of the Department",
            })
            .then((answer) => {
                const sql = `INSERT INTO department SET ?;`;

                db.query(sql, { name: answer.deptInputVal }, (err, result) => {
                    console.table(result);
                    initFunc();
                });
            });
    }

    addRoleFunc(action, initFunc) {
        const sql = `SELECT * FROM role;`;
        db.promise()
            .query(sql)
            .then(([rows, fields]) => console.table(rows))

            .then(
                inquirer.prompt(deptQuestions).then((answer) => {
                    const {
                        roleNameInputVal,
                        roleSalaryInputVal,
                        roleDeptInputVal,
                    } = answer;
                    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
                    const params = [
                        roleNameInputVal,
                        roleSalaryInputVal,
                        roleDeptInputVal,
                    ];

                    db.query(sql, params, (err, result) => {
                        console.table(result);
                        initFunc();
                    });
                })
            ).catch((err) => console.log(err));
    }

    addEmpFunc(action, initFunc) {
        inquirer
            .prompt({
                type: "input",
                name: "empInputVal",
                message: "What is the name of the Employee?",
            })
            .then((answer) => {
                const sql = `INSERT INTO employee SET ?;`;

                db.query(sql, { name: answer.empInputVal }, (err, result) => {
                    console.table(result);
                    initFunc();
                });
            });
    }

    updEmpRoleFunc(action, initFunc) {
        inquirer
            .prompt(
                {
                    type: "input",
                    name: "UpEmpInputVal",
                    message: "What is the name of the Employee?",
                },
                {
                    type: "list",
                    name: "UpEmpInputVal",
                    message: "What is the name of the Employee?",
                }
            )
            .then((answer) => {
                const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
                const params = [answer.UpEmpInputVal];

                db.query(sql, { name: answer.UpEmpInputVal }, (err, result) => {
                    console.table(result);
                    initFunc();
                });
            });
    }
}
module.exports = new AllFunctions();
