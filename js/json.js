const user = {id: 1, name: 'Gorib Amir', job: 'actor', isMale: true};

//  Java Script Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    location: {
        street: 'kochukhet voot er goli',
        city: 'dhaka',
        country: 'BD',
    },
    products: [ 'laptop', 'mobile', 'keyboard', 'mouse'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);