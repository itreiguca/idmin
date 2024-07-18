// Ensuring a variable is always an object
let b = null; // or any other initial value

if (b === null || typeof b !== "object") {
    b = {}; // Assign an empty object if b is null or not an object
}

console.log(b); // Output: {}
