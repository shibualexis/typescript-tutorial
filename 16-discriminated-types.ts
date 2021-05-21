interface Horse{
    type:"horse",
    runningSpeed: number
}

interface Bird{
    type:"bird",
    flyingSpeed: number
}

type Animal = Horse | Bird;

function moveAnimal(animal:Animal){
     let speed:number;
     switch(animal.type){
        case "bird":
             speed = animal.flyingSpeed;
             break;

        case "horse":
            speed = animal.runningSpeed;
            break;

     }

     console.log("Moving Speed: "+speed);


}

moveAnimal({type:"bird", flyingSpeed:150});
moveAnimal({type:"horse", runningSpeed:100});
