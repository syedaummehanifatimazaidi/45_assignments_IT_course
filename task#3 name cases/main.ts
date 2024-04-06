let myName : string = "syeda umm e hani fatima";
console.log(myName);

//print in lowercase

console.log(`lowercase : ${myName.toLowerCase()}`);

//print in uppercase

console.log(`uppercase : ${myName.toUpperCase()}`);

//print in Title Case

console.log(`Titlecase: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);