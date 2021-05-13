// old style - 01
// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }

// old style - 02
// function add(num1, num2){
//         num2 = num2 || 0;
//         return num1 + num2;
// }

// new style - 02
function add(num1, num2 = 20){ // num2 = 20 - will work when the user forgot to pass the value of num2
        return num1 + num2;
}

const total = add(15, 1);
console.log(total);