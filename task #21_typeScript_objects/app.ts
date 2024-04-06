// Write a program that creates Objects containing these items.

//Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    Student : boolean
}
//person object
let person :person = {
    age : 19,
    name : 'SYEDA UMM E HANI FATIMA',
    nationality : 'Pakistani',
    Student : true
}
//print person
console.log(person);

//Datatype of car object
interface car{
    maker : string,
    colour : string,
    automatic : boolean
}
//person object
let car :car = {
    maker : 'Bugatti La Voiture Noire',
    colour : 'Black',
    automatic : true
}
//print car
console.log(car);