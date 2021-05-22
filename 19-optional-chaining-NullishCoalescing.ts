let response = {
    name: "shibu",
    age: 10,
    details: {role: "CEO", description:"some desciption comes here"}
}

let resp = response;

let role = response?.details?.role; // Incase details is null, then role will not be accessible. 
//Hence runtime error will not be thrown. 



const somevalue:string = "";

const isNullOrUndefined = somevalue ?? "DEFAULT"; // This is called Nullish Coalescing operator. 
//This will give a falsy value only when null or undefined. Not for 0 or empty

