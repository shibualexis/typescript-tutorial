export{}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a:Combinable, b:Combinable){
    if(typeof a == "string" || typeof b == "string"){// Type guards
        return a.toString() + b.toString();
    }
    return a + b;
}

// ================================================================================

type Employee = {
    name: string,
    dateOfJoining: Date
}

type Admin = {
    name: string,
    privilleges: "add" | "update" | "delete"
}

type UnknownEmployee = Employee | Admin;

function printEmpDetails(emp: UnknownEmployee){
    console.log(emp.name); // No issues
    if("privilleges" in emp){
        console.log(emp.privilleges); // TS is not sure about this existence. Hence we have to check.
    }   
}
// ================================================================================

class Car{
    drive(){
        console.log("Driving a Car");
    }
}

class Truck{
    drive(){
        console.log("Driving a Truck");
    }

    loadCargo(){
        console.log("Loading cargo");
        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v:Vehicle){
    v.drive(); // Common method in both class Car and Truck. So no issues
    // if("loadCargo" in v){
    if(v instanceof Truck){
        v.loadCargo(); // Uncertainity arise. Hence type guard to be defined. 
    }
}
// ================================================================================