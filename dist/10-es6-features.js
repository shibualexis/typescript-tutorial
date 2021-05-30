"use strict";
// Spread operator
let person = { name: "shibu", age: 10 };
let duplicatePerson = Object.assign({}, person);
console.log(duplicatePerson);
let primaryColors = ["red", "blue", "green"];
let allColors = [...primaryColors, "yellow", "violet"];
// Array, Object Destructuring
let [a, b] = [10, 20];
console.log(a);
console.log(b);
const add = (...numbers) => {
    document.body.style.backgroundColor = "#fff000";
    return numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue; }, 0);
};
setTimeout(() => add(1, 2, 3, 4, 5), 1000);
//# sourceMappingURL=10-es6-features.js.map