//primitive:  call by value
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non primitive: call by reference

//Array, objects, function


//............................................................
//Memory 

//stack(primitive), Heap (NON -primitive)

let myYoutube="jatin "
let anotherYoutube= myYoutube
anotherYoutube="chai peelo"
console.log(myYoutube);
console.log(anotherYoutube);

let userOne={
    email:"jatinpanghal007@gmail.com"
}

let userTwo= userOne
    userTwo.email ="mihit@gmsil.com"
    
    console.log(userOne.email);
    console.log(userTwo.email);
