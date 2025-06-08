
// Here are 20 JavaScript destructuring exercises. Try to solve each one before checking the answers at the bottom!

// **Exercises:**

// 1. Destructure the first and second items from `const arr = [10, 20, 30];` into variables `a` and `b`.
        const arr = [10, 20, 30];        
        const [a, b] = arr;  

// 2. Destructure the `name` and `age` properties from `const person = { name: 'Sam', age: 25, city: 'NY' };`.
        const person = { name: 'Sam', age: 25, city: 'NY' };
        const { name, age } = person;

// 3. Destructure the third item from `const nums = [1, 2, 3, 4];` into variable `third`.
        const nums = [1, 2, 3, 4];
        const [ , , third] = nums;

// 4. Destructure `x` and `y` from `const point = { x: 5, y: 10 };`.
        const point = { x: 5, y: 10 };
        const {x, y} = point;

// 5. Destructure the first and last items from `const colors = ['red', 'green', 'blue'];` into `firstColor` and `lastColor`.
        const colors = ['red', 'green', 'blue'];
        const [firstColor, , lastColor] = colors;
    
// 6. Destructure `title` from `const book = { title: '1984', author: 'Orwell' };`.
        const book = { title: '1984', author: 'Orwell' };
        const {title} = book;

// 7. Destructure the first two items from `const fruits = ['apple', 'banana', 'cherry'];` into `fruit1` and `fruit2`.
        const fruits = ['apple', 'banana', 'cherry'];
        const [fruit1, fruit2] = fruits;

// 8. Destructure `width` and `height` from `const size = { width: 100, height: 200, depth: 50 };`.
        const size = { width: 100, height: 200, depth: 50 }
        const {width, height} = size;

// 9. Destructure the second item from `const letters = ['a', 'b', 'c'];` into `secondLetter`.
        const letters = ['a', 'b', 'c'];
        const [ , secondLetter] = letters;

// 10. Destructure `country` from `const address = { city: 'Paris', country: 'France' };`.
        const address = { city: 'Paris', country: 'France' };
        const {country} = address;

// 11. Destructure the first item and skip the second from `const array = [1, 2, 3];` into `first` and `third`.
        const array = [1, 2, 3];
        const [first, , anotherThird] = array;

// 12. Destructure `engine` from `const car = { make: 'Toyota', engine: 'V6' };`.
        const car = { make: 'Toyota', engine: 'V6' };
        const {engine} = car;

// 13. Destructure the first three items from `const numbers = [7, 8, 9, 10];` into `n1`, `n2`, `n3`.
        const numbers = [7, 8, 9, 10];
        const [n1, n2, n3] = numbers;

// 14. Destructure `email` and `phone` from `const contact = { email: 'a@b.com', phone: '123-456' };`.
        const contact = { email: 'a@b.com', phone: '123-456' };
        const {email, phone} = contact;
        
// 15. Destructure the last item from `const newArr = [4, 5, 6];` into `last`.
        const newArr = [4, 5, 6];
        const [,, last] = newArr;

// 16. Destructure `firstName` and `lastName` from `const user = { firstName: 'Jane', lastName: 'Doe' };`.
        const user = { firstName: 'Jane', lastName: 'Doe' };
        const {firstName, lastName} = user;

// 17. Destructure the first item from `const animals = ['cat', 'dog', 'bird'];` into `firstAnimal`.
        const animals = ['cat', 'dog', 'bird'];
        const [firstAnimal] = animals;

// 18. Destructure `price` from `const item = { name: 'Pen', price: 1.5 };`.
        const item = { name: 'Pen', price: 1.5 };
        const {price} = item;

// 19. Destructure the second and third items from `const finalArr = [100, 200, 500];
        const finalArr = [100, 200, 500];
        const [, secondItem, thirdItem] = finalArr;
