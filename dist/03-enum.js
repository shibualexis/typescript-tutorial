"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["EMPLOYEE"] = 2] = "EMPLOYEE";
})(Role || (Role = {}));
;
const person2 = {
    name: "Shibu",
    age: 38,
    role: Role.ADMIN
};
//# sourceMappingURL=03-enum.js.map