// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function create_car(manufacturer,model,...options){

    let car={
manufacturer:manufacturer,
model:model
    };

options.forEach(Option=>
    {
       let [key,value]=Option.split(":");
       car[key.trim()]=value
    }
);
return car;




}

let my_car=create_car("Toyota","corolla","Model:2015","colour:White")


console.log(my_car)



