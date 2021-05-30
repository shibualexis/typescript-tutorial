"use strict";
//https://www.typescriptlang.org/docs/handbook/basic-types.html
Object.defineProperty(exports, "__esModule", { value: true });
const str = "Hello world";
const num = 10;
const boo = true;
// Typescript type inference
const person = {
    name: 'Shibu',
    age: 38,
    isMajor: true,
    favColor: ["red", "blue", "green"]
};
for (let color of person.favColor) {
    console.log(color.toUpperCase());
}
// Explicit definition of an object
const person1 = {
    name: 'Shibu',
    age: 38,
    isMajor: true,
    favColor: ["red", "blue", "green"],
    role: ["Manager", 1001]
};
// Typescript cannot show type error on certain runtime methods
//Eg 
// person1.role.push("invalid type"); //won't show error
// person1.role[1] = "invalid type"; // show error as it is invalid value assignment
// person1.role[1] = 1; // Valid value assignment
// ------------------------
// Basic Types
// ------------------------
// Boolean
let isDone;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let col = "blue";
col = "red";
// String
let fullname = 'Shibu Alexis';
let age = 37;
let sentence = `Hello, my name is ${fullname}. and my age is ${age}`;
// Array
let list = [1, 2, 3];
let list1 = [1, 2, 3];
// Tuple - When accessing an element with a known index, the correct type is retrieved
let x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
//Enum - Friendly names to sets of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
let colorArr = [Color.Red, Color.Green, Color.Blue]; //[1,2,3]
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Red; //returns 5
let colorArr1 = [Color1.Red, Color1.Green, Color1.Blue]; //[5,6,7]
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 4] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 8] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color1.Red; //returns 5
let colorArr2 = [Color1.Red, Color1.Green, Color1.Blue]; //[4,6,8]
// Any
let notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// Void
function warnUser() {
    console.log("This is my warning message");
}
//  Null and Undefined - Not much else we can assign to these variables!
let u = undefined;
let n = null;
// Never
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// Type assertions - TYPE CASTING IN OTHER LANGUAGES
let someValue = "this is a string";
let strLength = someValue.length;
//# sourceMappingURL=01-basic-types.js.map