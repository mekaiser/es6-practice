    // *** for const you can change some of its elements but you can't change all the elements
const wife = "June";
// console.log(wife);

const numbers = [12, 45]; // you set a number array 
numbers[1] = 88;
numbers.push(12);
// numbers = ["Ifty", "Moon", "Risal"]; // you can't reset with a string array
const nayok = {name: "Sakib khan", phone: 2345};
// console.log(numbers);

    // *** for let you can change its whole value, but always remember that its a scope variable
let patientName = "Rahim Chacha"; 
patientName = "Fatema Khala";
console.log(patientName);
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i);