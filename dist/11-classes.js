"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.depType = "";
    }
    Department.prototype.describe = function () {
        console.log(this.name + " department is created!");
    };
    Department.prototype.addEmployee = function (employeeName) {
        this.employees.push(employeeName);
    };
    Object.defineProperty(Department.prototype, "departmentType", {
        get: function () {
            console.log("department type is retrieved");
            return this.depType;
        },
        set: function (depType) {
            this.depType = depType;
            console.log("department type is defined");
        },
        enumerable: false,
        configurable: true
    });
    Department.listAllEmployees = function (dep) {
        return dep.employees;
    };
    return Department;
}());
var accountsDept = new Department("dep-1001", "Accounts");
accountsDept.departmentType = "finance";
accountsDept.describe();
console.log(accountsDept.departmentType); //class get method is triggered
accountsDept.addEmployee({ name: "shibu", age: 10, expertise: "it" });
// accountsDept.employees[1] = "Alexis"; // Not allowed as employees is a private property.
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name) {
        return _super.call(this, "IT-" + id, name) || this;
    }
    ITDepartment.prototype.addEmployee = function (employeeName) {
        this.employees.push(employeeName);
    };
    return ITDepartment;
}(Department));
var its = new ITDepartment("1001", "ITS");
var zorro = new ITDepartment("1002", "ZORRO");
console.log(its);
console.log(zorro);
zorro.addEmployee("shibu");
zorro.addEmployee("alexis");
zorro.addEmployee("suresh");
console.log(Department.listAllEmployees(zorro));
//# sourceMappingURL=11-classes.js.map