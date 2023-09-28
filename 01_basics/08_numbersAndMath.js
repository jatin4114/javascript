const score=400;
const score1 = new Number(100)
console.log(score1);
console.log(score1.toString().length);
console.log(score1.toFixed(2));

const otherNumber =1223.9534
console.log(otherNumber.toPrecision(3));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));


//++++++++++++++++++ Math +++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.1));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));

console.log(Math.random());
console.log((Math.random()*10) + 1 );

const min =10
const max =20

console.log(Math.floor(Math.random() *(max-min +1)) + min)

