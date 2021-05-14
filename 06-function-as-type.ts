export{}
function add(a:number, b:number):number{
    return a + b;
}

function sayHello(name:string):void{
    console.log("Hello "+name);
}


let anotherAdd: (a:number,b:number) => number // Take 2 number params and return a number type.  

anotherAdd = add;
// anotherAdd = sayHello // Throws error


//Function as a type in the argument
function addAndCallback(a:number, b:number, cb:(result:number)=>void){
    let result:number = a + b;
    cb(result);
}

function printResult(result:any){
    console.log(result);
}

addAndCallback(10,20,printResult);