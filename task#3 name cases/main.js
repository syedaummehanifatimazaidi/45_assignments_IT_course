var myName = "syeda umm e hani fatima";
console.log(myName);
//print in lowercase
console.log("lowercase : ".concat(myName.toLowerCase()));
//print in uppercase
console.log("uppercase : ".concat(myName.toUpperCase()));
//print in Title Case
console.log("Titlecase: ".concat(myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
