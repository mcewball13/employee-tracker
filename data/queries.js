const queries = {
    
    empTableJoined: `SELECT employee.id, employee.first_name, employee.last_name,
    department.name AS dept_name,
    role.title AS title
    
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id`,

    viewRoles: `SELECT * FROM role`,

    viewDept: `SELECT * FROM department`,

    viewEmp: `SELECT * FROM employee`,

    insertDept: `INSERT INTO department SET ?;`


    
}

module.exports = queries;