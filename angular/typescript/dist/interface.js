"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: "John", email: "" };
let employee = { name: "John", id: 1, email: "", salary: 1000 };
//object destruction
let { name, email } = user;
console.log(name);
console.log(email);
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//decorators
//they a part of typescript. it is something for me to research. 
//# sourceMappingURL=interface.js.map