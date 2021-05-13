class Parent{
    constructor(){
        this.fatherName = 'Schwerrznegger';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ // we don't need to write function before function name here
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');

console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());