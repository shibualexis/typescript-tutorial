export{}
type Employee = {
    name: string,
    dateOfJoining: Date
}

type Admin = {
    name: string,
    privilleges: "add" | "update" | "delete"
}

type privillegedEmployee = Employee & Admin; // Type intersection

let e1: privillegedEmployee = {
    name: "Shibu",
    dateOfJoining: new Date(),
    privilleges: "add"
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;