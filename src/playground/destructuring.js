
const person = {
    name: 'Cameron',
    age: 27,
    location: {
        city: 'Hyde Park',
        temperature: 79
    }
}

// const name = person.name;
// const age = person.age;

const { name = 'Anonymous', age = 25 } = person;
const {  temperature, city: myCity } = person.location;

console.log(`${name} is ${age}.  He lives in ${myCity} and it is ${temperature} degrees.`);

// Destructure Book
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        publisherName: 'Penguin'
    }
};

const { title, author } = book;
const { publisherName } = book.publisher;

console.log(`I am reading a book called ${title} by ${author}.  It was published by ${publisherName}.`);