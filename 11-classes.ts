type EmployeeObj = {name: string, age: number, expertise:string};
type depType = "" | "admin" | "finance" | "IT";

class Department{
    protected employees: (string | EmployeeObj)[] = [];
    protected depType:depType = "";

    constructor(private id:string, private name:string){
    }

    describe(){
        console.log(this.name + " department is created!");
        
    }

    addEmployee(employeeName:  string | EmployeeObj){
        this.employees.push(employeeName);
    }

    
    public set departmentType(depType:depType) {
        this.depType = depType;
        console.log("department type is defined");
    }

    
    public get departmentType() : depType {
        console.log("department type is retrieved");
        return this.depType;
    }
    
    public static listAllEmployees(dep:Department):(string | EmployeeObj)[]{
        return dep.employees;

    }

    // abstract onboardFormalities():void;
    
}



let accountsDept = new Department("dep-1001", "Accounts");
accountsDept.departmentType = "finance";
accountsDept.describe();
console.log(accountsDept.departmentType);//class get method is triggered

accountsDept.addEmployee({name: "shibu", age: 10, expertise:"it"});
// accountsDept.employees[1] = "Alexis"; // Not allowed as employees is a private property.



class ITDepartment extends Department{

    
    constructor(id:string, name:string){

        super("IT-"+id,name);

    }

    addEmployee(employeeName:  string | EmployeeObj){
        this.employees.push(employeeName);
    }


}

let its = new ITDepartment("1001","ITS");
let zorro = new ITDepartment("1002","ZORRO");
console.log(its);
console.log(zorro);

zorro.addEmployee("shibu");
zorro.addEmployee("alexis");
zorro.addEmployee("suresh");

console.log(Department.listAllEmployees(zorro));

