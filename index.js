// Write your solution in this file!

const employee = {name: "Bill", streetAddress: "1 Martin St"};

function updateEmployeeWithKeyAndValue (obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}

// console.log(employee);
// console.log(updateEmployeeWithKeyAndValue(employee, "name", "Bob"));

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (obj, key) {
    const removedEmployee = {...obj};
    delete removedEmployee[key];
    return removedEmployee;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key];
    return obj;
}


// console.log(employee);
// destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "9 Martin St");
// console.log(employee);

console.log(destructivelyDeleteFromEmployeeByKey (employee, "streetAddress"));

console.log(employee);