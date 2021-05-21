"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(make, vehicleName, color, mfgYear, wheels, seats, tyreSize) {
        if (make === void 0) { make = ""; }
        if (vehicleName === void 0) { vehicleName = ""; }
        if (mfgYear === void 0) { mfgYear = new Date().getFullYear(); }
        if (wheels === void 0) { wheels = 4; }
        if (seats === void 0) { seats = 5; }
        if (tyreSize === void 0) { tyreSize = 14; }
        this.make = make;
        this.vehicleName = vehicleName;
        this.color = color;
        this.mfgYear = mfgYear;
        this.wheels = wheels;
        this.seats = seats;
        this.tyreSize = tyreSize;
        this.transmission = "automatic";
    }
    Object.defineProperty(car.prototype, "transmissionControl", {
        set: function (transmission) {
            this.transmission = transmission;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SUV.prototype.defineSeats = function (numberOfSeats) {
        if (numberOfSeats === void 0) { numberOfSeats = 7; }
        this.seats = numberOfSeats;
        return true;
    };
    SUV.prototype.defineTyreSize = function (size) {
        if (size === void 0) { size = 18; }
        this.tyreSize = size;
        return true;
    };
    return SUV;
}(car));
var gravitas = new SUV("TATA", "gravitas", "black");
gravitas.defineSeats(8);
gravitas.defineTyreSize(22);
gravitas.transmissionControl = "manual";
console.log(gravitas);
//# sourceMappingURL=13-abstract-class.js.map