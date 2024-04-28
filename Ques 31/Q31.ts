// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames=["Jabbar","Jamal","Admin","Kareim"]
usernames=[]
if(usernames.length===0){
    console.log("Your arraay is empty,We need to find some users")

}else{
    usernames.forEach(oneUser=>{
      if (oneUser==="Admin"){
            console.log(`Hello ${oneUser}, Would you like yo see a status report?`)
        }else{
            console.log (`Hello ${oneUser},thank you for loging in again`)
        }
    })
}