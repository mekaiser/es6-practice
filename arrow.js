// *** one way of declaring function ***
// function doubleIt(num){
//     return num * 2;
// }

// *** another way of declaring function ***
// const doubleIt = function myFunc(num){ // here in this code myfunc is not being used. const doubleIt itself is a container of funtion. That's why doubleIt is a function which will be called when this function will be used
//     return num * 2;
// }

// *** the arrow function ***
const doubleIt = num => num * 2; //arrow func - one parameter
const add = (x, y) => x + y; //arrow func - two parameter
const give5 = () => 5; //arrow func - no parameter
const doMath = (x, y) =>{ //arrow func - huge work inside, need to add result for the output
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50);
const result2 = add(50, 70);
const result3 = give5();
const result4 = doMath(7, 5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
