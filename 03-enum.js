"use strict";
exports.__esModule = true;
// ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["EMPLOYEE"] = 2] = "EMPLOYEE";
})(Role || (Role = {}));
;
var person2 = {
    name: "Shibu",
    age: 38,
    role: Role.ADMIN
};
