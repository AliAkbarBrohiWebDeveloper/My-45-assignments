// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
