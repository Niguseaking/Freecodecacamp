// Step 24
// In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.
// Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console.
// After logging, change the last element of cities to the string "Mexico City", then log the cities variable again.
// When done correctly, you should see this output in the console.
// Example Code
// [ "London", "New York", "Mumbai" ]
// [ "London", "New York", "Mexico City" ]
let cities =["London","New York","Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
25
// Step 25
// Now you are ready to move onto the next set of array lessons.

// Remove all of your code from the previous step.
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities); // remove all code

// Step 26
// A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.

// Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

// Example Code
// array.push(12);
// Use .push() to add the string "freeCodeCamp" to the end of your rows array. Add this code before your console.log so you can see the change you made to your array.
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);
// Step 27
// Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.

// When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

// Create a new variable called popped and assign it the result of rows.pop(). Then, log popped to the console.
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");

console.log(rows);
let popped =rows.pop();
console.log(popped);
// Step 28
// You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - and you pushed "freeCodeCamp" to the end of the array earlier.

// But what does .push() return? Assign your existing rows.push() to a new pushed variable, and log it.
rows.push("freeCodeCamp");
let pushed = rows.push() 
console.log(pushed);
// Step 29
// Were you expecting to see 4 in the console? .push() returns the new length of the array, after adding the value you give it.

// It is important to be aware of what values a method returns. Take some time to experiment with .push() and .pop(). When you are ready, remove all of your .push() and .pop() calls, and your console.log statements.
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);// remove the code
// Step 30
// Change your rows declaration to be assigned an empty array again.

// Also, change your 'Hello' string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project.
let character ="Hello";
let count = 8;
let rows = [];
// Step 31
// Declaring a variable with the let keyword allows it to be reassigned. This means you could change character later to be a completely different value.

// For this project, you will not want to change these variable values. So instead, you should use const to declare them. const variables are special.

// First, a const variable cannot be reassigned like a let variable. This code would throw an error:

// Example Code
// const firstName = "Naomi";
// firstName = "Jessica";
// A const variable also cannot be uninitialized. This code would throw an error:

// Example Code const firstName;
// Replace your let keywords with const.
const character = "Hello";
const count = 8;
const rows = [];
// Step 32
// You are now ready to start building your pyramid generator. Your character variable will serve as the building block for the pyramid.

// "Hello" might not work very well for that. Change the value of character to be the hash character "#".
const character = "#";
const count = 8;
const rows = [];
