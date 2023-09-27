let score = "33"
let score1 = "33abc"

console.log(typeof score);
console.log(typeof(score)); //functio
console.log(typeof score1);

let valueInNumber = Number(score)
console.log(typeof valueInNumber );

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log([valueInNumber,valueInNumber1,]) //it will return Nan so conversion is not that simple

let score2 = null
console.log(typeof score2)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2)

let score3 = undefined
console.log(typeof score3);
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score4 = true
console.log(typeof score4)
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

//"33"=> 33
//"33ABC" => NaN
// true=> 1; fasle => 0

let isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

let isLoggedIn1 = ""
let boolenIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(boolenIsLoggedIn1);

let isLoggedIn2 = "jatin"
let boolenIsLoggedIn2= Boolean(isLoggedIn2)
console.log(boolenIsLoggedIn2);

//1 => true; 0=>false
// "" = false
//"string" =>  true

