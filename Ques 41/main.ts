// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



function show_magicians(Magicians:string[]){
    Magicians.forEach(names=> console.log(names));
}

let magician_names=["Antonio Guetters","Mark ZukerBerg","Jamal"];

show_magicians(magician_names)