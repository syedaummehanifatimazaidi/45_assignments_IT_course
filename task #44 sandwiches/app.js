"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects 
// as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function makeSandwich(items) {
    console.log('Making your sandwich with:');
    items.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['Tomatoes', 'Chicken breast']);
makeSandwich(['Peanut butter', 'Mayonise']);
