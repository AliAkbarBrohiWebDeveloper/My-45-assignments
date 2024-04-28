"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with yoend + ' ' +" can not Make it, for dinner");ur program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestlist = ["Sikandar", "Saud", "Sidra ", "Samad", "Karim", "Jabbar"];
let CannotAttend = guestlist[0];
console.log(CannotAttend, "can not come");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(guest => console.log(`Assalamalaikum ${guest}, would you like to dinner with me?`));
