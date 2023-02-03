"use strict";
//Datatypes: Typescript supports datatypes
//Data Inference: Typescript can infer the type
let lname;
lname = "Santosh";
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Santosh", "Santosh1", "Santoash2"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results);
let num = numList.find((num) => num === 2);
console.log(num);
let emp = empList.find((emp) => emp === "Santosh");
console.log(emp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2;
//tuples
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
swapNums[0];
//Avoid use of any, it turn off type safety
let department;
department = "IT";
department = 10;
//# sourceMappingURL=datatypes.js.map