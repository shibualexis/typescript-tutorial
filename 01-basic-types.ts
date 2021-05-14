//https://www.typescriptlang.org/docs/handbook/basic-types.html

export{}
const str:string = "Hello world";
const num:number = 10;
const boo:boolean = true;
const x:any = "19";

// Typescript type inference
const person = {
    name:'Shibu',
    age:38,
    isMajor:true,
    favColor:["red","blue","green"]
}

for(let color of person.favColor){
    console.log(color.toUpperCase())
}

// Explicit definition of an object
const person1:{
    name:string;
    age:number;
    isMajor:boolean;
    favColor:string[];
    role:[string, number] //Tuple
} = {
    name:'Shibu',
    age:38,
    isMajor:true,
    favColor:["red","blue","green"],
    role:["Manager",1001]
}
// Typescript cannot show type error on certain runtime methods
//Eg 
// person1.role.push("invalid type"); //won't show error
// person1.role[1] = "invalid type"; // show error as it is invalid value assignment
// person1.role[1] = 1; // Valid value assignment
