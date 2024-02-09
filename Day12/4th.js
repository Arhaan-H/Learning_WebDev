// you're given an arr as parameter to the function includesEven
// use Array.some() to check if there exists any even number in
// the array arr
// and return the result from the function includesEven

function includesEven(arr) {
    return arr.some(num => num % 2 === 0);
}

// Example usage:
const arr1 = [1, 3, 5, 7]; // No even numbers
const arr2 = [2, 4, 6, 8]; // All numbers are even
const arr3 = [1, 2, 3, 4, 5]; // At least one even number

console.log(includesEven(arr1)); // Output: false
console.log(includesEven(arr2)); // Output: true
console.log(includesEven(arr3)); // Output: true


try { module.exports = { includesEven } } catch(e) {}