/***
 * Agenda
 * 1. Creating interfaces
 * 2. Using interfaces as Types
 * 3. Implementing interfaces
 * 4. Extending interfaces
 * 5. Optional properties
 * 6. Object destructuring
 * 7. Array destructuring
 */

//TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

/*
===============================
Creating interfaces.
===============================
*/

interface student {
    name: string,
    regNumber: number,
    email: string,
    college?: string
}

let student_Val: student = { name: "mike", regNumber: 1, email: "test@gmail.com" }

interface updateInfo extends student {
    address: string,
}

let address_of_Student: updateInfo = { name: "mike", regNumber: 1, email: "test@gmail.com", address: "testing" };

console.log("apended interface", address_of_Student);
//Interfaces method defination.
export interface Login {
    Login(): student;
}


/*
===============================
Object destructuring
Get the values which we need to access
We can also rename the variable name like alias. (name : userName)
===============================
*/

let { name: userName, email }: updateInfo = { name: "mike", regNumber: 1, email: "test@gmail.com", address: "testing" }

/*
===============================
Array destructuring
===============================
*/

let array__: student[] = [{
    name: "mike", regNumber: 1, email: "test@gmail.com"
},
{
    name: "thomas", regNumber: 2, email: "test1@gmail.com"
}]

// Array destructuring
// Base example
/*let [student1,student2,...restStudents]: student[] = [{
    name: "mike", regNumber: 1, email: "test@gmail.com"
},
{
    name: "thomas", regNumber: 2, email: "test1@gmail.com"
},
{
    name: "jakson", regNumber: 3, email: "jakson@gmail.com"
},
{
    name: "wang", regNumber: 3, email: "wang@gmail.com"
}
]
*/

let [...restStudents]: student[] = [{
    name: "mike", regNumber: 1, email: "test@gmail.com"
},
{
    name: "thomas", regNumber: 2, email: "test1@gmail.com"
},
{
    name: "jakson", regNumber: 4, email: "jakson@gmail.com"
},
{
    name: "wang", regNumber: 2, email: "wang@gmail.com"
}
]
console.log(...restStudents);

// Array filter after destructuring

let wang_data = restStudents.filter(student => student.regNumber == 3);
console.log("find the student data of wang", Boolean(wang_data.length != 0));