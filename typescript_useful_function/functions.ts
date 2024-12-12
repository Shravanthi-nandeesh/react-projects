/***
 * Functions Agenda
 * 1. Different ways to write functions.
 * 2. Generic Functions
 * 3. Optional Parameters.
 * 4. Required Parameters.
 * 5. Rest Parameters.
 */

/***
 * Different ways to write functions.
 * add(num1: number, num2: number) is a function
 * : number is a return type
 */

//  1st method Named function.

function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(1, 1));

// 2nd method arrow method / function

const subtract = (num1: number, num2: number): number => num1 - num2;
console.log(subtract(1, 1));

// 3rd method Function expression

const multiply = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiply(1, 6));

/***
 * Generic Functions.
 * Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Generics makes it easier to write reusable code.
 */

function getItems<type>(items :type []):type[]{
    return new Array<type>().concat(items);
}

let concatResult = getItems(["1",2,3,4,5]);
let concatStr = getItems(["a","b"]);
console.log(concatResult,"concatinated result...");
console.log(concatStr,"concat string...")

/***
 * Optional parameters.
 * Take the number if it exists and add it.
 */

function addNumeric(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addNumeric(1, 2));

/***
 * Required Parameters.
 */

const subtractRequiredParam = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;
console.log(subtractRequiredParam(1, 1));

/***
 * Rest Parameters.
 */

function addNumericval(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);

}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(addNumericval(1, 2,...numbers));  // or console.log(addNumericval(1, 2,1, 2, 3, 4, 5, 6, 7, 8)); 