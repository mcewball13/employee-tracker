const {
    viewDeptFunc,
    addDeptFunc,
    viewRoleFunc,
    viewEmpFunc,
    addRoleFunc,
    addEmpFunc,
    exitFunc,
    updEmpRoleFunc,
} = require("../data/allFunctions");

function verifyAnswer(selectedAction, initFunc) {
    switch (selectedAction) {
        case "viewDept":
            viewDeptFunc(selectedAction, initFunc);
            break;
        case "viewRole":
            viewRoleFunc(selectedAction, initFunc);
            break;
        case "viewEmp":
            viewEmpFunc(selectedAction, initFunc);
            break;
        case "addDept":
            addDeptFunc(selectedAction, initFunc);
            break;
        case "addRole":
            addRoleFunc(selectedAction, initFunc);
            break;
        case "addEmp":
            addEmpFunc(selectedAction, initFunc);
            break;
        case "updateEmpRole":
            updEmpRoleFunc(selectedAction, initFunc);
            break;
        case "exit":
            exitFunc()
            break;

        default:
            break;
    }
}

module.exports = verifyAnswer;
