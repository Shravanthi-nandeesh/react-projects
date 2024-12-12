/***
 * Type inference => Type script has the ability to determine the type from the value which is being assigned.
  * Command to execute the code => tsc 
                               => node datatypes
 */

/***
 * String data type code.
 */

let Name: string;
Name = "Shravanthi";
let newName = Name.toUpperCase();
console.log(newName);


/***
 * number data type code.
 */

let age: number;
age = 25;
age = 25.5;
let dob = "25";
let newAge = parseInt(dob);
console.log(newAge)


/***
 * boolen data type code.
 */

let isvalid: boolean = false;
console.log(isvalid);

/***
 * array data type code. 
 * < value > is called generics.
 * filter() is an array function which filter's the values based on the conditions given inside the filter function. It gives an array value.
 * find() gives the the value if it is present.
 */
// Number array
let emplist: Array<number>; // Or let emplist : number[];
emplist = [1, 2, 3.5];
let result = emplist.filter((num) => num === 2);
console.log(result);
let sum = emplist.reduce((acc, num) => acc + num);
console.log(sum, "reduce array function...")
let sumreduceRight = emplist.reduceRight ((acc, num)=>acc + num);
console.log(sumreduceRight , "reduceRight array function... ");


// String array
let stringemplist: Array<string>;
stringemplist = ["1", "3", "6"];
console.log(stringemplist); 

/***
 * enum data type code.
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * TS allows to declare enum as const.
 */

const enum Color {
    Red=1,
    Green,
    Yellow
}
let colour: Color = Color.Yellow;
console.log(colour,"c value");
let colourDirectAccess = Color.Yellow;
console.log(colourDirectAccess,"colourDirectAccess")
console.log(typeof(Color.Red),"enum type",Color.Red);

/***
 * tuple data type code.
 * Same as array which is useful. Use it at the place of array more.
 */

let swapnumber : [fnumber : number, snumber :number];
function swapnumberFunciton(num1: number,num2:number): [number,number]{
return [num2, num1];
};

swapnumber = swapnumberFunciton(10,20);
console.log("Swap number : ",swapnumber);

/***
 * any data type code
 * It is used to assign a variable any type of values.
 * Avoid using any data type.
 * 
 */

let department : any;
department = "IT";
department = 10;