"use strict";
let guest_list = ["Ali", "Ghalib", "Ambreen", "Haniya"];
let not_present = "Haniya";
let new_guest = "Mahira Khan";
guest_list[3] = new_guest;
guest_list.unshift("Rehman", "Sufiyan", "Muskan");
console.log("\nunfortunately we can not arrange a big table, Only two people allow.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry Sir/Madam,${remove_guest} sorry you are not invited for dinner.`);
}
for (let a = 0; a < guest_list.length; a++) {
    console.log("Respected Madam/Sir" +
        guest_list[a] +
        "\n yes you are still invited on tomorrow dinner,\nTHANKYOU\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
