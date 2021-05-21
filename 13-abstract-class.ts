type transmission = "manual" | "automatic";
abstract class car{
    protected transmission:transmission = "automatic";

    constructor(
        protected make:string = "",
        protected vehicleName:string = "",
        protected color: "black" | "white" | "red" | "grey",
        protected mfgYear:number = new Date().getFullYear(),
        private readonly wheels:number = 4,
        protected seats:number = 5,
        protected tyreSize:number = 14
        ){
    }

    abstract defineTyreSize(size:number):boolean;
    abstract defineSeats(numberOfSeats:number):boolean;
    
    public set transmissionControl(transmission:"manual" | "automatic") {
        this.transmission = transmission;
    }
    
}

class SUV extends car{

    defineSeats(numberOfSeats:number = 7){
        this.seats = numberOfSeats;
        return true;
    }

    defineTyreSize(size:number = 18){
        this.tyreSize = size;
        return true;
    }
}

var gravitas = new SUV("TATA", "gravitas","black");
gravitas.defineSeats(8);
gravitas.defineTyreSize(22);
gravitas.transmissionControl = "manual";

console.log(gravitas);