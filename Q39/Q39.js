"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
city_country("Colombo", "Sri Lanka");
console.log(city_country("colombo", "Sri Lanka"));
city_country("Khatmandu", "Nepal");
console.log(city_country("Khatmandu", "Nepal"));
city_country("Dhaka", "Bangladesh");
console.log(city_country("Dhaka", "Bangladesh"));
