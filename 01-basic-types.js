"use strict";
//https://www.typescriptlang.org/docs/handbook/basic-types.html
exports.__esModule = true;
var str = "Hello world";
var num = 10;
var boo = true;
var x = "19";
// Typescript type inference
var person = {
    name: 'Shibu',
    age: 38,
    isMajor: true,
    favColor: ["red", "blue", "green"]
};
for (var _i = 0, _a = person.favColor; _i < _a.length; _i++) {
    var color = _a[_i];
    console.log(color.toUpperCase());
}
// Explicit definition of an object
var person1 = {
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
