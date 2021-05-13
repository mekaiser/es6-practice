    // *** যে structure আছে সে structure অর্থাৎ যে object বা array আছে সেই object থেকে একটা বা দুইটা property কে নিয়ে আসতে চাচ্ছি। এই way টাকে বলে destructure করা, কারন পুরো structure টাকে ভেঙ্গে একটা বা দুইটা property কে আমি নিয়ে আসতেছি। এবং সেগুলোকে ঐ property এর নামে থাকা variable গুলোতে সেট করতেছি *** 
const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Emma Watson', address: 'Katabon', phone: 448555, friens: ['Tom hanks', 'Tom Cruise', 'Tom yarn']};

const {phone, gfName} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger leader'
    }
}

const {leader} = complexObject.info;

const gfName = person.gfName;
const phone = person.phone;

console.log(gfName);
console.log(gfName);
console.log(gfName, phone);

console.log(leader);

//-------------------------------------------------

const friends = ['Sakib Khan', 'Arman Khan', 'Salman Khan', 'Shahrukh Khan', 'Aluk Khan'];

const [chotoFriend, nextFriend, ...restFriends] = friends; // এটা friends array এর যথাক্রমে ১ম ও ২য় element টাকে নিয়ে নিবে এবং restFriends variable বাকি যে elements গুলো আছে array তে সেগুলোকে নিইয়ে নিবে

console.log(chotoFriend, nextFriend);
console.log(restFriends);