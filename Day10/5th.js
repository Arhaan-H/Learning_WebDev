let { num1, num2 } = require('./secret')
/* You are given two integers num1 and num2
Write logic inside function swap such that, whenever swap is called, it swaps num1 and num2's values
 */

function swap() {
	/* code from here */
function swap() {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

// Example usage:
console.log(`Before swap: num1 = ${num1}, num2 = ${num2}`);
swap();
console.log(`After swap: num1 = ${num1}, num2 = ${num2}`);

	/* to here */
}

swap()
try { module.exports = { swap, num1, num2 } } catch (e) { }