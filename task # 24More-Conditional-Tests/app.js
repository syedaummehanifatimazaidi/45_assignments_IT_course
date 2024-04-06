"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality and Inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Inequality test with strings: ", "Apple" != "orange");
// test using the lowercase function
console.log("Low case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical test involving equality and inequality
console.log("Equality test with numvers: ", 26 === 26);
// greater than test 
console.log("Greater than test: ", 10 > 5);
// Less than test 
console.log("Less than test: ", 5 < 10);
// greater than or equal to test
console.log("Greater than or equal to test: ", 10 >= 10);
// Less than or equal to test
console.log("Less than or equal to test: ", 5 <= 10);
// Test using "and"  opertor
console.log("And operator test: ", 5 === 5 && 10 > 5);
// Test using  "or" opertor
console.log("Or operator test: ", 5 === 5 || false);
// Test whether an iem is in a array 
const fruits = ['Apple', 'Mango', 'Banana'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// Test whether an iem is not in array 
console.log('Test "Grapes" is not in array: ', !fruits.includes("Grapes"));
