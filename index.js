//Lesson 01 - 02/11
//Introduction to JavaScript

//Example of JavaScript code running in the browser
console.log("Hello, world! This is a JavaScript script.");

//Variables and data types

//Variable declaration
var name = "John"; //var: global scope (avoid using)
let age = 25; //let: block scope (recommended)
const PI = 3.1415; //const: fixed value that cannot be changed

//Primitive types
let text = "Hello, world!"; //String
let number = 42; //Number
let booleanValue = true; //Boolean
let nullValue = null; //Null (intentionally empty value)
let undefinedValue; //Undefined (no value assigned)

//Arrays and Objects
let fruits = ["Apple", "Banana", "Orange"]; //Array
let person = {name: "Carlos", age: 30}; //Object
console.log(fruits[0]); //Accesses the first element of the array
console.log(person.name); //Accesses the 'name' property of the object

//Control Structures

//If-else conditional
let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

//Switch-case for multiple conditions
let color = "blue";
switch (color) {
    case "red":
        console.log("The chosen color was red.");
        break;
    case "blue":
        console.log("The chosen color was blue.");
        break;
    default:
        console.log("Unrecognized color.");
}

//Loops
//For - executes a block of code multiple times
for (let i = 0; i < 5; i++) {
    console.log("Counter:", i);
}
//While - executes while the condition is true
let counter = 0;
while (counter < 3) {
    console.log("Number:", counter);
    counter++;
}

//Functions and Scope

//Traditional function
function greeting(name) {
    return "Hello, " + name + "!";
}
console.log(greeting("Maria"));

//Arrow Function (modern function)
const double = (num) => num * 2;
console.log(double(5)); //Returns 10

//Variable scope
let globalVar = "I am global";
function testScope() {
    let localVar = "I am local";
    console.log(globalVar); //Accesses global variable
    console.log(localVar); //Accesses local variable
}
testScope();
//console.log(localVar); //Error! 'localVar' is not accessible outside the function

//Callback function (introduction)
function process(callback) {
    console.log("Processing...");
    callback();
}
process(() => console.log("Finished!"));

//Asynchronous function (introduction)
async function fetchData() {
    return "Data received!";
}
fetchData().then(console.log); //Uses .then to handle the response