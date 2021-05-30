"use strict";
var _a;
let response = {
    name: "shibu",
    age: 10,
    details: { role: "CEO", description: "some desciption comes here" }
};
let resp = response;
let role = (_a = response === null || response === void 0 ? void 0 : response.details) === null || _a === void 0 ? void 0 : _a.role; // Incase details is null, then role will not be accessible. 
//Hence runtime error will not be thrown. 
const somevalue = "";
const isNullOrUndefined = somevalue !== null && somevalue !== void 0 ? somevalue : "DEFAULT"; // This is called Nullish Coalescing operator. 
//This will give a falsy value only when null or undefined. Not for 0 or empty
//# sourceMappingURL=19-optional-chaining-NullishCoalescing.js.map