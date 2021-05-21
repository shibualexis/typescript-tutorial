"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Spread operator
var person = { name: "shibu", age: 10 };
var duplicatePerson = __assign({}, person);
console.log(duplicatePerson);
var primaryColors = ["red", "blue", "green"];
var allColors = __spreadArray(__spreadArray([], primaryColors), ["yellow", "violet"]);
// Array, Object Destructuring
var _a = [10, 20], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    document.body.style.backgroundColor = "#fff000";
    return numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
};
setTimeout(function () { return add(1, 2, 3, 4, 5); }, 1000);
//# sourceMappingURL=10-es6-features.js.map