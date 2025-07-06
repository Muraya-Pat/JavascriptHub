// Arrays and their methods
// simple arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Array methods and operations
fruits.push("Orange"); // Add an element to the end
fruits.pop(); // Remove the last element
console.log(fruits.length); // Output: 3
console.log(fruits.indexOf("Banana")); // Output: 1
console.log(fruits.includes("Cherry")); // Output: true
console.log(fruits.join(", ")); // Output: Apple, Banana, Cherry

// Array iteration
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Array slicing and splicing
const slicedFruits = fruits.slice(0, 2); // Get a portion of the array
console.log(slicedFruits); // Output: ["Apple", "Banana"]
fruits.splice(1, 1, "Mango"); // Remove one element and add a new one
console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]

// Array sorting
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b); // Sort in ascending order
console.log(numbers); // Output: [1, 2, 3, 5, 8]
// Array filtering
const evenNumbers = numbers.filter(num => num % 2 === 0); // Filter even numbers
console.log(evenNumbers); // Output: [2, 8]
// Array mapping
const doubledNumbers = numbers.map(num => num * 2); // Double each number
console.log(doubledNumbers) // printing the mapped array

// reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // Sum of all numbers
console.log(sum); // Output: 19

// Array destructuring
const [firstFruit, secondFruit] = fruits; // Destructure first two elements
console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Mango