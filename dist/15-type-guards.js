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
class Car {
    drive() {
        console.log("Driving a Car");
    }
}
class Truck {
    drive() {
        console.log("Driving a Truck");
    }
    loadCargo() {
        console.log("Loading cargo");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(v) {
    v.drive(); // Common method in both class Car and Truck. So no issues
    // if("loadCargo" in v){
    if (v instanceof Truck) {
        v.loadCargo(); // Uncertainity arise. Hence type guard to be defined. 
    }
}
// ================================================================================
//# sourceMappingURL=15-type-guards.js.map