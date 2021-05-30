"use strict";
// https://www.typescriptlang.org/docs/handbook/generics.html
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "shibu" }, { age: 10 });
// console.log(mergedObj.name);
// console.log(mergedObj.age);
console.log(mergedObj);
var mergedObj1 = merge(10, 20);
console.log(mergedObj1);
// Constraints in Generics
function merge1(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj2 = merge1({ name: "shibu" }, { age: 10 });
function countAndDescribe(el) {
    var descriptionText = "The parameter passed has no value";
    if (el.length > 0) {
        descriptionText = "The parameter passed has " + el.length + " elements";
    }
    // return {el:el, desc:descriptionText};
    return [el, descriptionText];
}
console.log(countAndDescribe("Shibu Alexis"));
console.log(countAndDescribe([1, 2, 3, 4, 5, 10]));
console.log(countAndDescribe(document.querySelectorAll("*")));
// keyof constraint
function extractKey(obj, key) {
    return "value: " + obj[key];
}
console.log(extractKey({ age: 10, name: "shibu" }, "name"));
//# sourceMappingURL=20-generics.js.map