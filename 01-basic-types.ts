//https://www.typescriptlang.org/docs/handbook/basic-types.html

export{}
const str:string = "Hello world";
const num:number = 10;
const boo:boolean = true;



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



// ------------------------
// Basic Types
// ------------------------

// Boolean
let isDone:boolean;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let col: string = "blue";
col = "red";

// String
let fullname:string = 'Shibu Alexis';
let age:number = 37;
let sentence: string = `Hello, my name is ${fullname}. and my age is ${age}`;

// Array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];


// Tuple - When accessing an element with a known index, the correct type is retrieved
let x: [string, number];

x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error


//Enum - Friendly names to sets of numeric values
enum Color {
    Red,
    Green,
    Blue
  }
  let c: Color = Color.Red;
  let colorArr: Array<Color> = [Color.Red, Color.Green, Color.Blue] //[1,2,3]


  enum Color1 {
    Red = 5,
    Green,
    Blue
  }
let c1: Color1 = Color1.Red;//returns 5
let colorArr1: Array<Color1> = [Color1.Red, Color1.Green, Color1.Blue] //[5,6,7]

enum Color2 {
    Red = 4,
    Green = 6,
    Blue = 8
  }
let c2: Color1 = Color1.Red;//returns 5
let colorArr2: Array<Color1> = [Color1.Red, Color1.Green, Color1.Blue] //[4,6,8]


// Any
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)



// Void
function warnUser(): void {
    console.log("This is my warning message");
  }

//  Null and Undefined - Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


// Never
function error(message: string): never {
    throw new Error(message);
  }
  
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }



//  Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error



// Type assertions - TYPE CASTING IN OTHER LANGUAGES

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
