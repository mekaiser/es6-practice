class Student{
    // constructor is used to pass changeable properties to create objects
    // constructor is a method name used inside the class so that we can create an object from the class
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Safiuddin School";
    }
}

// object creation from class
const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "June");
const student3 = new Student(29, "Edward");

// console.log(student1, student2);
console.log(student1.name, student2.name);
console.log(student3);