

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city = 'New York City', state = 'New York', zip] = address;

console.log(`Andrew lives in ${city}, ${state}.  His street address is ${street}.`);

const menuItem = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, priceSmall, priceMedium, priceLarge] = menuItem;

console.log(`The price for a medium ${itemName} is ${priceMedium}.`);

