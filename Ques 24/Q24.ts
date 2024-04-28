// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array
// 
// • Test whether an item is not in a array
// define variables
let apple = "apple"
let upperCaseApple="APPLE"
let ten=10
let twenty = 20
let pakTeam =["Babar Azam", "Muhammad Rizwan","Iftakhar"]

// test for equality &inequality with strings
console.log ("Is Apple is equal to apple? ");
console.log (apple=="apple")
console.log ("\nIs apple is not equal to apple? ");
console.log (apple!=apple)
// text using loweecase function
console.log ("\nIs APPLE is equal to apple after converting lower case?")
console.log (upperCaseApple. toLowerCase()== "apple");



console.log ("\nIs APPLE is  not equal to apple after converting lower case?")
console.log (upperCaseApple. toLowerCase()!= "apple");
// Numerical tests
console.log ("Is ten equal to Twenty?")
console.log (ten == twenty)
// not equal to

console .log ("\n Is ten is not equal to twenty?")
console.log (ten!=twenty)

// Greater than
console.log ("\n IS ten is greater than zero?");
console.log(ten>0)


// Less than 

console .log ("\n IS ten is less  than zero?");
console.log(ten < 0)

// Greater than or equal to

console.log ("\n  Is  ten is greater than or equal to 5?");
console.log(ten>=5)

// less than or equal to 

console.log ("\n Is 5 is less than or equal to 3?");
console.log (5<=3);

// Tests using "and"& and or opretors



// using && opretor  (AND)
console.log ("\n  twenty is not equal to 1o and twenty is greater than 10")
console.log (twenty !=10 &&twenty >10)


console.log ("\n  twenty is not equal to 30 and twenty is greater than 30")
console.log (twenty !=30 &&twenty >30)



/// using || operator (OR)
console.log("\n 30 is greater than 50 OR 30 is equal to 30? ");
console.log (30 >50||30==30)


console.log("\n 30 is greater than 50 OR 30 is not equal to 30? ");
console.log (30 >50||30!=30)

// test whether in item is include in array
console.log("\nIs Muhammad Rizwan include in my pakteam array");
console.log (pakTeam.includes("Muhammad Rizwan"));


// Not include array

console.log("\nIs Muhammad Rizwan not include in my pakteam array");
console.log (!pakTeam.includes("Muhammad Rizwan"));