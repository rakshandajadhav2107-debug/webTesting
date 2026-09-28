/*Create an object called employee with:

name
id
department
salary

Use your own values.

Then:

Access and print the employee's name using dot notation.
Access and print the employee's department using bracket notation.
Print the salary.
*/

let employee ={
    name : "Ramesh",
    id : 1001,
    department : "IT", 
    salary : 20000

};
employee.id = 2001;
console.log(employee.name);
console.log(employee['department']);
console.log(employee.salary);
console.log(employee.id);
console.log('age' in employee);
console.log('id' in employee);

for(let x in employee){
    console.log(employee[x]);
};