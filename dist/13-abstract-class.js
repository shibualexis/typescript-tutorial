"use strict";
class car {
    constructor(make = "", vehicleName = "", color, mfgYear = new Date().getFullYear(), wheels = 4, seats = 5, tyreSize = 14) {
        this.make = make;
        this.vehicleName = vehicleName;
        this.color = color;
        this.mfgYear = mfgYear;
        this.wheels = wheels;
        this.seats = seats;
        this.tyreSize = tyreSize;
        this.transmission = "automatic";
    }
    set transmissionControl(transmission) {
        this.transmission = transmission;
    }
}
class SUV extends car {
    defineSeats(numberOfSeats = 7) {
        this.seats = numberOfSeats;
        return true;
    }
    defineTyreSize(size = 18) {
        this.tyreSize = size;
        return true;
    }
}
var gravitas = new SUV("TATA", "gravitas", "black");
gravitas.defineSeats(8);
gravitas.defineTyreSize(22);
gravitas.transmissionControl = "manual";
console.log(gravitas);
//# sourceMappingURL=13-abstract-class.js.map