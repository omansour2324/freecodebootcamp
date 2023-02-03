export interface User {
    name : string;
    age?: number;
    id: number;
    email: string;
}

//To make a class sharable
export interface Login {
    login(): User;
}

interface Employees extends User {
    salary: number;
}

let user : User = { id:1, name: "John", email: "" }
let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

//object destruction
let { name, email} = user;
console.log(name);
console.log(email);

let [user1, user2, ...restUsers]: User[] = [
    { name: "John", id: 1, email: ""},
    { name: "John1", id: 2, email: ""},
    { name: "John2", id: 3, email: ""},
    { name: "John3", id: 4, email: ""}
]

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);
console.log(result);

//decorators
//they a part of typescript. it is something for me to research. 



