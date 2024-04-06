let Dinner_Guests :string[] = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];

// for(let i = 0; i<Dinner_Guests.length; i++)
// {
//     console.log('Dear Mr. ' + Dinner_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Zardari';

Dinner_Guests[0] = new_Guest;

// for(let i = 0; i<Dinner_Guests.length; i++)
// {
//     console.log('Dear Mr. ' + Dinner_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
//  }

// console.log(`Mr. ${absent_Guest} is not coming to the party.\n\n`);

// console.log('Good News ! We find big table so we are invite 3 more guests.\n\n')

Dinner_Guests.unshift('Sir Zia Khan');
Dinner_Guests.splice(2 , 0 , 'Maryan Nawaz');
Dinner_Guests.push('Zardari');

for(let i = 0; i<Dinner_Guests.length; i++)
{
    // console.log('Dear Mr. ' + Dinner_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}

// console.log('\nsorry we can not arrange big table , Only two peoples will be invited.');

while(Dinner_Guests.length > 2)
{
    let remove_Guests = Dinner_Guests.pop();
    console.log(`Sorry Mr. ${remove_Guests},, You are not invited for Dinner.`);
}

// for(let i = 0; i<Dinner_Guests.length; i++)
// {
//     console.log('Dear Mr. ' + Dinner_Guests[i] + ',\n\nYpu are still invited.\n\nThank You!\n\n')
// }

Dinner_Guests.splice(0 , 2);

console.log(Dinner_Guests);


// Exercise 19

console.log(`Total number of Guest are: ${Dinner_Guests.length}`)