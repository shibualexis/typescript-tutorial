"use strict";
var singletonExample = /** @class */ (function () {
    function singletonExample(name) {
        if (name === void 0) { name = "instance1"; }
        this.name = name;
    }
    singletonExample.getInstance = function () {
        if (singletonExample.instance) {
            return this.instance;
        }
        return this.instance = new singletonExample();
    };
    return singletonExample;
}());
var singletonObj = singletonExample.getInstance();
console.log(singletonObj.name);
//# sourceMappingURL=12-singleton-private-constructor.js.map