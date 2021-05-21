"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a == "string" || typeof b == "string") { // Type guards
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmpDetails(emp) {
    console.log(emp.name); // No issues
    if ("privilleges" in emp) {
        console.log(emp.privilleges); // TS is not sure about this existence. Hence we have to check.
    }
}
// ================================================================================
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a Car");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a Truck");
    };
    Truck.prototype.loadCargo = function () {
        console.log("Loading cargo");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(v) {
    v.drive(); // Common method in both class Car and Truck. So no issues
    // if("loadCargo" in v){
    if (v instanceof Truck) {
        v.loadCargo(); // Uncertainity arise. Hence type guard to be defined. 
    }
}
// ================================================================================
//# sourceMappingURL=15-type-guards.js.map