import { isValidEmail, isAllLetters } from './validator.js';



const person = {
    name: "John Doe",
    age: 42,
    email: "john@doe.com",
    country: "Canada"
}

//Challange: Validation on update of the properties
// name only contains of letters, and is at least 3 characters long
// email property has to be a valid email address.
// age >=18

const personProxy = new Proxy(person, {
    get: (target, property) => {
        return Reflect.get(target, property);
    },
    set: (target, property, newValue) => {
        if (property === 'age' && typeof newValue === 'number' && newValue <= 18) {
            throw new Error('Please provide a valide age');
        }

        return Reflect.set(target, property, newValue);
    }
});

console.log(personProxy);

personProxy.age = 12;

console.log(personProxy);
