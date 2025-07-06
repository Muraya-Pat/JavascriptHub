// function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// example usage
console.log(greet("Alice"));  // Output: Hello, Alice!

// function expression
const add = function(a, b) {
    return a + b;
}
// example usage
console.log(add(5, 10));  // Output: 15

// arrow function
const multiply = (x, y) => {
    return x * y;
}
// example usage
console.log(multiply(4, 5));  // Output: 20

// immediately invoked function expression (IIFE)
(function() {
    console.log("This is an IIFE!");
})();  // Output: This is an IIFE!

// callback function
function processData(data, callback) {
    // Simulate processing data
    let processedData = data.map(item => item * 2);
    callback(processedData);
}
// example usage
processData([1, 2, 3], function(result) {
    console.log("Processed Data:", result);  // Output: Processed Data: [2, 4, 6]
});
