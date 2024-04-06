var guest_list = ["Ali", "Ghalib", "Ambreen", "Haniya"];
for (var a = 0; a < guest_list.length; a++) {
    console.log("Respected Madam/Sir" +
        guest_list[a] +
        "\nWe invited you at Dinner Tomorrow,\nTHANKYOU\n");
}
var not_present = "Haniya";
var new_guest = "Mahira Khan";
guest_list[3] = new_guest;
for (var a = 0; a < guest_list.length; a++) {
    console.log("Respected Madam/Sir" +
        guest_list[a] +
        "\nWe invited you at Dinner Tomorrow,\nTHANKYOU\n");
}
console.log("miss, ".concat(not_present, " will not come to dinner tomorrow."));
