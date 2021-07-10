const db = require("../db/connection");
const inquirer = require("inquirer");
const { deptQuestions, empQuestions } = require("./allQuestions");
const {
    viewRoles,
    empTableJoined,
    insertDept,
    viewDept,
    viewEmp,
} = require("./queries");

class AllFunctions {
    viewDeptFunc(action, initFunc) {
        const sql = `SELECT * FROM department;`;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }

    viewRoleFunc(action, initFunc) {
        const sql = viewRoles;
        db.query(sql, (err, result) => {
            console.table(result);
            initFunc();
        });
    }
    viewEmpFunc(action, initFunc) {
        const sql = empTableJoined;
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
                const sql = insertDept;

                db.query(sql, { name: answer.deptInputVal }, (err, result) => {
                    console.table(result);
                    initFunc();
                });
            });
    }

    addRoleFunc(action, initFunc) {
        const sql = viewDept;
        db.promise()
            .query(sql)
            .then(([rows, fields]) => console.table(rows))

            .then(() => {
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
                });
            })
            .catch((err) => console.log(err));
    }

    addEmpFunc(action, initFunc) {
        const sqlMan = `${empTableJoined} WHERE department.name = 'Management'`;
        const sqlRole = viewDept;
        db.promise()
            .query(sqlMan)
            .then(([rows, fields]) => console.table(rows));
        db.promise()
            .query(sqlRole)
            .then(([rows, fields]) => console.table(rows))

            .then(() => {
                inquirer.prompt(empQuestions).then((answer) => {
                    const {
                        empFNInputVal,
                        empLNInputVal,
                        empRoleInputVal,
                        empManInputVal,
                    } = answer;
                    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
                    const params = [
                        empFNInputVal,
                        empLNInputVal,
                        empRoleInputVal,
                        empManInputVal,
                    ];

                    db.query(sql, params, (err, result) => {
                        console.table(result);
                        initFunc();
                    });
                });
            })
            .catch((err) => console.log(err));
    }

    async updEmpRoleFunc(action, initFunc) {
        try {
            inquirer.prompt(
               {
                    type: "list",
                    name: "UpEmpInputVal",
                    message: "What Employee would you like to update?",
                    choices: await listEmp(),
                },
               {
                    type: "list",
                    name: "UpEmpRoleInputVal",
                    message: "What role would you like for this Employee?",
                    choices: await listRoles(),
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    // .then((answer) => {
    //     const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    //     const params = [answer.UpEmpInputVal];

    //     db.query(sql, { name: answer.UpEmpInputVal }, (err, result) => {
    //         console.table(result);
    //         initFunc();
    //     });
    // });

    exitFunc() {
        process.exit(1);
    }
}
async function listEmp() {
    const sql = viewEmp;
    var listArr = [];
    try {
        await db
            .promise()
            .query(sql)
            .then(([rows, fields]) => {
                for (let i = 0; i < rows.length; i++) {
                    listArr.push(`${rows[i].first_name} ${rows[i].last_name}`);
                }
            });
    } catch (err) {
        console.error(err);
    }
    console.log(`This is the listEmp Function`);
    return listArr;
}

//  async function listRoles() {
    //      const queries = await getSql()
    //      try {
        //          await console.log(`The is inside list Roles ${queries}`)
        //      } catch (err) {
            //          console.error(err);
            //      };
            //     // return rolesArr;
            // }
            async function listRoles () {
                const sql = viewRoles;
                let rolesArr =[];
                try {
                    await db.promise().query(sql).then(([rows, fields]) => {
                        for (let i = 0; i < rows.length; i++) {
                            rolesArr.push(`${rows[i].title}`);
                        }
                    })
                } catch (err) {
                    console.error(err);
                }
                console.log(`This is the list listRoles Function`);
                return rolesArr;
            };
            module.exports = new AllFunctions();
            