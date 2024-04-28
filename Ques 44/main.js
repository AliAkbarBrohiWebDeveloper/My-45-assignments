// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandiwich by using following items\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n Now Enjoy sandwich");
}
// Calling the function 3 times and three different number if arguments
make_sandwich("butter", "Bread");
make_sandwich("Chicken", "Mayo", "Egg");
make_sandwich("chicken", "Mayo", "Egg", "Tomato");
