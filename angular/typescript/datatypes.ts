//Datatypes: Typescript supports datatypes
//Data Inference: Typescript can infer the type

let lname: string;
lname = "Santosh";
let newName = lname.toUpperCase();
console.log(newName);

let age: number;
age = 25;
age = 25.5;

let dob = "25";
let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];
empList = ["Santosh", "Santosh1", "Santoash2"];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 2);
console.log(results);

let num = numList.find((num) => num === 2);
console.log(num);

let emp = empList.find((emp) => emp === "Santosh");
console.log(emp);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

const enum Color {
  Red,
  Green,
  Blue,
}
let c = 2;

//tuples
let swapNums: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNums = swapNumbers(10, 20);
swapNums[0];

//Avoid use of any, it turn off type safety
let department: any;
department = "IT";
department = 10;
