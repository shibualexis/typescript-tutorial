class DataStorage<T extends string | number | boolean>{//This class only supports instance of param string, number and boolean
    private data: T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }

}

var textStorage = new DataStorage<string>();
textStorage.addItem("text1");
textStorage.addItem("text2");
textStorage.removeItem("text1");

var numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);


// var objectStorage = new DataStorage<object>(); // This throws error as the type object is not allowed in the class.
// let person1Obj = {name:"shibu", age:10};
// let person2Obj = {name:"christina", age:90};

// objectStorage.addItem(person1Obj);
// objectStorage.addItem(person2Obj);
// objectStorage.removeItem(person1Obj);

// ==================GENERIC UTILS======================

interface courseDetails{
    title:string,
    description:string,
    courseCompletionDate: Date
}

function createCourse(title:string, description:string, courseCompletionDate:Date)
:courseDetails{
    let courseGoal:Partial<courseDetails> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.courseCompletionDate = courseCompletionDate;

    return courseGoal as courseDetails;
}

const names: Readonly<string[]> = ["shibu","alexis"];
// names.push("christina");// Cannot alter the readonly variable.
