let guest_list: string[] = ["Ali", "Ghalib", "Ambreen", "Haniya"];
for (let a = 0; a < guest_list.length; a++) {
  console.log(
    "Respected Madam/Sir" +
      guest_list[a] +
      "\nWe invited you at Dinner Tomorrow,\nTHANKYOU\n"
  );
}
let not_present: string = "Haniya";
let new_guest: string = "Mahira Khan";
guest_list[3]=new_guest;
for (let a = 0; a < guest_list.length; a++) {
  console.log(
    "Respected Madam/Sir" +
      guest_list[a] +
      "\nWe invited you at Dinner Tomorrow,\nTHANKYOU\n"
  );
}
console.log(`miss, ${not_present} will not come to dinner tomorrow.`);
