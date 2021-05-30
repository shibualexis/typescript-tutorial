"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.depType = "";
    }
    describe() {
        console.log(this.name + " department is created!");
    }
    addEmployee(employeeName) {
        this.employees.push(employeeName);
    }
    set departmentType(depType) {
        this.depType = depType;
        console.log("department type is defined");
    }
    get departmentType() {
        console.log("department type is retrieved");
        return this.depType;
    }
    static listAllEmployees(dep) {
        return dep.employees;
    }
}
let accountsDept = new Department("dep-1001", "Accounts");
accountsDept.departmentType = "finance";
accountsDept.describe();
console.log(accountsDept.departmentType); //class get method is triggered
accountsDept.addEmployee({ name: "shibu", age: 10, expertise: "it" });
// accountsDept.employees[1] = "Alexis"; // Not allowed as employees is a private property.
class ITDepartment extends Department {
    constructor(id, name) {
        super("IT-" + id, name);
    }
    addEmployee(employeeName) {
        this.employees.push(employeeName);
    }
}
let its = new ITDepartment("1001", "ITS");
let zorro = new ITDepartment("1002", "ZORRO");
console.log(its);
console.log(zorro);
zorro.addEmployee("shibu");
zorro.addEmployee("alexis");
zorro.addEmployee("suresh");
console.log(Department.listAllEmployees(zorro));
//# sourceMappingURL=11-classes.js.map