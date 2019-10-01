// console.log('destructuring');
//
// Object destucturing
//

// const person = {
//     name: 'Frank',
//     age: 99,
//     location: {
//         city: 'Washington',
//         state: 'DC',
//         temp: 73
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age} years old.`);

// const {temp: temperature, city, state} = person.location;
// if (city && temperature && state) {
//     console.log(`The temperature is ${temperature} in ${city}, ${state}.`);
// }

// const book = {
//     title: 'Play Hungry',
//     author:'Pete Rose',
//     publisher: {
//         //name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//
// Array destucturing
//

const address = ['144 S Main St', 'Waco', 'TX', '7610'];

const [street, city, state = 'NY', zip] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee', '$2.00', '$2.50', '$3.00'];
const [menuItem, , mediumPrice] = item;

console.log(`A medium ${menuItem} costs ${mediumPrice}.`);