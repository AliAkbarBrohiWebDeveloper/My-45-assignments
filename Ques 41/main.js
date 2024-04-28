// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(Magicians) {
    Magicians.forEach(function (names) { return console.log(names); });
}
var magician_names = ["Antonio Guetters", "Mark ZukerBerg", "Jamal"];
show_magicians(magician_names);
