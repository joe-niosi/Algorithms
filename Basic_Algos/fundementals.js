// Fundemental Algos to practice

// #1
// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myName = 'Joey';
var myNumber = 42;
console.log("myNumber = " + myNumber);
console.log("myName = " + myName);

var temp = myNumber; // stores nyNumber variable in temp variable
var myNumber = myName; // stores myName into myNumber, this is the first swap (swaps name into Number)
var myName = temp; // stores myNumber into name, this is the second swap (swaps number into name)
console.log('myName is swapped with ' + myNumber); // prints literal string with + myNumber , but myNumber prints Joey
console.log("myNumber is swapped with " + myName); // prints literal string with + myName , but myName prints 42