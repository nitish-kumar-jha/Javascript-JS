// Primitive

// 7 types : String, Number, Boolean, nulll, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(typeof id);

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// console.log(bigNumber);


// Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["Shhaktiman", "naagraaj", "doga"]
// console.log(heros);

let myObj = {
    name : "hitesh",
    age: 22
}
// console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "MastiMjaak"

let anotherName = myYoutubename

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email : "user@amazon.com",
    upi: "user@ybl"
}

let userTwo = userOne

// console.log(userTwo.email);

userTwo.email = "user@google.com"
console.log(userOne.email);
console.log(userTwo.email);