let score = "33abc";
//let score = 33
//let score = null
// let score = undefined


// you can check both method to Type conversion
console.log(typeof score);
console.log(typeof (score)); 

//let score = "33";(this is a string value)



// conversion here
let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber);



/*        Notes:-

"33" => 33
"33abc" => NaN
but type of nan is number

true => 1
false => 0

 */


let isLoggedIn = 1;
let bollenIsLoggedIn = Boolean(isLoggedIn);
console.log(bollenIsLoggedIn);

/* 
let isLoggedIn  = 1 => true
let isLoggedIn  = "" => false
let isLoggedIn  = "faijan" => True
 */


let someNumber = 33;
let someString = String(someNumber);
console.log(someString);
console.log(typeof someString);
/*
33 => string (but show as a number)
typeof => string
 */