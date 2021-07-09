const addQuestions = {
    deptQuestions: [
        {
            type: "input",
            name: "roleNameInputVal",
            message: "What is the name of the new Role?",
        },
        {
            type: "input",
            name: "roleSalaryInputVal",
            message: "What is the salary for the new Role?",
        },
        {
            type: "input",
            name: "roleDeptInputVal",
            message:
                "What is the department ID of the new Role? (see table above)",
        },
    ],
    empQuestions: [
        {
            type: "input",
            name: "empFNInputVal",
            message: "What is the employee's first name?",
        },
        {
            type: "input",
            name: "empLNInputVal",
            message: "What is the employee's last name?",
        },
        {
            type: "input",
            name: "empRoleInputVal",
            message: "What is the employee's role id? (see table above)",
        },
        {
            type: "input",
            name: "empManInputVal",
            message: "Who is the employee's manager? (input by manager's id)",
        },
    ],
};

module.exports = addQuestions;
