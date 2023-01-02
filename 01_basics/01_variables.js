const accountId = 14453
let accountEmail = "faianansari558@gmil.com"
var accountPassword = "Faijan12345" 
/* in recent cenario we don't use var 
because of issue in block scope and functional scope 
*/
accountCity = "DildarNagar"
let accountstate;   // value would be undefined

/* All these keyword assigned/allocate in to memory.
Eg - consol.log keyword use for output on screen.
const variables doesnot allow to change its value which is assigned to this value(const)

*/

//accountId = 2 not allowed

accountEmail = "leviathon@123google.com"
accountPassword = "12234"
accountCity = "Gurgaon"
console.log(accountId);

console.table([accountEmail, accountId, accountCity, accountPassword, accountstate]);