// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
// Making the great function
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
;
var magicians_names = ["Jamal", "Abdul Rahim", "Karim"];
// Making a copy of original array through .slice()method
var copy_magicians_names = magicians_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magician = make_great(copy_magicians_names);
// show both arrays orginal and copied
//orginal
show_magicians(magicians_names);
// Copied
show_magicians(copy_great_magician);
