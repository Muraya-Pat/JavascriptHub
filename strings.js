// string methods
//creating a string
const str = "Hello, World!";
// Accessing characters
console.log(str[0]); // Output: H
console.log(str.charAt(1)); // Output: e
// String length
console.log(str.length); // Output: 13
// String concatenation
const str2 = " How are you?";
const combinedStr = str + str2;
console.log(combinedStr); // Output: Hello, World! How are you?
// String methods
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.indexOf("World")); // Output: 7
console.log(str.lastIndexOf("o")); // Output: 8
console.log(str.includes("Hello")); // Output: true
console.log(str.startsWith("Hello")); // Output: true
console.log(str.endsWith("!")); // Output: true
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.substring(7, 12)); // Output: World
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
console.log(str.trim()); // Output: Hello, World! (no leading or trailing spaces)
// String template literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!
// String interpolation
const age = 25;
const info = `My name is ${name} and I am ${age} years old.`;
console.log(info); // Output: My name is Alice and I am 25 years old.
