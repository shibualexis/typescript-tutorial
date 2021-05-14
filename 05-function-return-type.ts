export{}
function add(a:number, b:number):number{
    return a + b;
}

function sayHello(name:string):void{
    console.log("Hello "+name);
}

function sayHelloReturnUndef(name:string):undefined{
    console.log("Hello "+name);
    return;
}