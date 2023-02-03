//The ways to import. The first is recommended
import { Login, User } from "./interface";
//import * as UserLogin from './interface'; //creates an alias

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login {
  private id: number;
  protected name: string;
  protected address: Address;

  get empId(): number {
    return this.id;
  }

  set empId(id: number) {
    this.id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  login(): User {
    return { id: 1, name: "John", email: "" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
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
