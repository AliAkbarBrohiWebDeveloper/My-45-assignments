"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let FirstName = "muhammad yousif";
// lowercase
console.log(FirstName.toLowerCase());
// uppercase
console.log(FirstName.toUpperCase());
// tittlecase
console.log(FirstName.replace(/\b\w/g, (char) => char.toUpperCase()));
