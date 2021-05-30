"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving Speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 150 });
moveAnimal({ type: "horse", runningSpeed: 100 });
//# sourceMappingURL=16-discriminated-types.js.map