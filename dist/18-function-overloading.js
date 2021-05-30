"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a == "string" || typeof b == "string") { // Type guards
        return a.toString() + b.toString();
    }
    return a + b;
}
let fullname = add("Shibu", "Alexis"); // Returns string. Hence string functions can be called.
let len = fullname.length;
//# sourceMappingURL=18-function-overloading.js.map