// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians (magicians:string[]){
    magicians.forEach(name=> console.log(name));
};
// Making the great function
function make_great(magicians:string[]){
    return magicians.map(name=> `The Great ${name}`)
};

let magicians_names=["Jamal","Abdul Rahim","Karim"]

let great_magicians=make_great(magicians_names)
console.log(great_magicians)