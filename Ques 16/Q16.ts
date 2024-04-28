// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite /to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// 
// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
// Creating a guest list aaray
let guestlist:string []= ['Sadiq' , "Jamal" , "Zahid","Zubair","Jabbar"]
// making varriable for those guest who can not come 
let donotCome=guestlist[0]
//print the name of guest who can not come 
console.log (donotCome , "Can not come ");
//Add or Remove from guestlist array 
guestlist.splice(0,1,"Aamir");
// Message print for Bigger table 
console.log ("good news ! We have found a bigger table for dinner");
// adding a new guest at starting index of array
guestlist.unshift("Ali");
// Adding anew guest at ending index of array
guestlist.push("Zain");
// Get a middle index of our guest list array
let middleIndex:number= Math.floor (guestlist.length/2);
// Adding a new guest middle index array
guestlist.splice(middleIndex, 0,"Jamil")
// print message of updated list 
console .log ("updated list of the guests");
// sending a invitation message our guests one by one 
guestlist.forEach(oneguest => console.log (`Salam ${oneguest}, Would you like  to dinner with me` );