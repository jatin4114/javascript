// console.log("2">1); never compare two different DType
// console.log(1<"2");
console.log(null > 0); //null is converted to 0
console.log(null==0); // these too should not be done
console.log(null >=0);

// === strict check (it compares both datatype and value)
console.log("2"===1);
