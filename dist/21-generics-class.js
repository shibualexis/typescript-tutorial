"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
var textStorage = new DataStorage();
textStorage.addItem("text1");
textStorage.addItem("text2");
textStorage.removeItem("text1");
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
function createCourse(title, description, courseCompletionDate) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.courseCompletionDate = courseCompletionDate;
    return courseGoal;
}
const names = ["shibu", "alexis"];
// names.push("christina");// Cannot alter the readonly variable.
//# sourceMappingURL=21-generics-class.js.map