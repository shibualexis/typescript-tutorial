export{}

type Combinable = string | number;

function add(a:string, b:string):string
function add(a:number, b:string):string
function add(a:string, b:number):string
function add(a:number, b:number):number
function add(a:Combinable, b:Combinable){
    if(typeof a == "string" || typeof b == "string"){// Type guards
        return a.toString() + b.toString();
    }
    return a + b;
}

let fullname = add("Shibu", "Alexis"); // Returns string. Hence string functions can be called.
let len = fullname.length; 
