//1. One way to write a function w/ optional parameters
function add(num1: number, num2: number, num3?:number) : number {
    return num3 ? num1 + num2 : num1 + num2;
}
console.log(add(2, 3));

//2. Another way to write a function
const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;
console.log(sub(2, 3));

//3. Another way to make a function
const mult = function(num1: number, num2: number) : number {
    return num1 * num2;
};
console.log(mult(2, 3));

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

//rest parameters
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));

//generic function

function getItems<Type>(items : Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);


