let guest_list: string[] = ["Ali", "Ghalib", "Ambreen", "Haniya"];
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
guest_list.unshift("Rehman","Sufiyan","Muskan");
for (let a = 0; a < guest_list.length; a++) {
    console.log(
      "Respected Madam/Sir" +
        guest_list[a] +
        "\nWe invited you at Dinner Tomorrow because we found a big table so we decided to invite 3 more guest,\nTHANKYOU\n"
    );
  }
