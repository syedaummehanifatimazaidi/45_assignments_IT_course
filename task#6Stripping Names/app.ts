"use strict";
/*task # 6:stripping Names:store a person's name,and include some whitespace characters at the beginning and end of the name. make sure you use each character combination,"\t" and "\n" at least once. print the name once, so the whitespace around the name is displayed. then print the name after stripping the white spaces*/

let Namewithwhitespace: string = "\n\t hani \t\n";
console.log(Namewithwhitespace);
let Namewithoutwhitespace = Namewithwhitespace.trim();
console.log(Namewithoutwhitespace);