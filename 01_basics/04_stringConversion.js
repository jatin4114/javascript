let someNumber =33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let value =3
let negValue = -value
//console.log(negValue);

let str1 = "hello"
let str2 ="bye"
let str3 = str1 + str2
//console.log(str3);

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)  //if string is first everythig will be treated as string
// console.log(1+1+"2") // if string is at the end then first operation will be done then added to string

console.log(+true);
console.log(+"");

let gameCounter =100
gameCounter++
console.log(gameCounter)

//postfix  increments and return the value before incrementing
let x =3
const y=x++
console.log(`x:${x},y:${y}`)

//prefix increments and return the value after incrementing
let x1 =3n;
const y1=++x1
console.log([x1,y1])