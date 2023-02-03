"use strict";
exports.__esModule = true;
var user = { id: 1, name: "John", email: "" };
var employee = { name: "John", id: 1, email: "", salary: 1000 };
//object destruction
var name = user.name, email = user.email;
console.log(name);
console.log(email);
var _a = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" }
], user1 = _a[0], user2 = _a[1], restUsers = _a.slice(2);
console.log(user1);
console.log(user2);
console.log(restUsers);
var result = restUsers.filter(function (user) { return user.id > 3; });
console.log(result);
//decorators
