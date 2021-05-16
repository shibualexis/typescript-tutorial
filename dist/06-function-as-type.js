"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function sayHello(name) {
    console.log("Hello " + name);
}
var anotherAdd; // Take 2 number params and return a number type.  
anotherAdd = add;
// anotherAdd = sayHello // Throws error
//Function as a type in the argument
function addAndCallback(a, b, cb) {
    var result = a + b;
    cb(result);
}
function printResult(result) {
    console.log(result);
}
addAndCallback(10, 20, printResult);
//# sourceMappingURL=06-function-as-type.js.map