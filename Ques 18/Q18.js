"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// 
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// 
// • Show that your array is still in its original order by printing it.
// 
// • Print your array in reverse alphabetical order without changing the order of the original list.
// 
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// 
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Making array of acountries and print it its in orginal order
let countrieslist = ["USA", "Canada", "Argentina", "Turkey", "Afghanistan"];
console.log("orginal order:", countrieslist);
//Print the array in alphabitical order without modifying the actual array list
console.log("Alphabitical order:", [...countrieslist].sort());
// Show that the array is still in its original order 
console.log("still in orginal order :", countrieslist);
//print the array in reversed order without modifying the actual array list
console.log("Reverse order:", [...countrieslist].reverse());
// Show that the array is the still in orginal order
console.log("still in orginal order :", countrieslist);
//WE have changed the orginal array order now
console.log("orginAL Array Reversed:", countrieslist.reverse());
// Print the array to show that its to back to its orginal order
console.log("Back to original order :", countrieslist.reverse());
// print the array to show that its order has been changed in alphabitical order
console.log("sorted in aaalphabitical order:", countrieslist.sort());
// we have changed again the orginal order reverse again 
console.log("orginal array reversed:", countrieslist.reverse());
