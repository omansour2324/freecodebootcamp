"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return { id: 1, name: "John", email: "" };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, "John", {
    street: "ABC",
    city: "Banglore",
    state: "Karntake",
    pin: "123",
});
let mike = new Manager(2, "Mike", {
    street: "ABC",
    city: "Banglore",
    state: "Karntake",
    pin: "560073",
});
console.log(john.getNameWithAddress());
console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
john.empId = 200;
console.log(john.empId);
//# sourceMappingURL=class.js.map