const name =  "Jatin"
const repocount =50

// console.log(name + repocount + "value"); // concatenation of string outdated format
// console.log(`hello my name is ${name} and i am a ${repocount} years old`);

 const gameName = new String('Jatinnn-gh-gg-gf-df-sd');
// console.log(gameName);
// console.log(gameName[1]);
// console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('t'));

//these are string methods there are lot more to learn

const newString = gameName.substring(1,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = " jatin    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://jatin.com/tantan%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('jat'));
console.log(gameName.split('-')); // it converts seprated strings into array

