// arr of function getUnique's parameter is an array of duplicate characters
// create a Set out of arr to get unique values
// then convert it into an array and return that array of unique
// value to complete this task


function getUnique(arr) {
	// code here
  const set = new Set(arr);
  const unique_array = Array.from(set)
  
  return unique_array;
}


try { module.exports = { getUnique } } catch(e) {}