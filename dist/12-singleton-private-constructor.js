"use strict";
class singletonExample {
    constructor(name = "instance1") {
        this.name = name;
    }
    static getInstance() {
        if (singletonExample.instance) {
            return this.instance;
        }
        return this.instance = new singletonExample();
    }
}
const singletonObj = singletonExample.getInstance();
console.log(singletonObj.name);
//# sourceMappingURL=12-singleton-private-constructor.js.map